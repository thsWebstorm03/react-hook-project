import { RefObject } from 'react'
import useEvent from './useEvent'
import { CallbackSetter } from './shared/types'

/**
 * Returns a frozen object of callback setters to handle the touch events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useTouchEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useTouchEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useTouchEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 */
const useTouchEvents = <TElement extends HTMLElement>(targetRef?: RefObject<TElement>, passive?: boolean) => {
  const target = targetRef || { current: window.document } as unknown as RefObject<TElement> // hackish but works
  const onTouchStart = useEvent<TouchEvent, TElement>(target, 'touchstart', { passive })
  const onTouchEnd = useEvent<TouchEvent, TElement>(target, 'touchend', { passive })
  const onTouchCancel = useEvent<TouchEvent, TElement>(target, 'touchcancel', { passive })
  const onTouchMove = useEvent<TouchEvent, TElement>(target, 'touchmove', { passive })

  return Object.freeze<UseTouchEventsReturn>({
    onTouchStart,
    onTouchEnd,
    onTouchCancel,
    onTouchMove,
  })
}

/**
 * The return object of the `useTouchEvents` hook.
 */
export interface UseTouchEventsReturn {
  onTouchStart: CallbackSetter<TouchEvent>,
  onTouchEnd: CallbackSetter<TouchEvent>,
  onTouchCancel: CallbackSetter<TouchEvent>,
  onTouchMove: CallbackSetter<TouchEvent>,
}


export default useTouchEvents
