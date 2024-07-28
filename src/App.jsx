import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactContext from './context/ReactContext';
import Transaction from './components/Transaction';
import NewTransaction from './components/NewTransaction';

const App = () => {
    const [transactionList, setTransactionList] = useState([]);
    const [totalAmounts, setTotalAmounts] = useState(1215);

    

    
    const addItem = (item) => {
        setTransactionList(prevList => [item, ...prevList]);
    }

    return (
        <ReactContext.Provider value={{ addItem, transactionList, totalAmounts, setTotalAmounts }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Transaction />} />
                    <Route path='/new-transaction' element={<NewTransaction />} />
                </Routes>
            </BrowserRouter>
        </ReactContext.Provider>
    );
}

export default App;
