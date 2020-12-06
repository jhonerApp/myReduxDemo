import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

//selector - basically return some state information
//from redux store

const mapStateToProps = (state) => {
  return {
    //PROP numOfCakes:
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
     //PROP buyCake:
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(CakeContainer);
