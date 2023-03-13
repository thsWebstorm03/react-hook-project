import { type RefObject, useRef, useState } from 'react'
import { type Direction, getDirection, getHorizontalDirection, getPointerCoordinates, getVerticalDirection } from './shared/swipeUtils'
import useMouseEvents from './useMouseEvents'
import useTouchEvents from './useTouchEvents'

/**
 * The options that can be passed to the hook
 */
export interface UseSwipeOptions {
  direction?: 'both' | 'horizontal' | 'vertical'
  threshold?: number
  preventDefault?: boolean
  passive?: boolean
}

/**
 * The result of the hook
 */
export interface SwipeState {
  swiping: boolean
  direction?: Direction
  alphaX: number
  alphaY: number
  count: number
}

const initialState: SwipeState = { swiping: false, direction: undefined, alphaX: 0, alphaY: 0, count: 0 }

const defaultOptions: UseSwipeOptions = {
  direction: 'both',
  threshold: 10,
  preventDefault: true,
  passive: undefined
}

const isEqual = (prev: SwipeState, next: SwipeState): boolean => (
  prev.swiping === next.swiping &&
  prev.direction === next.direction &&
  prev.count === next.count &&
  prev.alphaX === next.alphaX &&
  prev.alphaY === next.alphaY
)

/**
 * useSwipe hook
 */
const useSwipe = <TElement extends HTMLElement>
  (targetRef: RefObject<TElement> | undefined = undefined, options: UseSwipeOptions = defaultOptions) => {
  const [state, setState] = useState(initialState)
  const startingPointRef = useRef<[number, number]>([-1, -1])
  const isDraggingRef = useRef(false)
  const opts: NonNullable<UseSwipeOptions> = { ...defaultOptions, ...(options || {}) }
  const { onMouseDown, onMouseMove, onMouseLeave, onMouseUp } = useMouseEvents<TElement>(targetRef, opts.passive)
  const { onTouchStart, onTouchMove, onTouchEnd, onTouchCancel } = useTouchEvents<TElement>(targetRef, opts.passive)

  const startSwipe = (event: MouseEvent | TouchEvent) => {
    const [clientX, clientY] = getPointerCoordinates(event)
    startingPointRef.current = [clientX, clientY]

    if (opts.preventDefault) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const continueSwipe = (event: MouseEvent | TouchEvent) => {
    const [clientX, clientY] = getPointerCoordinates(event)

    if (opts.preventDefault) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (isDraggingRef.current || (startingPointRef.current[0] !== -1 && startingPointRef.current[1] !== -1)) {
      const alpha: [number, number] = [startingPointRef.current[0] - clientX, startingPointRef.current[1] - clientY]

      if (opts.direction === 'both' && (Math.abs(alpha[0]) > opts.threshold! || Math.abs(alpha[1]) > opts.threshold!)) {
        isDraggingRef.current = true

        const nextState: SwipeState = {
          alphaX: alpha[0],
          alphaY: alpha[1],
          count: state.count,
          swiping: true,
          direction: getDirection([clientX, clientY], startingPointRef.current, alpha)
        }

        if (!isEqual(nextState, state)) {
          setState(nextState)
        }
      }

      if (opts.direction === 'horizontal' && Math.abs(alpha[0]) > opts.threshold!) {
        isDraggingRef.current = true

        const nextState: SwipeState = {
          alphaX: alpha[0],
          alphaY: 0,
          count: state.count,
          swiping: true,
          direction: getHorizontalDirection(alpha[0])
        }

        if (!isEqual(nextState, state)) {
          setState(nextState)
        }
      }

      if (opts.direction === 'vertical' && Math.abs(alpha[1]) > opts.threshold!) {
        isDraggingRef.current = true

        const nextState: SwipeState = {
          alphaY: alpha[1],
          alphaX: 0,
          count: state.count,
          swiping: true,
          direction: getVerticalDirection(alpha[1])
        }

        if (!isEqual(nextState, state)) {
          setState(nextState)
        }
      }
    }
  }

  const endSwipe = (event: MouseEvent | TouchEvent) => {
    if (isDraggingRef.current) {
      if (opts.preventDefault) {
        event.preventDefault()
        event.stopPropagation()
      }

      setState((prevState) => ({
        ...prevState,
        swiping: false,
        count: state.count + 1
      }))
    }

    startingPointRef.current = [-1, -1]
    isDraggingRef.current = false
  }

  onMouseDown(startSwipe)
  onTouchStart(startSwipe)

  onMouseMove(continueSwipe)
  onTouchMove(continueSwipe)

  onMouseUp(endSwipe)
  onTouchEnd(endSwipe)

  onMouseLeave(endSwipe)
  onTouchCancel(endSwipe)

  return state
}

export default useSwipe
