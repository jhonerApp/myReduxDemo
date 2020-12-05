const { act } = require("react-dom/test-utils");
const redux = require("redux");
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const applyMiddleWare = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

const initialCake = {
  numCake: 10,
};

const initialIceCreamCake = {
  numIceCreamCake: 20,
};

function buyCake() {
  return {
    type: "BUY_CAKE",
  };
}

function buyIceCreamCake() {
  return {
    type: "BUY_ICE_CREAM",
  };
}

function reducerCake(state = initialCake, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numCake: state.numCake - 1,
      };
    default:
      return state;
  }
}

const reducerIceCreamCake =(state = initialIceCreamCake, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numIceCreamCake: state.numIceCreamCake - 1,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducer({
  cake: reducerCake,
  iceCream: reducerIceCreamCake,
});
const store = createStore(rootReducer,applyMiddleWare(logger));
const unSubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCreamCake());
store.dispatch(buyIceCreamCake());

unSubscribe();
