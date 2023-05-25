import {React, useRef, useState} from 'react';
import './App.css';




function App() {
  
 const [value, setValue] = useState('')
 const [listValue, setListValue] =useState([])
 const inputRef = useRef(null);
  

  const handleChange = (e) => {
    setValue(e.target.value);
  }
  
  const handleClick = () => {
    if (value.trim() !== '') {
      const newItem = ` ${value}`;
      setListValue((prevItems) => [...prevItems, newItem]);
      setValue('');   
  }
   if (value === "John Doe") {
    return alert("Submitted Name: John Doe")
   }
}

const removeClick = () => {
  setListValue([]);

  if(inputRef) {
    inputRef.current.value = ''
  }

  }

  return (
    
    <div className="App">
      <div>
    <h1>Test App</h1>
    </div>
    <div>
      <input type="text"
      placeholder="nom"
      ref={inputRef}
      onChange={handleChange}
      data-testid="inputText"/>
    </div>
    <div>
      <button type="submit"data-testid="inputSubmit" onClick={(handleClick)}>Cliquer</button>
      <button data-testid='remove'  onClick={(removeClick)}>Supprimer</button>
    </div>
    <div style={{display:'flex', justifyContent:'center'}}>
      <ul>
        {listValue.map((item) => (
         <li data-testid='list' key={item}>{item}</li>
        ))}
      </ul>
    </div>
    </div>
    
  );
}

export default App;
