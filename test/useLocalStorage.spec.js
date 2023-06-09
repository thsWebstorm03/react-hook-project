import { cleanup as cleanupReact } from '@testing-library/react'
import { cleanup as cleanupHooks, renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'
import useLocalStorage from '../dist/useLocalStorage'
import assertHook from './utils/assertHook'

describe('useLocalStorage', () => {
  beforeEach(() => {
    cleanupHooks()
    cleanupReact()
  })

  afterEach(() => {
    sinon.restore()
  })

  assertHook(useLocalStorage)

  it('should return null when no default value defined', () => {
    const { result } = renderHook(() => useLocalStorage('storageKey_1'))
    const [value] = result.current

    expect(value).to.equal(null)
  })

  it('should return default value', () => {
    const { result } = renderHook(() => useLocalStorage('storageKey_2', 100))
    const [value] = result.current

    expect(value).to.equal(100)
    expect(JSON.parse(window.localStorage.getItem('storageKey_2'))).to.equal(100)
  })

  it('should store and return new values', () => {
    const { result } = renderHook(() =>
      useLocalStorage("storageKey_3", 100)
    )

    expect(result.current[0]).to.equal(100)
    expect(JSON.parse(window.localStorage.getItem('storageKey_3'))).to.equal(100)

    act(() => {
      result.current[1](200)
    })

    expect(result.current[0]).to.equal(200)
    expect(JSON.parse(window.localStorage.getItem('storageKey_3'))).to.equal(200)
  })

  it('should accept a callback argument for setValue', () => {
    const { result } = renderHook(() =>
      useLocalStorage("storageKey_4", 100)
    )

    expect(result.current[0]).to.equal(100)
    expect(JSON.parse(window.localStorage.getItem('storageKey_4'))).to.equal(100)

    act(() => {
      result.current[1](prev => prev + 100)
    })

    expect(result.current[0]).to.equal(200)
    expect(JSON.parse(window.localStorage.getItem('storageKey_4'))).to.equal(200)
  });

  it('should gracefully handle a getItem error and use the default value', () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        ...window.localStorage,
        getItem: () => {
          throw new Error()
        },
      },
    })

    const { result } = renderHook(() =>
      useLocalStorage("storageKey_5", 100)
    )
    const [value] = result.current

    expect(value).to.equal(100)
  })

  it("should gracefully handle a setItem error and set the new value", () => {
    Object.defineProperty(window, "localStorage", {
      value: {
        ...window.localStorage,
        setItem: () => {
          throw new Error()
        },
      },
    })

    const { result } = renderHook(() =>
      useLocalStorage("storageKey_6", 100)
    )

    act(() => {
      result.current[1](200)
    })

    expect(result.current[0]).to.equal(200)
  })

  it("should return the same setValue reference after setValue is called", () => {
    const { result } = renderHook(() =>
      useLocalStorage("storageKey_7", 100)
    )

    const startingSetValue = result.current[1]

    act(() => {
      result.current[1](prev => prev + 100)
    })
    
    expect(result.current[1]).to.equal(startingSetValue)
  })
})
