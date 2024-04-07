import * as React from 'react';
import IconGithub from '~/icons/Github';
import IconListen from '~/icons/Listen';
import IconPodcast from '~/icons/Podcast';
import IconPresentaion from '~/icons/Presentation';
import IconSlides from '~/icons/Slides';
import IconYouTube from '~/icons/YouTube';
import IconLink from '~/icons/Link';
import IconInterview from '~/icons/Interview';
import { IAppearance } from '../types';
import { parse, format } from 'date-fns';
import Link from '~/components/Link';
import tw from '~/types/tailwind';

interface IProps {
  appearance: IAppearance;
}

const LINK_ICONS = {
  slides: <IconSlides className={tw('h-5 hover:text-brand')} />,
  video: <IconYouTube className={tw('h-5 hover:text-brand')} />,
  episode: <IconListen className={tw('h-5 hover:text-brand')} />,
  code: <IconGithub className={tw('h-5 hover:text-brand')} />,
  link: <IconLink className={tw('h-4 hover:text-brand')} />,
};

const TYPE_ICONS = {
  presentation: (
    <IconPresentaion className={tw('h-12 w-12')} title="Presentation" />
  ),
  'podcast-episode': (
    <IconPodcast className={tw('h-12 w-12')} title="Podcast episode" />
  ),
  interview: <IconInterview className={tw('h-12 w-12')} title="Interview" />,
};

export default function Appearance({ appearance }: IProps) {
  return (
    <div className={tw('flex gap-4 items-start')}>
      {TYPE_ICONS[appearance.type]}
      <div className={tw('flex flex-col sm:flex-row gap-4 items-start flex-1')}>
        <div className={tw('flex-1')}>
          <strong>
            {appearance.links[0] ? (
              <Link href={appearance.links[0].url}>{appearance.name}</Link>
            ) : (
              appearance.name
            )}
          </strong>
          <div>
            {appearance.event.name &&
              (appearance.event.url ? (
                <Link href={appearance.event.url}>{appearance.event.name}</Link>
              ) : (
                appearance.event.name
              ))}
            {' on '}
            <time>{formatDate(appearance.date)}</time>
          </div>
        </div>
        {appearance.links.length > 0 && (
          <div className={tw('flex gap-2 items-center')}>
            {appearance.links.map((link, index) => (
              <Link key={index} href={link.url} title={link.type}>
                {LINK_ICONS[link.type] || null}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function formatDate(date: string) {
  return format(parse(date, 'yyyy/MM/dd', new Date()), 'd MMMM');
}
