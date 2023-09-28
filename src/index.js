// Note: createStore and candyReducer must be exported for the tests to run

export function createStore(reducer) {
  let state

  function getState() {
    return state
  }

  function dispatch(action){
    state = reducer(action, state)
    render()
  }

  return { getState, dispatch }

}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

// Use your createStore function and the functions provided here to create a store.

const store = createStore(candyReducer)

// Once the store is created, call an initial dispatch.

store.dispatch({ type: "" })
