import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

import Pagination from "./Pagination";
import Form from "./Form";
import Table from "./Table";
import DropdownMenu from "./Dropdown";


export default function Main({characters,page, setPage,pageSize, setPageSize, setItemDetails}) {

    let history = useHistory();

    const [gender, setGender] = useState('');
    const [name, setName] = useState('');


    const goToBooksDetails=(item)=>{
        setItemDetails(item)
        history.push("/booksDetails")
    }

    function singleRow(item) {
        return (<tr  key={characters.indexOf(item)} >
                {item.name && item.aliases[0] !== "" ? <td>{item.name}, {item.aliases}</td> :
                    <td>{item.name} {item.aliases}</td>}
                {item.gender ? <td>{item.gender}</td> : <td>Unknown</td>}
                {item.culture ? <td>{item.culture}</td> : <td>Unknown</td>}
                <td className='books' onClick={()=>goToBooksDetails(item)}>
                    <ul>{item.books.map(elem => <li key={elem}>{elem.substr(-1, 1)}</li>)}</ul>
                </td>
                {item.tvSeries.includes("") ? <td>{item.tvSeries.length - 1}</td> : <td>{item.tvSeries.length}</td>}
            </tr>)
    }


    function showTable() {
        let table = characters;
        if (characters) {
            if (gender && gender!=="All") {
                 table = table.filter(item => item.gender === gender);
            }
            if (name) {
                table = table.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
            }
            return table.map((item) => singleRow(item));
        }
    }


    return (<main className='container main-section'>
            <Pagination page={page} setPage={setPage}/>
            <Form setGender={setGender} setName={setName}/>
            <Table showTable={showTable}/>
            <DropdownMenu pageSize={pageSize} setPageSize={setPageSize}/>
        </main>)

}