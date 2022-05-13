import type { ReactNode, FC } from 'react';

import { Header } from '../Header';
import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className={styles.container}>{children}</div>
    </main>
  );
};
