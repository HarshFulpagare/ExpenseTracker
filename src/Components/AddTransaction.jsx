import { useContext, useState } from "react"
import React from 'react'
import { GlobalContext } from "./Context/GlobalState";

export const AddTransaction = () => {

   const [text,setText] = useState('');
   const [amount,setAmount]=useState('');

   const { Add } = useContext(GlobalContext);

   const onSubmit = (c) =>{

         c.preventDefault();

         const New = {

            id:Math.floor(Math.random()*10000),
            text,
            amount:+amount

         }

         Add(New);

   }

    return (
        <div>
            <h3 style={{color:"white"}}>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(c) => setText(c.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" id="amount" value={amount} onChange={(a)=> setAmount(a.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
