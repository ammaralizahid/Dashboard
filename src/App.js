import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from "./Pages/Login/login.jsx";
import SignUp from "./Pages/SignUp/signUp.jsx";
import Dashboard from './Pages/Dashboard/dashboard.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
<Route path='/sign-in' element={<Login/>}/>
<Route path='/sign-up' element={<SignUp/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
