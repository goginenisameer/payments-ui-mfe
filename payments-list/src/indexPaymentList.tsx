import ReactDOM  from "react-dom/client"
import PaymentListBody from "./container/PaymentListBody";
import { BrowserRouter } from "react-router-dom";


const mount=(e1:Element):void=>{
    ReactDOM.createRoot(e1).render
    
    (
        <BrowserRouter>
        <PaymentListBody/></BrowserRouter>
    
    
    );
}

export default mount