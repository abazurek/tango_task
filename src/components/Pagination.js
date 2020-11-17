import React from 'react';

export default function Pagination({page,setPage}){

    return(
        <div className='buttons-box'>
            <button onClick={()=>setPage(1)}>First page</button>
            <button onClick={()=>{page!==1? setPage(prev=>(prev-1)):setPage(1)}}>Previous page</button>
            <button onClick={()=>{page!==214? setPage(prev=>(prev+1)):setPage(214)}}>Next page</button>
            <button onClick={()=>setPage(214)}>Last page</button>
        </div>
    )
}