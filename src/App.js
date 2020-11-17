import React,{useState,useEffect} from 'react';
import Main from "./components/Main";



function App() {

    const [characters, setCharacters]=useState('');
    const [page, setPage]=useState(1);
    const [pageSize, setPageSize]=useState(10)


    function getApiCharacters(){
        fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
            .then(resp => resp.json())
            .then(data => setCharacters(data))
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(function ()
        {
        getApiCharacters();
        }, [page, pageSize]);


  return (
    <div className="App">
      <Main characters={characters} page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize}/>
    </div>
  );
}

export default App;
