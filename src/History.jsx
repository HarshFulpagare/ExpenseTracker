import {React,useContext} from 'react';
import { GlobalContext } from './Components/Context/GlobalState';
import { Transaction } from './Components/Transaction';

export const History = () => {

    const {transactions} = useContext(GlobalContext);


    return (
        <div className="history">
            <h3 style={{color:"white"}}>History</h3>
      <ul id="list" class="list">
        {transactions.map(transactions =>(<Transaction key={transactions.id} transactions={transactions} /> ))}
         
      </ul>
        </div>
    )
} 
