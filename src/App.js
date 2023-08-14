import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/login.jsx';
import SignUp from './Pages/SignUp/signUp.jsx';
import Dashboard from './Pages/Dashboard/dashboard.jsx';
import SideBarData from './Components/SideBar/sideBarData.js';
import SideBarLayout from './Components/Layouts/sideBarLayout.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBarLayout />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

          {SideBarData.map((item, index) => (
            <Route key={index} path={item.path} element={<SideBarLayout/>} />
          ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
