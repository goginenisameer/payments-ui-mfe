import ReactDOM  from "react-dom/client"
import PaymentErrorBody from "./container/PaymentErrorBody";


const mount=(e1:Element):void=>{
    ReactDOM.createRoot(e1).render(<PaymentErrorBody/>);
}

export default mount