import type { ReactNode, FC } from 'react';
import classNames from 'classnames';

import styles from './Headline.module.scss';

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadlineColor = 'success' | 'light-grey' | 'dark-grey' | 'dark' | 'grey';

interface Props {
  type?: HeadlineType;
  children: ReactNode;
  color?: HeadlineColor;
  testDataAttr?: string;
}

const ROOT_CLASS = 'headline';

export const Headline: FC<Props> = ({
  type = 'h1',
  children,
  color = 'dark',
  testDataAttr = '',
}) => {
  const Component = type;
  const classes = classNames(
    styles.headline,
    styles[`${ROOT_CLASS}-${type}`],
    styles[`${ROOT_CLASS}-color-${color}`]
  );

  return (
    <Component className={classes} data-test={testDataAttr}>
      {children}
    </Component>
  );
};
