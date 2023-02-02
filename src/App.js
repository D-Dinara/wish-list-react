import './App.css';
import { data } from './data'; 
import { useState } from 'react';

function App() {
  const [list, setList] = useState(data);
  const [description,setDescription] = useState(false);

  const changeDescription = (item) => {
    item.fullDescription = !item.fullDescription;
    setDescription(!description)
  }

  const removeItem = (id) => {
      let newList = list.filter(item => item.id !== id);
      setList(newList);
  }
  
  return (
    <div className='container'>
        <h1>List of {list.length} things I need</h1>
        <div className='main'>
      {list.map(item => {
        const {id,name,slider,description,fullDescription} = item;

        return(
          <div className='container item' key={id}>
             <button className='deleteBtn' onClick={() => removeItem(id)}>{"x"}</button>
            <h2>{name}</h2>
           
            {slider}
            <p>{fullDescription ? description : description.substring(0,150) + "..."}
            <button className='changeDescriptionBtn' onClick={() => changeDescription(item)}>{fullDescription ? "Show less" : "Show full description"}</button>
            </p>
           
          </div>
        )
      }
      )}
      </div>
      <button className='removeAllBtn' onClick={() => setList([])}>REMOVE ALL</button>
    </div>
  );
}

export default App;
