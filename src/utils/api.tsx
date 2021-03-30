interface GetSneakersParams {
  limit: String;
  page?: String;
  styleId?: String;
  name?: String;
  shoe?: String;
  brand?: String;
  gender?: String;
  colorway?: String;
  releaseDay?: String;
  releaseYear?: String;
  sort?: String;
}

const axios = require('axios').default;

const Api = {
  getSneakers: async (params: GetSneakersParams): Promise<any> => {
    try {
      const response = await axios.get('http://api.thesneakerdatabase.com/v1/sneakers', {
        params
      });
      return response.data;
    } catch (err) {
      console.error('Api:getSneakers: ' + err);
    }
  },
  getSneaker: async (sneakerId: string) => {
    try {
      const response = await axios.get(`http://api.thesneakerdatabase.com/v1/sneakers/${sneakerId}`);
      return response.data;
    } catch (err) {
      console.error('Api:getSneaker: ' + err);
    }
  }
};

export default Api;
