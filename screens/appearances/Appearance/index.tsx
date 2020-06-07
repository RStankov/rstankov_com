import * as React from 'react';
import IAppearance from '~/types/Appearance';
import IconGithub from '~/icons/Github';
import IconListen from '~/icons/Listen';
import IconPodcast from '~/icons/Podcast';
import IconPresentaion from '~/icons/Presentation';
import IconSlides from '~/icons/Slides';
import IconYouTube from '~/icons/YouTube';
import IconLink from '~/icons/Link';
import IconInterview from '~/icons/Interview';
import styles from './styles.module.css';
import { parse, format } from 'date-fns';
import LinkExternal from '~/components/LinkExternal';

interface IProps {
  appearance: IAppearance;
}

const LINK_ICONS = {
  slides: <IconSlides className={styles.linkIcon} />,
  video: <IconYouTube className={styles.linkIcon} />,
  episode: <IconListen className={styles.linkIcon} />,
  code: <IconGithub className={styles.linkIcon} />,
  link: <IconLink className={styles.linkIcon} />,
};

const TYPE_ICONS = {
  presentation: (
    <IconPresentaion className={styles.typeIcon} title="Presentation" />
  ),
  'podcast-episode': (
    <IconPodcast className={styles.typeIcon} title="Podcast episode" />
  ),
  interview: <IconInterview className={styles.typeIcon} title="Interview" />,
};

export default function Appearance({ appearance }: IProps) {
  return (
    <div className={styles.item}>
      {TYPE_ICONS[appearance.type]}
      <div className={styles.content}>
        <AppearanceName appearance={appearance} />
        <div>
          <LinkExternal href={appearance.event.url} className={styles.event}>
            {appearance.event.name}
          </LinkExternal>
          <span className={styles.on}>{' on '}</span>
          <time className={styles.time}>
            {format(parse(appearance.date, 'yyyy/MM/dd', new Date()), 'd MMMM')}
          </time>
        </div>
      </div>
      {appearance.links.length > 0 && (
        <div className={styles.links}>
          {appearance.links.map((link, index) => (
            <LinkExternal
              key={index}
              href={link.url}
              className={styles.link}
              title={link.type}>
              {LINK_ICONS[link.type] || null}
            </LinkExternal>
          ))}
        </div>
      )}
    </div>
  );
}

function AppearanceName({ appearance }: IProps) {
  const link = appearance.links[0];

  if (link) {
    return (
      <strong>
        <LinkExternal href={link.url} className={styles.nameLink}>
          {appearance.name}
        </LinkExternal>
      </strong>
    );
  } else {
    return <strong>{appearance.name}</strong>;
  }
}
