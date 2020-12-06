import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

//selector - basically return some state information
//from redux store

const mapStateToProps = (state) => {
  return {
    //PROP numOfCakes:
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
     //PROP buyCake:
     buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(IceCreamContainer);
