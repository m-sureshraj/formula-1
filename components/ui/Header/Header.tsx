import Link from 'next/link';
import Image from 'next/image';

import { Github } from '../Icons';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a data-test="logo">
            <Image src="/f1-logo.svg" alt="F1 Logo" width={120} height={30} />
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/m-sureshraj/formula-1"
                target="_blank"
                rel="noopener noreferrer"
                data-test="application-source"
              >
                <Github />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
