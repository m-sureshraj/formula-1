import type { FC } from 'react';

import { LoadingPlaceholder } from '../ui/loading-placeholder';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div data-test="loader">
      <div className={styles.title}>
        <LoadingPlaceholder width="230px" height="16px" />
        <LoadingPlaceholder width="130px" height="16px" />
      </div>

      <div className={styles.rowWrapper}>
        <div className={styles.row}>
          <LoadingPlaceholder width="70px" height="70px" radius="6px" />

          <div className={styles.details}>
            <div className={styles.header}>
              <LoadingPlaceholder width="140px" height="16px" />
              <LoadingPlaceholder width="50px" height="16px" />
              <div className={styles.date}>
                <LoadingPlaceholder width="120px" height="16px" />
              </div>
            </div>

            <div className={styles.winner}>
              <LoadingPlaceholder width="250px" height="16px" />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <LoadingPlaceholder width="70px" height="70px" radius="6px" />

          <div className={styles.details}>
            <div className={styles.header}>
              <LoadingPlaceholder width="140px" height="16px" />
              <LoadingPlaceholder width="50px" height="16px" />
              <div className={styles.date}>
                <LoadingPlaceholder width="120px" height="16px" />
              </div>
            </div>

            <div className={styles.winner}>
              <LoadingPlaceholder width="250px" height="16px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
