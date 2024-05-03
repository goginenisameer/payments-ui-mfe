import ReactDOM  from "react-dom/client"
import PaymentListBody from "./container/PaymentListBody";


const mount=(e1:Element):void=>{
    ReactDOM.createRoot(e1).render(<PaymentListBody/>);
}

export default mount