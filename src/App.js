import React,{useState,useEffect} from 'react';
import Main from "./components/Main";



function App() {

    const [characters, setCharacters]=useState('');

    function getApiCharacters(){
        fetch('https://anapioficeandfire.com/api/characters')
            .then(resp => resp.json())
            .then(data => setCharacters(data))
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(function (){
        getApiCharacters();
        },
        []);

  return (
    <div className="App">
      <Main characters={characters}/>
    </div>
  );
}

export default App;
