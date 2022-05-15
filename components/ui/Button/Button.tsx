import type { FC, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

type Variant = 'text';

interface Props {
  variant?: Variant;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
  dataTestAttr?: string;
}

const ROOT_CLASS = 'button';

export const Button: FC<Props> = ({
  variant = 'text',
  disabled = false,
  children,
  onClick,
  dataTestAttr = '',
}) => {
  const classes = classNames(styles.button, styles[`${ROOT_CLASS}-${variant}`]);

  return (
    <button
      data-test={dataTestAttr}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
