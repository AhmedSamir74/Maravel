import BaseController from "./base";

class CharacterController {
  base: BaseController;

  constructor() {
    this.base = new BaseController();
  }

  async getCharacters(offset: number = 0, name?: string) {
    let url = `characters?limit=10&offset=${offset}`;
    if (name) {
      url += `&nameStartsWith=${name}`;
    }
    let response = await this.base._getRequest(url);

    if (response.data.results) {
      return {
        status: true,
        data: response.data.results,
        newOffset: response.data.offset,
        total: response.data.total,
      };
    } else {
      return { status: false, data: this.base.handleErrors(response) };
    }
  }

  async getCharacterDetails(id: number) {
    let url = `characters/${id}`;
    let response = await this.base._getRequest(url);

    if (response.data.results) {
      return {
        status: true,
        data: response.data.results,
      };
    } else {
      return { status: false, data: this.base.handleErrors(response) };
    }
  }

  async getComicDetails(
    endPoint: "comics" | "series" | "stories" | "events",
    id: string | undefined
  ) {
    let url = `${endPoint}/${id}`;
    let response = await this.base._getRequest(url);
    if (response.data.results) {
      return {
        status: true,
        data: response.data.results[0],
      };
    } else {
      return { status: false, data: this.base.handleErrors(response) };
    }
  }
}

export default CharacterController;
