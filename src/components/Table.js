import React from 'react';

export default function Table({showTable}){
    return(
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
    )
}