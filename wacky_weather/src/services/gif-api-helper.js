import axios from 'axios';

const gifKey = `w80J0uOZJ4fgEDPcZL6q3TWVgUxITiDb`;


export const getGifs = async (description) => {
  console.log(description)
  const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${description}&limit=25&offset=0&rating=G&lang=en`);
  return response.data.data;
}