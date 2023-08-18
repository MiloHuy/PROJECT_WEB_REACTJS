import './App.css';
import FilterProduct from './Components/FilterProduct';
import MainPage from './Components/Main';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import SingleProduct from './Components/SingleProduct';
import LoginCard from './Components/Login';
import { useSelector } from 'react-redux';
import Cart from './Components/Cart';
import AccountPage from './Components/Account';
import ShareLayout from './Components/ShareLayout/index.jsx';
import AdminPage from './Components/Account/admin.jsx'
import ProductPage from './Components/Product';
import ProfilePage from './Components/Account/profile';
import Home from './ComponentAPI/Home';
import User from './ComponentAPI/User';
import AddUser from './ComponentAPI/AddUser';
import UpdateUser from './ComponentAPI/UpdateUser';

function App() {
  const user = useSelector(state => state.user.user)
  const {authUser} = user
  console.log("User: ",user)
  console.log("AuthUser: ",authUser)
  return (
    <div > 
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {authUser ? <ShareLayout/> : <LoginCard/>}>
            <Route index element = {<MainPage/>} />
            <Route path = "/user" element = {<AccountPage/>} />
            <Route path = '/user/cart' element = {<Cart/>} />
            <Route path = '/user/profile' element = {<ProfilePage/>} />
            <Route path = '/dashboard' element = {<AdminPage/>}/>
            <Route path = '/dashboard/product' element = {<ProductPage/>}/>
            <Route path = "/filterProducts/:type" element = {<FilterProduct/>} />
            <Route path = "/filterProducts/:type/:id" element = {<SingleProduct/>} />
          </Route>  
        </Routes> 
        {/* <Routes>
          <Route path = '/' element ={<Home/>}/>
          <Route path = '/user' element ={<User/>}/>
          <Route path = '/user/add' element ={<AddUser/>}/>
          <Route path = '/user/edit/:code' element ={<UpdateUser/>}/>
        </Routes> */}
       </BrowserRouter>
     </div>
     
  );
}

export default App;
