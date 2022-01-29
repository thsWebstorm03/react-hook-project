import { RefObject, useState } from 'react'
import useDragEvents from './useDragEvents'

export type UseDragOptions = {
  dragImage?: string,
  dragImageXOffset?: number,
  dragImageYOffset?: number,
  transfer?: string | number | Record<string, any>,
  transferFormat?: string,
}

const defaultOptions: UseDragOptions = {
  dragImageXOffset: 0,
  dragImageYOffset: 0,
  transferFormat: 'text',
}

const useDrag = <T extends HTMLElement>(targetRef: RefObject<T>, options = defaultOptions): boolean => {
  const { onDragStart, onDragEnd } = useDragEvents<T>(targetRef, true)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const opts: UseDragOptions = { ...defaultOptions, ...(options || {}) }

  onDragStart((event: DragEvent) => {
    setIsDragging(true)

    if (opts.dragImage) {
      const img = new Image()
      img.src = opts.dragImage
      event.dataTransfer.setDragImage(img, opts.dragImageXOffset, opts.dragImageYOffset)
    }

    if (opts.transfer) {
      const data = typeof opts.transfer === 'object' ? JSON.stringify(opts.transfer) : `${opts.transfer}`
      event.dataTransfer.setData(opts.transferFormat, data)
    }
  })

  onDragEnd(() => setIsDragging(false))

  return isDragging
}

export default useDrag
