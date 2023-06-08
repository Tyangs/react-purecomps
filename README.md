# React Purecomps

**React Purecomps** is the most pure React component library that is fully open source and can meet all your imagination. You can use it to build any web application.

## Advantages
* 0 dependencies
* TypeScript support
* Extremely small package size
* Maximum freedom and style extensibility
* No Provider, no Provider hell

## Installation

Use the package manager `npm` or `yarn` to install `react-purecomps`.

```bash
npm install react-purecomps
# or
yarn add react-purecomps
```

## Usage

The usage of React Purecomps is very simple. I believe you can know how to use all components according to the following example.

```typescript
import React, {useRef, useState} from 'react';
import {Button, Div, H1, Input} from 'react-purecomps';

const Usage = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Div>
      <H1>Value: {value}</H1>
      <Input ref={inputRef} />
      <Button
        onClick={() => setValue(inputRef.current?.value || 'No value')}
      >
        Update value
      </Button>
    </Div>
  );
};
```

If you need to modify the component styles, you can directly add style props to the component, or add className to use css to write the style part.

## License

[MIT](https://github.com/Tyangs/react-purecomps/blob/main/LICENSE)
