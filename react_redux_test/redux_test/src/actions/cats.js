import axios from 'axios';

const CAT_REFRESH = 'CAT_REFRESH';

const btnR = () => (dispath) => {
  console.log('action!');
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(r => {
      dispath({
        type: CAT_REFRESH,
        newUrl: r.data.message,
      }); 
      console.log(r)
    });
};

export default btnR;

