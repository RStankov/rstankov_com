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
import Link from '~/components/Link';
import Stack from '~/components/Stack';

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
    <Stack.Row gap="s" align="start">
      {TYPE_ICONS[appearance.type]}
      <Stack.ResponsiveRow gap="s" align="start" expand={true}>
        <Stack.Expand>
          <AppearanceName appearance={appearance} />
          <div>
            {appearance.event.name &&
              (appearance.event.url ? (
                <Link href={appearance.event.url}>{appearance.event.name}</Link>
              ) : (
                appearance.event.name
              ))}
            <span className={styles.on}>{' on '}</span>
            <time className={styles.time}>{formatDate(appearance.date)}</time>
          </div>
        </Stack.Expand>
        {appearance.links.length > 0 && (
          <Stack.Row gap="s">
            {appearance.links.map((link, index) => (
              <Link key={index} href={link.url} title={link.type}>
                {LINK_ICONS[link.type] || null}
              </Link>
            ))}
          </Stack.Row>
        )}
      </Stack.ResponsiveRow>
    </Stack.Row>
  );
}

function formatDate(date: string) {
  return format(parse(date, 'yyyy/MM/dd', new Date()), 'd MMMM');
}

function AppearanceName({ appearance }: IProps) {
  const link = appearance.links[0];

  return (
    <strong>
      {link ? (
        <Link href={link.url} className={styles.link}>
          {appearance.name}
        </Link>
      ) : (
        appearance.name
      )}
    </strong>
  );
}
