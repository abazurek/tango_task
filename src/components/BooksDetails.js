import React from 'react';

export default function BooksDetails({booksDetails}){
    console.log(booksDetails)
    return(
        <section className='container books-details-box'>
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
               {/*{itemDetails.books? itemDetails.books.map(item=><tr>*/}

               {/*</tr>):''}*/}
               </tbody>
           </table>
        </section>
    )
}