import { MutableRefObject } from 'react'
import useSwipe, { UseSwipeOptions } from './useSwipe'

const defaultOptions: UseSwipeOptions = {
  threshold: 15,
  preventDefault: true,
}

/**
 * A shortcut to useSwipe (with horizontal options)
 */
const useHorizontalSwipe = <T extends HTMLElement>(ref: MutableRefObject<T> = null, options: UseSwipeOptions = defaultOptions) => {
  const opts: UseSwipeOptions = { ...defaultOptions, ...(options || {}), ...{ direction: 'horizontal' } }

  return useSwipe(ref, opts)
}

export default useHorizontalSwipe
