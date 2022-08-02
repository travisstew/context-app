import React, {useState, useReducer} from 'react';

const reducer =(state, action)=>{
      switch (action.type) {
        case 'increment':
            return{
              ...state, count: state.count + 1
            }
      
        case 'decrement':
          return{
            ...state, count: state.count - 1
          }

          default: 
            return state;
      }
}

const initalState ={
  count:0,
}

function App() {
  const [input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducer, initalState)




  return (
    <>
        <div className="App">
          <h1>Reducer </h1>
        </div>

        <div>
            <label>Start Count:</label>
            <input type="number" onChange={(e)=> setInput(parseInt(e.target.value))} value={input} />
            <button>Initialize count</button>
        </div>  

        <p>{state.count}</p>
        <button onClick={()=> dispatch({type:"increment"})}>Incr</button>
        <button onClick={()=> dispatch({type:"decrement"})}>decrement</button>
    </>



  );
}

export default App;
