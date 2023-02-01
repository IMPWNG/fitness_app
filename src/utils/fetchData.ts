import axios from 'axios';

export const exercicesOptions = {
  method: "GET",
  url: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
  },
};

export const fetchData = async (options: any) => { 
    const res = await axios.request(options);
    return res.data;
}




