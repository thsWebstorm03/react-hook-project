import { renderHook, cleanup } from '@testing-library/react-hooks';
import useMediaQuery from '../src/useMediaQuery';

describe('useMediaQuery', () => {
  const mediaQueryListMock = {
    listeners: {},
    matches: true,
    addListener(cb) {
      this.listeners.cb = cb;
    },
    removeListener() {
      delete this.listeners.cb;
    },
  };

  beforeEach(() => {
    cleanup()
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should be a function', () => {
    expect(useMediaQuery).to.be.a('function');
  });

  it('should return a boolean value', () => {
    window.matchMedia = () => (mediaQueryListMock);
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).to.be.a('boolean');

    delete window.matchMedia;
  });

  it('should warn when the window.matchMedia API is not supported', () => {
    delete window.matchMedia;
    const warnSpy = sinon.spy(console, 'warn');
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    expect(result.current).to.be.null;
    expect(warnSpy.called).to.be.true;
  });
});
