import React, { useRef } from 'react';
import { render, fireEvent, cleanup as cleanupReact } from '@testing-library/react';
import { renderHook, cleanup as cleanupHooks } from '@testing-library/react-hooks';
import useDragEvents from '../dist/useDragEvents';

describe('useDragEvents', () => {
  beforeEach(() => {
    cleanupReact();
    cleanupHooks();
    sinon.reset();
  });

  it('should be a function', () => {
    expect(useDragEvents).to.be.a('function');
  });

  it('should return an object of mouse-related callback setters', () => {
    const targetRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useDragEvents(targetRef));

    expect(result.current).to.be.an('object').that.has.all.keys(
      'onDrag', 'onDrop', 'onDragEnter', 'onDragEnd', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart',
    );
  });

  it('should set the draggable attribute to the given element ref', () => {
    const TestComponent = () => {
      const targetRef = useRef();
      useDragEvents(targetRef);

      return <div id="target" ref={targetRef} />;
    };

    const { container } = render(<TestComponent />);


    expect(container.querySelector('#target').getAttribute('draggable')).to.equal('true');
  });

  it('should perform the set handlers when a drag event occurs to the target ref', () => {
    const onDragSpy = sinon.spy();
    const onDropSpy = sinon.spy();
    const onDragEnterSpy = sinon.spy();
    const onDragEndSpy = sinon.spy();
    const onDragExitSpy = sinon.spy();
    const onDragLeaveSpy = sinon.spy();
    const onDragOverSpy = sinon.spy();
    const onDragStartSpy = sinon.spy();

    const TestComponent = () => {
      const targetRef = useRef();
      const {
        onDrag, onDrop, onDragEnter, onDragEnd, onDragExit, onDragLeave, onDragOver, onDragStart,
      } = useDragEvents(targetRef);

      onDrag(onDropSpy);
      onDrop(onDragSpy);
      onDragEnter(onDragEnterSpy);
      onDragEnd(onDragEndSpy);
      onDragExit(onDragExitSpy);
      onDragLeave(onDragLeaveSpy);
      onDragOver(onDragOverSpy);
      onDragStart(onDragStartSpy);

      return <div id="target" ref={targetRef} />;
    };

    const { container } = render(<TestComponent />);

    fireEvent(container.querySelector('#target'), new MouseEvent('drag'));
    fireEvent(container.querySelector('#target'), new MouseEvent('drop'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragenter'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragend'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragexit'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragleave'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragover'));
    fireEvent(container.querySelector('#target'), new MouseEvent('dragstart'));

    expect(onDragSpy.called).to.be.true;
    expect(onDropSpy.called).to.be.true;
    expect(onDragEnterSpy.called).to.be.true;
    expect(onDragEndSpy.called).to.be.true;
    expect(onDragExitSpy.called).to.be.true;
    expect(onDragLeaveSpy.called).to.be.true;
    expect(onDragOverSpy.called).to.be.true;
    expect(onDragStartSpy.called).to.be.true;
  });

  it('if an invalid ref is provided, should not perform the callback', () => {
    const { result } = renderHook(() => useDragEvents({ invalid: true }));

    expect(result.current.onSomething).to.be.a('function');
    expect(result.current.onSomething).to.throw();
    expect(result.current.someProperty).to.be.an('object').that.has.key('error');
  });
});
