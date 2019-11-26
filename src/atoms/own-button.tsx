import * as React from 'react';
// Material
import { Button, CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

interface Props {
  clicker: () => void;
  textContent: string;
  loading: boolean;
}

export const OwnButton = ({
  clicker,
  textContent,
  loading,
}: Props) => {
  return (
    <div className="own-button">
      <Button
        className="own-button__btn"
        onClick={clicker}
        variant="contained"
        color="default"
        disabled={loading}
        startIcon={
          <Icon color="primary" fontSize="large">
            add_circle
          </Icon>
        }
      >
        {textContent}
      </Button>
      {loading && (
        <CircularProgress size={24} className="own-button__loader" />
      )}
    </div>
  );
};
