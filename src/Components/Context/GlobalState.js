
import { createContext , useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {

  transactions : []

}

export const GlobalContext = createContext(initialState); 

export const GlobalProvider = ({ children }) => {

  const [state , dispatch] = useReducer(AppReducer , initialState);

  function Delete(id) {

      dispatch({
         type:'DELETE_TRANSACTION_ON_USER_CALL',
         payload: id
        })
  }

  function Add(transactions){

      dispatch({

         type:'ADD_TRANSACTION',
         payload:transactions

      })

  }

  return(

      <GlobalContext.Provider value={{transactions:state.transactions,Delete,Add}}>
          {children}
      </GlobalContext.Provider>

  );


}