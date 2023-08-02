import './App.css';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Products from './components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductDetail from './components/Products/ProductDetail';
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Products />}></Route>
          <Route exact path='product/:id' element={<ProductDetail />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
