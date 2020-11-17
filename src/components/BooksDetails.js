import React, {useState, useEffect} from 'react';

export default function BooksDetails({itemDetails}){

    const [booksDetails, setBooksDetails]=useState([])

    console.log(booksDetails)

    function getBooksDetails(item){
        fetch(`${item}`)
            .then(resp => resp.json())
            .then(data => setBooksDetails(prev=>([...prev, data])))
            .catch(err => {
                console.log(err)
            });
    }

    useEffect(function (){
        if(itemDetails){
            itemDetails.books.forEach(item=>getBooksDetails(item))
        }

    },[])


    return(
        <section className='container main-section'>
           <table>
               <thead>
               <tr>
                   <th>Name</th>
                   <th>ISBN</th>
                   <th>Number of pages</th>
                   <th>Release date</th>
               </tr>
               </thead>
               <tbody>
               {booksDetails? booksDetails.map(item=><tr key={item.isbn}>
                   <td>{item.name}</td>
                   <td>{item.isbn}</td>
                   <td>{item.numberOfPages}</td>
                   <td>{new Date(item.released).toLocaleDateString("pl").split("-")}</td>
               </tr>):''}
               </tbody>
           </table>
        </section>
    )
}