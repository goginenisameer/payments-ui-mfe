import { useEffect, useRef } from "react";
import mount from 'paymentadd/PaymentAdd';

const PaymentAddRemote=():JSX.Element=>{
   
        const PaymentAddDiv=useRef<HTMLDivElement |null>(null);
        useEffect(()=>{
        mount(PaymentAddDiv.current,{serverUrl:"https://multicode.uk"});
         },[])
    return ( <div ref={PaymentAddDiv}></div>)
}

export default PaymentAddRemote