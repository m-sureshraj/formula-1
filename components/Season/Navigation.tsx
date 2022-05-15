import { FC } from 'react';
import { useRouter } from 'next/router';

import { FROM_YEAR, TO_YEAR } from '../../libs/util';
import { Button } from '../ui/Button';
import styles from './Navigation.module.scss';

interface Props {
  year: number;
}

export const Navigation: FC<Props> = ({ year }) => {
  const { push } = useRouter();

  const goForward = () => {
    push(`/season/${year + 1}`);
  };

  const goBack = () => {
    push(`/season/${year - 1}`);
  };

  return (
    <div data-test="navigation" className={styles.buttonWrapper}>
      <Button
        dataTestAttr="prev-season"
        disabled={year === FROM_YEAR + 1}
        onClick={goBack}
      >
        ← &nbsp;Previous Season
      </Button>

      <span className={styles.separator} />

      <Button dataTestAttr="next-season" disabled={year === TO_YEAR} onClick={goForward}>
        Next Season&nbsp; →
      </Button>
    </div>
  );
};
