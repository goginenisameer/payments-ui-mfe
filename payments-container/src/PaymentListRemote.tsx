import { useEffect, useRef } from "react";
import mount from 'paymentlist/PaymentList';

const PaymentListRemote=():JSX.Element=>{
   
        const paymentListDiv=useRef<HTMLDivElement |null>(null);
        useEffect(()=>{
        mount(paymentListDiv.current);
         },[])
    return ( <div ref={paymentListDiv}></div>)
}

export default PaymentListRemote