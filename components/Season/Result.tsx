import type { FC } from 'react';
import classNames from 'classnames';

import type { SeasonChampion, SeasonResult } from '../../libs/types';
import styles from './Result.module.scss';
import { Headline } from '../ui/Headline';
import { Tag, TagType } from '../ui/Tag';
import { formatDate } from '../../libs/util';

interface Props {
  seasonResults: SeasonResult[];
  seasonChampion?: SeasonChampion;
}

export const Result: FC<Props> = ({ seasonResults, seasonChampion }) => {
  const championDriverCode = seasonChampion?.driver.code;

  return (
    <section className={styles.results}>
      {seasonResults.map(result => (
        <div
          key={result.round}
          className={classNames(styles.row, {
            [styles.champion]: championDriverCode === result.winner.driverCode,
          })}
        >
          <div className={styles.round}>
            <label>ROUND</label>
            <span>{result.round.padStart(2, '0')}</span>
          </div>

          <div className={styles.details}>
            <header className={styles.header}>
              <Headline type="h6">{result.raceName}</Headline>
              <Tag label={`${result.winner.laps} LAPS`} />
              <span className={styles.date}>{formatDate(result.date)}</span>
            </header>

            <main className={styles.raceWinner}>
              <span className={styles.winnerName}>
                🏆 &nbsp;{result.winner.givenName} {result.winner.familyName}
              </span>

              <span>⏰ &nbsp;{result.winner.duration}</span>

              {championDriverCode === result.winner.driverCode && (
                <span className={styles.championLabel}>
                  <Tag label="Season Champion" type={TagType.success} dark />
                </span>
              )}
            </main>
          </div>
        </div>
      ))}
    </section>
  );
};
