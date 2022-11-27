type IUrl = `http://${string}` | `https://${string}`;

interface ILink {
  type: 'slides' | 'video' | 'episode';
  url: IUrl;
}

export default interface IAppearance {
  date: string;
  type: 'presentation' | 'podcast-episode';
  name: string;
  event: {
    name: string | null;
    url?: IUrl;
  };
  links: ILink[];
  language?: string;
}
