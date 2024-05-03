import ReactDOM  from "react-dom/client"
import PaymentAddBody, { PaymentsAddProps } from "./container/PaymentAddBody";

const mount=(e1:Element,props: PaymentsAddProps):void=>{
    ReactDOM.createRoot(e1).render(<PaymentAddBody {...props}/>);
}

export default mount