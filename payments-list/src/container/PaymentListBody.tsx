import Search from "./Search/Search";
import Transactions from "./Transactions/Transactions";


const PaymentListBody=():JSX.Element =>{


    return (
    <div>
    <p>This is payment list  Micro app 1</p>
    <Search/>
      <Transactions/>
    </div>
    )
}

export default PaymentListBody;
