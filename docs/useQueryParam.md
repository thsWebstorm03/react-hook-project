# useQueryParam

A hook built on top of React Router v5 that facilitate access and manipulation of query parameters.

### Why? 💡

- Facilitates editing the query string in the URL for the current location
- Functions similarly to the useState hook
- Does not rely on version 6 of the useSearchParams function from react-router-dom, ensuring compatibility with older versions

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Typography, Tag, Input } from 'antd';
import useQueryParam from 'beautiful-react-hooks/useQueryParam';

const ExampleComponent = () => {
  // second parameter is optional
  const [param, setValue] = useQueryParam('foo', {
    initialValue: 'bar',
    replaceState: false,
  })

  return (
    <DisplayDemo title="useQueryParam">
      <Typography.Paragraph>
        Current value of 'foo' param is <Tag color="green">{param}</Tag><
      /Typography.Paragraph>
      <Input value={param} onChange={(e) => setValue(e.targt.value)} />
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```

<!-- Types -->