import { renderHook, cleanup } from '@testing-library/react-hooks';
import useGeolocation from './useGeolocation';
import GeoLocationApiMock, { watchPositionSpy } from '../test/utils/GeoLocationApiMock';

describe('useGeolocation', () => {
  before(() => {
    window.navigator.geolocation = GeoLocationApiMock;
  });

  beforeEach(cleanup);

  after(() => {
    delete window.navigator.geolocation;
  });

  it('should be a function', () => {
    expect(useGeolocation).to.be.a('function');
  });

  it('should return an array where the first item is a geolocation state and the second an object of setters', () => {
    const { result } = renderHook(() => useGeolocation());

    expect(result.current).to.be.an('array');
    expect(result.current.length).to.equal(2);
    expect(result.current[0]).to.be.a('object').that.has.all.deep.keys('isSupported', 'isRetrieving', 'position');
    expect(result.current[1]).to.be.an('object').that.has.all.keys('isSupported', 'onChange', 'onError');
  });

  it('the provided options should be passed down to the other hooks', () => {
    const optionsMock = { enableHighAccuracy: true };
    renderHook(() => useGeolocation(optionsMock));

    GeoLocationApiMock.listeners.s();
    GeoLocationApiMock.listeners.e();

    expect(watchPositionSpy.called).to.be.true;
    const lastOptions = watchPositionSpy.args[watchPositionSpy.callCount - 1][0];

    expect(lastOptions).to.equal(optionsMock);
  });
});
