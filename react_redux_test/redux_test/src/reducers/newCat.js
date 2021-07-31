const initionalState = 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_778.jpg';

const reducer = (state = initionalState, action) => {
  
  switch (action.type) {
    case 'CAT_REFRESH':
      console.log('reducer11 >>>',action)
    return action.newUrl;
  default:
    return state;
  }
};

export default reducer;
