/** @jsxImportSource @emotion/react */

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  length?: number;
  onChange: (value: string) => void;
}

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { value, length, onChange, ...rest } = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.slice(0, length);
      onChange(newValue);
    };

    return (
      <input
        css={{
          width: '100%',
          padding: '0 18px',
          border: 'none',
          color: 'dimgrey',
          fontSize: '40px',
          '&:focus': {
            outline: 'none',
          },
        }}
        type='text'
        value={value}
        onChange={changeHandler}
        ref={ref}
        {...rest}
      />
    );
  }
);
