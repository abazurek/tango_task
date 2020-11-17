import React from 'react';

export default function Form({setGender, setName}){

    return(
        <form>
            <label>
                <input type='text' placeholder='Name' onChange={({target})=>setName(target.value)}/>
            </label>
            <select onChange={({target})=>setGender(target.value)}>
                <option hidden>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
                <option>All</option>
            </select>
        </form>
    )

}