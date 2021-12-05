import { FC } from 'react';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  className,
  type,
  id = '',
  name = '',
  placeholder = '',
}) => {
  return (
    <input
      className={`${className} px-7 py-4 bg-gray-300 text-lg leading-6 rounded-lg w-full`}
      value={value}
      type={type}
      onChange={(e) => onChange(e.target.value)}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};
