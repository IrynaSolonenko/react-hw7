import './App.css';
import {useState} from "react";

function App() {

    const [list, setList] = useState(
        {id:1, title: 'react hooks', completed:false}
    )

    // fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(response => response.json())
        // .then(list => setList(list))

  return (
   <div>
       <h1>React hooks</h1>
        <div>
            <ul>
                {list.map(listItem => <li key={listItem.id}>{listItem.title}</li>)}
            </ul>
        </div>
   </div>
  );
}

export default App;
