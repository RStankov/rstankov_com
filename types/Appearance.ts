interface ILink {
  type: 'slides' | 'video' | 'episode';
  url: string;
}

export default interface IAppearance {
  date: string;
  type: 'presentation' | 'podcast-episode';
  name: string;
  event: {
    name: string | null;
    url?: string;
  };
  links: ILink[];
  language?: string;
}
