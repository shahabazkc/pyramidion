import './App.css';
import Header from './components/Header/Header';
import PasswordStrength from './components/PasswordStength/PasswordStrength';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
      <Header />
      <PasswordStrength />
    </div>
  );
}

export default App;
