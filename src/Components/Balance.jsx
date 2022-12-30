import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from './Context/GlobalState';

export const Balance = () => {
    
   const {transactions } = useContext(GlobalContext);

   const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
   
    return (
        <div className="balance">
            <h3 className="balanceheader">Your Balance</h3>
            <h1 id="balance">${total}</h1>
        </div>
    )
}
