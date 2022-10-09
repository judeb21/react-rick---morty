export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export type Dispatch = React.Dispatch<IAction>;

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string, original: string };
  name: string;
  number: number;
  rating: { average: string };
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}
