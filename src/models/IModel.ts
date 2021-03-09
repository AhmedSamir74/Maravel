export interface IAction {
    type: string;
    payload: any;
}

export interface IState {
    movies: [];
    refreshing: boolean;
    requestLoading: boolean;
    currentPage: number;
    pages: number;

    myMovies: [];
    myMovies_refreshing: boolean;
}

export interface IMovie {
    poster_path: string | null;
    original_title: string;
    overview: string;
    release_date: string | number | Date;
}

export interface IMyMovie {
    img: string | null;
    title: string;
    overview: string;
    date: string | number | Date;
}
