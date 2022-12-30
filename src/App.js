import Header from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { History } from './History';
import { AddTransaction } from './Components/AddTransaction';
import { makeStyles } from '@material-ui/core'
import './App.css';
import { GlobalProvider } from './Components/Context/GlobalState';

const styles = makeStyles({

 bigSpace :{

  paddingTop:"5rem"

 },

 smallSpace :{

  paddingTop:"2.5rem"
 },

 microSpace :{

  paddingTop:"1.3rem"

 }


})

function App() {

  const classes= styles();

  return (
    <GlobalProvider>
    <div className="App">
     <Header />
     <div className="container">
       <div className={classes.smallSpace}>
       <Balance />
       </div>
       <div className={classes.smallSpace}>
       <IncomeExpenses />
       </div>
       <div className={classes.microSpace}>
       <History />
       </div>
       <AddTransaction />
     </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
