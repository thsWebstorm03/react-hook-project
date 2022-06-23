# useQueryParam

### Why? 💡

- to ease the process of modify the query string in the URL for the current location.
- Works similar to the useState hook
- it's NOT built on top of version 6 of react-router-dom's useSearchParams, it is therefore compatible with older version

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Input } from 'beautiful-react-ui'
import useQueryParam from 'beautiful-react-hooks/useQueryParam';

const ExampleComponent = () => {
  // second parameter is optional
  const [param, setValue] = useQueryParam('foo', {
    initialValue: 'bar',
    replaceState: false,
  })

  return (
    <DisplayDemo>
      <p>Current value of 'foo' param is '{param}'</p>
      <Input value={param} onChange={(e, nextValue) => setValue(nextValue)} />
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```
