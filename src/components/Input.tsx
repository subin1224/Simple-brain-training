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
  variant?: 'standard' | 'filled' | 'outlined';
  onChange: (value: string) => void;
}

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const { value, length, variant = 'standard', onChange, ...rest } = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.slice(0, length);
      onChange(newValue);
    };

    return (
      <input
        css={{
          width: '100%',
          padding: '0 18px',
          color: 'dimgrey',
          fontSize: '40px',
          '&:focus': {
            outline: 'none',
          },
          ...TYPE_VARIANTS[variant],
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

const TYPE_VARIANTS = {
  standard: {
    border: 'none',
    outline: 'none',
  },
  filled: {
    backgroundColor: '#e9e9e9',
    border: 'none',
    borderRadius: '8px',
    transition: 'background .2s ease, color .1s ease, box-shadow .2s ease',
    boxShadow: 'none',
  },
  outlined: {
    padding: '10px',
    outline: 'none',
    border: 'none',
    borderRadius: '8px',
    transition: `background .2s ease,color .1s ease, box-shadow .2s ease`,
    boxShadow: `inset 0 0 0 4px #e9e9e9`,
  },
};
