import React from "react";
import { connect } from 'react-redux'; 
import btnR from '../actions/cats';

const Page2 = ({ urlImg, btnRefresh }) => {
  console.log(urlImg);

  return <div>

    <button type='button' onClick={ btnRefresh }>
      REFRESH
    </button>
    <span> Breed: {urlImg.split("/")[4]}</span>
    <br/>

    <img src={ urlImg } alt='' />
    
  </div>
};

const mapStateToProps = (state) => {
  return { 
    urlImg: state.urlCat,
  };
};

const mapDispathToProps = (dispath) => {
  return {
    btnRefresh: () => dispath(btnR()),
  }
};


export default connect(mapStateToProps, mapDispathToProps)(Page2);
