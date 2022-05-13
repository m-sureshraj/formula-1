import type { FC } from 'react';
import classNames from 'classnames';

import styles from './Tag.module.scss';

export enum TagType {
  warning = 'warning',
  success = 'success',
}

interface Props {
  label: string;
  type?: TagType;
  dark?: boolean;
}

const ROOT_CLASS = 'tag';

export const Tag: FC<Props> = ({ label, type = TagType.warning, dark = false }) => {
  const classes = classNames(styles.tag, styles[`${ROOT_CLASS}-bg-${type}`], {
    [styles[`${ROOT_CLASS}-dark-bg-${type}`]]: dark,
  });

  return <span className={classes}>{label}</span>;
};
