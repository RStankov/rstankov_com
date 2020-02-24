import * as React from 'react';
import IAppearance from '~/types/Appearance';
import IconGithub from '~/icons/Github';
import IconListen from '~/icons/Listen';
import IconPodcast from '~/icons/Podcast';
import IconPresentaion from '~/icons/Presentation';
import IconSlides from '~/icons/Slides';
import IconYouTube from '~/icons/YouTube';
import styles from './styles.module.css';
import { parse, format } from 'date-fns';

interface IProps {
  appearance: IAppearance;
}

const LINK_ICONS = {
  slides: <IconSlides className={styles.linkIcon} />,
  video: <IconYouTube className={styles.linkIcon} />,
  episode: <IconListen className={styles.linkIcon} />,
  code: <IconGithub className={styles.linkIcon} />,
};

const TYPE_ICONS = {
  presentation: (
    <IconPresentaion className={styles.typeIcon} title="Presentation" />
  ),
  'podcast-episode': (
    <IconPodcast className={styles.typeIcon} title="Podcast episode" />
  ),
};

export default function Appearance({ appearance }: IProps) {
  return (
    <div className={styles.item}>
      {TYPE_ICONS[appearance.type]}
      <div className={styles.content}>
        <strong>{appearance.name}</strong>
        <div>
          <a
            href={appearance.event.url}
            target="_blank"
            className={styles.event}>
            {appearance.event.name}
          </a>
          {' on '}
          <time>
            {format(parse(appearance.date, 'yyyy/MM/dd', new Date()), 'd MMMM')}
          </time>
        </div>
      </div>
      {appearance.links.length > 0 && (
        <div className={styles.links}>
          {appearance.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={styles.link}
              title={link.type}>
              {LINK_ICONS[link.type] || null}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
