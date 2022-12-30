import React, { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const Transaction = ({transactions}) => {

    const {Delete} = useContext(GlobalContext);
   
    const sign =transactions.amount > 0 ? '+':'-'; 
   
    return (
        <li class={transactions.amount > 0 ? 'plus' : 'minus'}>
        {transactions.text} <span>{sign}${Math.abs(transactions.amount)}</span><button onClick={() => Delete(transactions.id)} class="delete-btn">x</button>
       </li>
    )
}
