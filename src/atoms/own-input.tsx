import * as React from 'react';
// Material
import { TextField } from '@material-ui/core';

interface Props {
  id: string;
  label: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  value: string;
}

export const OwnInput = ({ id, label, setter, value }: Props) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      onChange={e =>
        e.currentTarget.value && setter(e.currentTarget.value)
      }
      value={value}
    />
  );
};
