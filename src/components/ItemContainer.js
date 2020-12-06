import React from 'react'
import { connect } from "react-redux";
import { buyCake, buyIceCream } from '../redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
     
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.cakes)
    const itemState = ownProps.cakes ? state.cakes.numOfCakes : state.iceCream.numOfIceCream
    return {
        item: itemState
    }
}
const mapDispatchtoProps = (dispatch, ownProps) => {

    console.log(ownProps.cakes)

    const dispatchFunction = ownProps.cakes ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }

    // return {
    //     buyCake: () => dispatch(buyCake()),
    //     buyIceCream: () => dispatch(buyIceCream())

    // }
}

export default connect(mapStateToProps, mapDispatchtoProps)(ItemContainer)
