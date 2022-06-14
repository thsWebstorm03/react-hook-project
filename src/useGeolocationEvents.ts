import { useEffect, useMemo, useRef } from 'react'
import createHandlerSetter from './factory/createHandlerSetter'
import { geoStandardOptions } from './shared/geolocationUtils'
import { BRHGeolocationPosition, BRHGeolocationPositionError } from './shared/types'

/**
 * Returns a frozen object of callback setters to handle the geolocation events.<br/>
 * So far, the supported methods are: `onChange`, invoked when the position changes and `onError`, invoked when
 * an error occur while retrieving the position.<br/>
 * The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.
 */
const useGeolocationEvents = (options: PositionOptions = geoStandardOptions) => {
  const watchId = useRef<number>()
  const [onChangeRef, setOnChangeRef] = createHandlerSetter<BRHGeolocationPosition>()
  const [onErrorRef, setOnErrorRef] = createHandlerSetter<BRHGeolocationPositionError>()
  const isSupported = useMemo(() => typeof window !== 'undefined' && 'geolocation' in window.navigator, [])

  if (!isSupported) {
    throw new Error('The Geolocation API is not supported')
  }

  useEffect(() => {
    const onSuccess = (successEvent: BRHGeolocationPosition) => {
      if (onChangeRef.current) {
        onChangeRef.current(successEvent)
      }
    }
    const onError = (err: BRHGeolocationPositionError) => {
      if (onErrorRef.current) {
        onErrorRef.current(err)
      }
    }

    if (isSupported) {
      watchId.current = window.navigator.geolocation.watchPosition(onSuccess, onError, options)
    }

    return () => {
      if (isSupported) {
        window.navigator.geolocation.clearWatch(watchId.current)
      }
    }
  }, [])

  return Object.freeze({
    isSupported,
    onChange: setOnChangeRef,
    onError: setOnErrorRef,
  })
}

export default useGeolocationEvents
