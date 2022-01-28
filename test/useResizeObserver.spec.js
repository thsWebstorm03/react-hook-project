import { act, cleanup, renderHook } from '@testing-library/react-hooks'
import { expect } from 'chai'
import useResizeObserver from '../dist/useResizeObserver'
import ResizeObserverMock from './mocks/ResizeObserver.mock'
import promiseDelay from './utils/promiseDelay'

describe('useResizeObserver', () => {
  const originalRO = global.ResizeObserver

  before(() => {
    global.ResizeObserver = window.ResizeObserver = ResizeObserverMock
  })

  beforeEach(cleanup)

  after(() => {
    global.ResizeObserver = window.ResizeObserver = originalRO
  })

  it('should be a function', () => {
    expect(useResizeObserver).to.be.a('function')
  })

  it('should return undefined when first initialised', () => {
    const refMock = { current: document.createElement('div') }
    const { result } = renderHook(() => useResizeObserver(refMock, 100))

    expect(result.current).to.be.undefined
  })

  it('should return a single function', async () => {
    const refMock = { current: document.createElement('div') }
    const { result, rerender } = renderHook(() => useResizeObserver(refMock, 0))

    act(() => {
      ResizeObserver.simulateResize(refMock.current)
    })

    rerender()

    await promiseDelay(250) // wait 250ms to let the debounced fn to perform

    expect(result.current).to.be.an('object')
  })

  describe('When the API is not supported', () => {
    beforeEach(() => {
      delete global.ResizeObserver
      delete window.ResizeObserver
    })
  
    afterEach(() => {
      global.ResizeObserver = window.ResizeObserver = originalRO
      sinon.restore()
    })
    
    it('should not observe anything', async () => {
      const refMock = { current: document.createElement('div') }
      const warnSpy = sinon.spy(console, 'warn');
     
      const {result} = renderHook(() => useResizeObserver(refMock))

      expect(warnSpy.called).to.be.true
      expect(result.current).to.be.undefined
    })
  })
})
