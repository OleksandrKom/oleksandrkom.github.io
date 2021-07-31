import React from "react";
import { connect } from 'react-redux'; 
import { bindActionCreators } from "redux";
import * as actions from '../actions/count';

const Page = ({ count1, count2, c1plus2, c1minus5, c2plus1, c2minus1 }) => {

  return <div>
    <h1> { count1 } </h1>
    <hr />
    <button onClick={ c1plus2 } className='plus2' type='button'> +2 </button>
    <button onClick={ c1minus5 } className='minus5' type='button'> -5 </button>
    <hr />

    <h1> { count2 } </h1>
    <hr />
    <button onClick={ c2plus1 } className='plus1' type='button'> +1 </button>
    <button onClick={ c2minus1 } className='minus1' type='button'> -1 </button>
    <hr />

  </div>
};

const mapStateToProps = (state) => {
  return { 
    count1: state.count1, 
    count2: state.count2
  };
};

const mapDispathToProps = (dispath) => {

  // const { c1plus1, c1minus1, c2plus1, c2minus1 }
  return bindActionCreators(actions, dispath);   
  // dispath(action) -> bindActionCreators(actions, dispath)

  // return {
  //   plus1,
  //   minus1,
  //   plus5,
  //   plusP,
  //   reset,
  // };
};

export default connect(mapStateToProps, mapDispathToProps)(Page);
// export default connect(mapStateToProps, actions)(Page);
