export default class HttpClient {
  constructor(baseURL, APIkey) {
    this.baseURL = baseURL;
    this.APIkey = APIkey;
  }

  async fetch() {
    const res = await fetch(`${this.baseURL}?api_key=${this.APIkey}`);
    let data;

    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }

    return data;
  }
}
