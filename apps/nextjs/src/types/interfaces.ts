export interface HeroProps {
  key: string;
  title: string;
  content: string;
  cta?: string;
  url?: string;
}

export interface ServiceProps {
  key: string;
  title: string;
  content: string;
}

export interface WebTrendItem {
  image: string;
  title: string;
  content: string;
}

export interface WebTrendProps {
  trends: WebTrendItem[];
}
