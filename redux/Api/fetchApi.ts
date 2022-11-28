import axios from 'axios';

const  url='https://jsonplaceholder.typicode.com/users';
const  air='https://api.instantwebtools.net/v1/airlines';


export const getAirlines = async () => {
  try {
    const users = await axios.get(air);
    return users.data;
  } catch (err) {
    return console.error(err);
  }
};

export const getAirlinesSpecific = async (id:any) => {
  console.log(id +"payload");
  try {
    const users = await axios.get(url+`/?name=${id}`);
    return users.data;
  } catch (err) {
    return console.error(err);
  }
};

