import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from 'react-router'


import Main from "./components/Main";
import BooksDetails from "./components/BooksDetails";


function App() {

    const [characters, setCharacters]=useState('');
    const [page, setPage]=useState(1);
    const [pageSize, setPageSize]=useState(10)
    const [itemDetails, setItemDetails]=useState('');
    const [booksDetails, setBooksDetails]=useState('')

    function getApiCharacters(){
        fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`)
            .then(resp => resp.json())
            .then(data => setCharacters(data))
            .catch(err => {
                console.log(err)
            });
    }
    function getBooksDetails(item){
        fetch(`${item}`)
            .then(resp => resp.json())
            .then(data => setBooksDetails(data))
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(function ()
        {
        getApiCharacters();
        if(itemDetails){
            itemDetails.books.forEach(item=>getBooksDetails(item))
        }
        }, [page, pageSize,itemDetails]);

    console.log(characters)

  return (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Main characters={characters} page={page} setPage={setPage} pageSize={pageSize} setPageSize={setPageSize} setItemDetails={setItemDetails}/>
            </Route>
            <Route path="/booksDetails">
                <BooksDetails booksDetails={booksDetails}/>
            </Route>
        </Switch>

    </Router>
  );
}

export default App;
