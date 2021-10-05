import React from 'react';

import { Select, SelectProps } from '@chakra-ui/react';

export type Option = {
  value: string;
  label: string;
};

interface Props extends SelectProps {
  options: Option[];
}

export const SelectInput = ({ options, ...props }: Props) => {
  return (
    <Select
      placeholder="Select option"
      width="240px"
      height="56px"
      borderWidth="1px"
      borderColor="rgba(0, 0, 0, 0.5)"
      color="rgba(0, 0, 0, 0.5)"
      borderRadius="8px"
      margin="8px"
      {...props}
    >
      {options.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </Select>
  );
};
