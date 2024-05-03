
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import PaymentAddRemote from './PaymentAddRemote';
import PaymentListRemote from './PaymentListRemote';
import PageHeader from './component/pageHeader/PageHeader';


function App() {
 
  return (
  

<BrowserRouter>
        <PageHeader />
        <Routes>
          <Route path="/add" element={ <PaymentAddRemote/>} />
          <Route path="/list" element={<PaymentListRemote/>} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    
   
    

  )
}

export default App
