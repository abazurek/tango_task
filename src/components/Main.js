import React from 'react';

export default function Main({characters}){

    return(
        <main className='container main-section'>

           <table>
               <thead>
               <tr>
                   <th>Name&Aliases</th>
                   <th>Gender</th>
                   <th>Culture</th>
                   <th>Books list ID</th>
                   <th>Number tvSeries</th>
               </tr>
               </thead>
               <tbody>
               {characters? characters.map(item=>
                       <tr key={characters.indexOf(item)}>
                           {item.name && item.aliases?<td>{item.name}, {item.aliases}</td>:<td>{item.aliases}</td>}
                           {item.gender? <td>{item.gender}</td>:<td>Unknown</td>}
                           {item.culture? <td>{item.culture}</td>:<td>Unknown</td>}
                           <td><ul>{item.books.map(elem=><li key={elem}>{elem.substr(-1,1)}</li>)}</ul></td>
                           {item.tvSeries.includes("")? <td>{item.tvSeries.length-1}</td> : <td>{item.tvSeries.length}</td>}
                       </tr>)
                   :""
               }
               </tbody>
           </table>
        </main>
    )
}