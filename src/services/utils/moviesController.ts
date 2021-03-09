import { _storeData, _retrieveData } from '../utils/helpers';
import BaseController from './base';

class MoviesController {
    base: BaseController;

    constructor() {
        this.base = new BaseController();
    }

    async getMovies(page: number = 1) {
        // console.log('===> ', page);

        let response = await this.base._getRequest(`discover/movie?page=${page}`);

        if (response.results) {
            // console.log(response.page);
            return {
                status: true,
                data: response.results,
                page: response.page,
                pages: response.total_pages,
            };
        } else {
            return { status: false, data: this.base.handleErrors(response) };
        }
    }
}

export default MoviesController;
