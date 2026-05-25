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

interface IProps {
  appearance: IAppearance;
}

const LINK_ICONS = {
  slides: <IconSlides className="h-5 hover:text-brand" />,
  video: <IconYouTube className="h-6 hover:text-brand" />,
  episode: <IconListen className="h-5 hover:text-brand" />,
  code: <IconGithub className="h-5 hover:text-brand" />,
  link: <IconLink className="h-5 hover:text-brand" />,
};

const TYPE_ICONS = {
  presentation: (
    <IconPresentaion className="size-8 sm:size-12" title="Presentation" />
  ),
  'podcast-episode': (
    <IconPodcast className="size-8 sm:size-12" title="Podcast episode" />
  ),
  interview: <IconInterview className="size-8 sm:size-12" title="Interview" />,
};

export default function Appearance({ appearance }: IProps) {
  return (
    <div className="flex gap-4 items-start p-4 hover:bg-gray-50 transition-colors">
      {TYPE_ICONS[appearance.type]}
      <div className="flex gap-3 items-center flex-1">
        <div className="flex-1">
          <strong>
            {appearance.links[0] ? (
              <Link
                href={appearance.links[0].url}
                target="_blank"
                className="hover:underline"
              >
                {appearance.name}
              </Link>
            ) : (
              appearance.name
            )}
          </strong>
          <div>
            {appearance.event.name &&
              (appearance.event.url ? (
                <Link
                  href={appearance.event.url}
                  target="_blank"
                  className="hover:underline"
                >
                  {appearance.event.name}
                </Link>
              ) : (
                appearance.event.name
              ))}
            {' on '}
            <time>{formatDate(appearance.date)}</time>
          </div>
        </div>
        {appearance.links.length > 0 && (
          <div className="flex gap-4 items-center">
            {appearance.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                title={link.type}
                target="_blank"
              >
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
