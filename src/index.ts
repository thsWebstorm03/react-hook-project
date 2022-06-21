/**
 * This file is kept for compatibility reasons.
 * You should avoid importing hooks directly from this file.
 *
 * Avoid importing hooks like this:
 *
 * ```js
 * import { useSomething } from 'beautiful-react-hooks';
 * ```
 *
 * in favour of this:
 *
 * ```js
 * import useSomething from 'beautiful-react-hooks/useSomething';
 * ```
 */
export { default as useDidMount } from './useDidMount'
export { default as useWillUnmount } from './useWillUnmount'
export { default as useLifecycle } from './useLifecycle'
export { default as useWindowResize } from './useWindowResize'
export { default as useWindowScroll } from './useWindowScroll'
export { default as useDebouncedCallback } from './useDebouncedCallback'
export { default as useThrottledCallback } from './useThrottledCallback'
export { default as useMouse } from './useMouse'
export { default as useMouseEvents } from './useMouseEvents'
export { default as useMouseState } from './useMouseState'
export { default as useTimeout } from './useTimeout'
export { default as useInterval } from './useInterval'
export { default as useGlobalEvent } from './useGlobalEvent'
export { default as usePreviousValue } from './usePreviousValue'
export { default as useGeolocation } from './useGeolocation'
export { default as useGeolocationEvents } from './useGeolocationEvents'
export { default as useGeolocationState } from './useGeolocationState'
export { default as useMediaQuery } from './useMediaQuery'
export { default as useValueHistory } from './useValueHistory'
export { default as useOnlineState } from './useOnlineState'
export { default as useViewportSpy } from './useViewportSpy'
export { default as useValidatedState } from './useValidatedState'
export { default as useDragEvents } from './useDragEvents'
export { default as useDrag } from './useDrag'
export { default as useDropZone } from './useDropZone'
export { default as useRequestAnimationFrame } from './useRequestAnimationFrame'
export { default as useLocalStorage } from './useLocalStorage'
export { default as useSessionStorage } from './useSessionStorage'
export { default as useResizeObserver } from './useResizeObserver'
export { default as useDefaultedState } from './useDefaultedState'
export { default as useObservable } from './useObservable'
export { default as useSpeechSynthesis } from './useSpeechSynthesis'
export { default as useSystemVoices } from './useSystemVoices'
export { default as useRenderInfo } from './useRenderInfo'
export { default as useSwipe } from './useSwipe'
export { default as useHorizontalSwipe } from './useHorizontalSwipe'
export { default as useVerticalSwipe } from './useVerticalSwipe'
export { default as useSwipeEvents } from './useSwipeEvents'
export { default as useConditionalTimeout } from './useConditionalTimeout'
export { default as useInfiniteScroll } from './useInfiniteScroll'
export { default as useQueryParam } from './useQueryParam'
export { default as useQueryParams } from './useQueryParams'
export { default as useSearchQuery } from './useSearchQuery'
export { default as useEvent } from './useEvent'
export { default as useViewportState } from './useViewportState'

// keep it just for compatibility issues
export { default as useStorage } from './factory/createStorageHook'

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  console.warn(`
    TIP: To improve your application bundle size, avoid importing hooks from the index file of 'beautiful-react-hooks'.\n
    Try 'import useSomething from 'beautiful-react-hooks/useSomething' instead of 'import { useSomething } from 'beautiful-react-hooks'
  `)
}
