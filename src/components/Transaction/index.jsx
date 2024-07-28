import './transaction.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import ReactContext from '../../context/ReactContext';

const Transaction = () => {
    const { transactionList } = useContext(ReactContext);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    }

    return (
        <div className='container'>
            <div className='top-box'>
                <h1 className='transaction-name'>Office Transaction</h1>
                <Link to='/new-transaction'>
                    <button className='add-btn'>+ Add Transaction</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className='date'>Date</th>
                        <th className='title'>Title</th>
                        <th className='credit'>Credit</th>
                        <th className='debit'>Debit</th>
                        <th className='amount'>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList.map((item) => {
                        const creditAmount = item.transType === 'Credit' ? item.amount : '';
                        const debitAmount = item.transType === 'Debit' ? item.amount : ''
                        return (
                        <tr key={item.id}>
                            <td>{formatDate(item.date)}</td>
                            <td>{item.description }</td>
                            <td>{creditAmount}</td>
                            <td>{debitAmount}</td>
                            <td>{item.amounts || ''}</td>
                        </tr>
                    )})}
                </tbody>
                <tr>
                    <td>02/17/2020</td>
                    <td>Mis expenses</td>
                    <td></td>
                    <td>3000</td>
                    <td>1215</td>
                </tr>
                <tr>
                    <td>02/17/2020</td>
                    <td>Printin sheets foroffie docymets</td>
                    <td></td>
                    <td>25</td>
                    <td>4215</td>
                </tr>
                <tr>
                    <td>02/17/2020</td>
                    <td>Credited to Office Amount</td>
                    <td>5000</td>
                    <td></td>
                    <td>5000</td>
                </tr>
            </table>
        </div>
    );
}

export default Transaction;
