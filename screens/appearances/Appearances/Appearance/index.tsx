import * as React from 'react';
import IAppearance from '~/types/Appearance';
import IconGithub from './IconGithub';
import IconListen from './IconListen';
import IconPodcast from './IconPodcast';
import IconPresentaion from './IconPresentaion';
import IconSlides from './IconSlides';
import IconYouTube from './IconYouTube';
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

export default function Appearance({ appearance }: IProps) {
  return (
    <div className={styles.item}>
      {appearance.type === 'presentation' ? (
        <IconPresentaion className={styles.icon} title="presentation" />
      ) : (
        <IconPodcast className={styles.icon} title="podcast episod" />
      )}
      <div className={styles.content}>
        <strong>{appearance.name}</strong>
        <div>
          <a href={appearance.event.url} target="_blank">
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
            <a key={index} href={link.url} className={styles.link}>
              {LINK_ICONS[link.type] || null}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
