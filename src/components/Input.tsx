/** @jsxImportSource @emotion/react */

import {
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  ChangeEvent,
} from 'react';

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string | number;
  length?: number;
  variant?: 'standard' | 'filled' | 'outlined';
  type?: 'text' | 'number' | 'password';
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Input = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      value,
      length,
      variant = 'standard',
      type = 'text',
      readonly = false,
      onChange = () => {},
      ...rest
    } = props;

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.slice(0, length);
      onChange(newValue);
    };

    return (
      <input
        css={{
          width: '100%',
          padding: '0',
          color: 'dimgrey',
          fontSize: '40px',
          '&:focus': {
            outline: 'none',
          },
          ...TYPE_VARIANTS[variant],
        }}
        type={type}
        value={value}
        onChange={changeHandler}
        readOnly={readonly}
        ref={ref}
        {...rest}
      />
    );
  }
);

const TYPE_VARIANTS = {
  standard: {
    border: 'none',
    borderBottom: '1px solid #888',
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
