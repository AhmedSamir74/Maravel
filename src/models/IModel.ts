export interface IAction {
  type: string;
  payload: any;
}

export interface IState {
  characters: [];
  refreshing: boolean;
  requestLoading: boolean;
  limit: number;
  offset: number;
}

export interface ICharacter {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: [];
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  comics?: IComicList;
  stories?: IStoryList;
  events?: IEventList;
  series?: ISeriesList;
}

export interface IComicList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: IComicSummary[];
}

export interface IComicSummary {
  name?: string;
  resourceURI?: string;
}

export interface IEventList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: IEventSummary[];
}

export interface IEventSummary {
  name?: string;
  resourceURI?: string;
}

export interface ISeriesList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: ISeriesSummary[];
}

export interface ISeriesSummary {
  name?: string;
  resourceURI?: string;
}

export interface IStoryList {
  available?: number;
  returned?: number;
  collectionURI?: string;
  items: IComicSummary[];
}

export interface IStroySummary {
  name?: string;
  resourceURI?: string;
  type?: "interior" | "cover";
}
