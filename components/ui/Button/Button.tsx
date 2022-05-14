import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type Variant = 'text';

interface Props {
  variant?: Variant;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}

const ROOT_CLASS = 'button';

export const Button: FC<Props> = ({
  variant = 'text',
  disabled = false,
  children,
  onClick,
}) => {
  const classes = classNames(styles.button, styles[`${ROOT_CLASS}-${variant}`]);

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
