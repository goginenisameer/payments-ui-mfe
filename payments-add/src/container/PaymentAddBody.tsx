

const PaymentAddBody=(props: PaymentsAddProps):JSX.Element =>{


    return (
    <div>
    <p>This is payment add   Micro app 2</p>
    <p> rest requests will be sent to {props.serverUrl}</p>
    </div>
    )
}

export default PaymentAddBody;

export type PaymentsAddProps={
    serverUrl:string
}
