import axios from 'axios';

export default class MissionsApi {
  static baseUrl =
    'https://api.spacexdata.com/v3/missions';

  static async getMissions() {
    const res = await axios({
      method: 'get',
      url: `${this.baseUrl}`,
      responseType: 'json',
    });

    return (res.data);
  }
}
