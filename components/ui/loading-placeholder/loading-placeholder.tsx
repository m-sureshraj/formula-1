import React from 'react';

import styles from './loading-placeholder.module.scss';

interface IProps {
  width: string;
  height: string;
  radius?: string;
}

export const LoadingPlaceholder: React.FC<IProps> = ({ width, height, radius = '' }) => {
  return (
    <div className={styles.placeholder} style={{ width, height, borderRadius: radius }} />
  );
};
