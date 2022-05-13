import Link from 'next/link';
import type { FC } from 'react';

import { Headline } from '../ui/Headline';
import styles from './Championships.module.scss';

interface Props {
  seasons: number[];
}

export const Championships: FC<Props> = ({ seasons }) => {
  return (
    <div className={styles.container}>
      <Headline>F1 World Champions Result</Headline>

      <ul className={styles.cardContainer}>
        {seasons.map(season => (
          <li key={season}>
            <Link href={`/season/${season}`}>
              <a className={styles.card}>
                <span className={styles.label}>YEAR</span>
                <Headline color="dark-grey">{season}</Headline>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
