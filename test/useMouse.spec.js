import { renderHook, cleanup, act } from '@testing-library/react-hooks';
import useMouse from '../dist/cjs/useMouse';

describe('useMouse', () => {
  beforeEach(cleanup);

  it('should be a function', () => {
    expect(useMouse).to.be.a('function');
  });

  it('should return an array where the first item is a mouse state and the second a group of setters', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useMouse(ref));

    expect(result.current).to.be.an('array');
    expect(result.current.length).to.equal(2);
    expect(result.current[0]).to.be.a('object').that.has.all.keys('clientX', 'clientY', 'screenY', 'screenY');
    expect(result.current[1]).to.be.an('object').that.has.all.keys(
      'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp',
    );
  });

  it('should work without a ref provided ', () => {
    const positionMock = { clientX: 10, clientY: 10, screenX: 30, screenY: 30 };
    const { result } = renderHook(() => useMouse());

    act(() => {
      const mouseEvent = new MouseEvent('mousemove', positionMock);
      document.dispatchEvent(mouseEvent);
    });

    expect(result.current[0]).to.deep.equal(positionMock);
  });
});
