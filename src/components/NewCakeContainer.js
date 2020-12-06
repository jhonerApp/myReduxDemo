import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
        </div>
    );
}

//selector - basically return some state information
//from redux store

const mapStateToProps = (state) => {
    return {
        //PROP numOfCakes:
        numOfCakes: state.cakes.numOfCakes,
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        //PROP buyCake:
        buyCake: number => dispatch(buyCake(number)),
    };
};
export default connect(mapStateToProps, mapDispatchtoProps)(NewCakeContainer);
