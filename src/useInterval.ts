import { useCallback, useEffect, useRef, useState } from 'react'

import isFunction from './shared/isFunction'
import { type GenericFunction } from './shared/types'

export interface UseIntervalOptions {
  cancelOnUnmount?: boolean
}

const defaultOptions: UseIntervalOptions = {
  cancelOnUnmount: true
}

/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then repeats the
 * execution of the given function by the defined milliseconds.
 */
const useInterval = <TCallback extends GenericFunction>
  (fn: TCallback, milliseconds: number, options: UseIntervalOptions = defaultOptions) => {
  const opts = { ...defaultOptions, ...(options || {}) }
  const timeout = useRef<NodeJS.Timeout>()
  const callback = useRef<TCallback>(fn)
  const [isCleared, setIsCleared] = useState<boolean>(false)

  // the clear method
  const clear = useCallback(() => {
    if (timeout.current) {
      setIsCleared(true)
      clearInterval(timeout.current)
    }
  }, [])

  // if the provided function changes, change its reference
  useEffect(() => {
    if (isFunction(fn)) {
      callback.current = fn
    }
  }, [fn])

  // when the milliseconds change, reset the timeout
  useEffect(() => {
    if (typeof milliseconds === 'number') {
      timeout.current = setInterval(() => {
        callback.current()
      }, milliseconds)
    }

    // cleanup previous interval
    return clear
  }, [milliseconds])

  // when component unmount clear the timeout
  useEffect(() => () => {
    if (opts.cancelOnUnmount) {
      clear()
    }
  }, [])

  return [isCleared, clear] as [boolean, () => void]
}

export default useInterval
