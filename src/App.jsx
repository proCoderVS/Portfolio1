
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import "./index.css";
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
    {/* <Toaster/> */}
    <ToastContainer
  position="top-right"
  autoClose={1000}
  closeOnClick
  pauseOnHover
  draggable
  closeButton
/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
