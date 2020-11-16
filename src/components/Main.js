import React,{useState} from 'react';

export default function Main({characters}){

    const [gender,setGender]=useState('');
    const [name, setName]=useState('');

    function singleRow (item){
        return(
            <tr key={characters.indexOf(item)}>
                {item.name && item.aliases?<td>{item.name}, {item.aliases}</td>:<td>{item.aliases}</td>}
                {item.gender? <td>{item.gender}</td>:<td>Unknown</td>}
                {item.culture? <td>{item.culture}</td>:<td>Unknown</td>}
                <td><ul>{item.books.map(elem=><li key={elem}>{elem.substr(-1,1)}</li>)}</ul></td>
                {item.tvSeries.includes("")? <td>{item.tvSeries.length-1}</td> : <td>{item.tvSeries.length}</td>}
            </tr>)

    }



    function showTable(){
        let table=characters;
        if(characters){
            if(gender){
                table= table.filter(item => item.gender===gender);
            }
            if(name){
                 table=table.filter(item => item.name.includes(name));
            }
            return  table.map((item)=> singleRow(item));
        }
    }

    return(
        <main className='container main-section'>
            <form>
                <label>
                    <input type='text' placeholder='Name' onChange={({target})=>setName(target.value)}/>
                </label>
                <select onChange={({target})=>setGender(target.value)}>
                    <option hidden>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unknown</option>
                </select>
            </form>
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
               {showTable()}
               </tbody>
           </table>
        </main>
    )
}