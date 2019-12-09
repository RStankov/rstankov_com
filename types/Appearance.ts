interface ILink {
  type: 'slides' | 'video' | 'episode';
  url: string;
}

type IType = 'presentation' | 'podcast-episode';

export default interface IAppearance {
  date: string;
  type: IType;
  name: string;
  event: {
    name: string;
    url: string;
  };
  links: ILink[];
  language?: string;
}
