import React from 'react'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function DropdownMenu({pageSize, setPageSize}) {

    const options = [
        {value: 5},
        {value: 10},
        {value: 15},
        {value: 20},
        {value: 25}
    ]

    const onChange = option => {
        if (option.value!=="" ) {
            setPageSize(option.value)
        }
    }

    return (
        <Dropdown
            options={options}
            onChange={onChange}
            resetValue={''}
            selectedOption={pageSize}
        />)
}

