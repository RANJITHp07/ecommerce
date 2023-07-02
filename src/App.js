import { BrowserRouter as Router, Route ,Routes } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Login from './component/Login/Login'
import Admin from './component/admin';
import Allproduct from './pages/admin/Allproduct';
import Categories from './pages/admin/Category';
import Productfrom from './pages/admin/Productfrom';
import Cart from './pages/Cart';
import Category from './pages/Category';
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import Updatefrom from './pages/admin/Updateform';
import Search from './pages/Search';


function App() {
  const user=localStorage.getItem("User")
  return (
    <Router>
      <Routes>
      <Route path='/register' element={<Register/>}></Route>
                 <Route path='/login' element={<Login/>}></Route>
                 <Route exact path='/' element={<Home/>}></Route>  
                 <Route path="/product/:productType" element={<Category/>}></Route>
                 <Route path="/cart" element={<Cart/>}></Route>
                 <Route path="/:slugname" element={<Search/>}></Route>

                 <Route path='/admindashboard' element={<Admin/>}/>
                 <Route path='/admindashboard/category' element={<Categories/>}/>
                 <Route path='/admindashboard/productform' element={<Productfrom/>}/>
                 <Route path='/admindashboard/viewproduct' element={<Allproduct/>}/>
                 <Route path='/admindashboard/updateproduct/:id' element={<Updatefrom/>}/>
                 <Route path='/product' element={<Product/>}></Route>
              
      </Routes>  
                 
    </Router>

  );
}

export default App;
