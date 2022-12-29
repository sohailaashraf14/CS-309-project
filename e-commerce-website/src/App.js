import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Pages from './pages/Pages'
import Data from './components/Data';
function App() {
  //step 1: fetch data from database
  const {productItems} = Data

 // const[cartItem, setCartItem]= usestate([]);
return (
<>
   <Router>
   <Header />
   <Switch>
          <Route path='/' exact>
            <Pages productItems= {productItems}/>
          </Route>
        </Switch>
    </Router>
 
</>
)
}
export default App