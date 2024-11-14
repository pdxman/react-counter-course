import { useState } from 'react'; 

function App() {
  const [num, setNum] = useState(0);

  function increaseNum(){
    setNum(num + 1); 
  }

return (
    <div className="App">
     <h2>Counter</h2>
     <p>{num}</p>
     <button onClick={increaseNum}>+</button>
    </div>
  );
}

export default App;