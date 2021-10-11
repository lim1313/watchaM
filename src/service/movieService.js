export default class MovieService {
  constructor(http) {
    this.http = http;
  }

  async getMovies() {
    return this.http.fetch();
  }
}
