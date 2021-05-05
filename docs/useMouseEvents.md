# useMouseEvents 

Returns a set of handler setters to control mouse events.<br/>
It possibly accepts a DOM ref to target the event(s) to.
If the target is not provided the events will be globally attached to the `document` object.

Available handler setters: `onMouseDown`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOut`, `onMouseOver`, `onMouseUp`;

**Please note:** the returned handler setters should be immediately invoked in the component's body, do not try to call this functions
asynchronously.

### Why? 💡

- takes care of adding the mouse events listeners globally or to a defined target
- takes care of cleaning the listener when the component unmounts
- allows performing abstractions on mouse related events

### Basic Usage:

Provide a DOM ref as first parameter to `useMouseEvents`

```jsx harmony
import { useRef, useState } from 'react';
import useMouseEvents from 'beautiful-react-hooks/useMouseEvents'; 

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState();
  const ref = useRef();
  const { onMouseMove, onMouseLeave } = useMouseEvents(ref);

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  onMouseLeave(() => {
    setCoordinates(undefined);
  });

  return (
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates.
        {coordinates && <p>Coordinates x:{coordinates[0]} y:{coordinates[1]}</p>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Global events

Avoid providing any argument to `useMouseEvents` to attach the events globally

```jsx harmony
import { useState } from 'react';
import useMouseEvents from 'beautiful-react-hooks/useMouseEvents'; 

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseEvents();

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <DisplayDemo>
      The current mouse coordinates are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- When need to abstract touch related logics into custom hooks(s)

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler 
 possibly leading to bugs in your code.
- Absolutely avoid using `useMouseEvents` handler setters to replace the standard mouse handler props. 
-  `useMouseEvents` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useMouseEvents` handlers instead of the classic props approach it's just as bad as it sounds since you'll
lose the React SyntheticEvent performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { mouseDownHandler } = props;
    
  return (
    <div onMouseDown={mouseDownHandler} />
  );
};
``` 
