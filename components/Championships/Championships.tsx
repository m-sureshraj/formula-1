import { ChangeEvent, FC, useMemo } from 'react';
import Link from 'next/link';

import { Headline } from '../ui/Headline';
import styles from './Championships.module.scss';
import { SortOrder, useSorting } from '../../context/sorting.context';

interface Props {
  seasons: number[];
}

export const Championships: FC<Props> = ({ seasons }) => {
  const { sortOrder, dispatch } = useSorting();
  const years = useMemo(
    () => (sortOrder === SortOrder.old ? [...seasons].reverse() : seasons),
    [sortOrder, seasons]
  );

  const handleSorting = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: event.target.value as SortOrder });
  };

  return (
    <div className={styles.container}>
      <div className={styles.headline}>
        <Headline testDataAttr="title">F1 World Champions Result</Headline>

        <select
          onChange={handleSorting}
          defaultValue={sortOrder}
          data-test="sort-dropdown"
        >
          <option value={SortOrder.latest}>Latest</option>
          <option value={SortOrder.old}>Old</option>
        </select>
      </div>

      <ul id="championship-list" className={styles.cardContainer}>
        {years.map(year => (
          <li key={year}>
            <Link href={`/season/${year}`}>
              <a className={styles.card}>
                <span className={styles.label}>YEAR</span>
                <Headline color="dark-grey">{year}</Headline>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
