import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress, Button, makeStyles } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
  buttonProgress: { color: grey[800], top: '50%', left: '50%' },
});

function AsyncButton({
  text,
  variant,
  color,
  align,
  disabled,
  loading,
  onClick,
  style,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Button
      variant={variant}
      color={color}
      style={style}
      align={align}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={24} className={classes.buttonProgress} />
      ) : (
        text
      )}
    </Button>
  );
}

AsyncButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

AsyncButton.defaultProps = {
  variant: 'contained',
  color: 'secondary',
  align: 'right',
  text: 'Button',
  disabled: false,
};

export default AsyncButton;
