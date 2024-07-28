import './newtransaction.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RxCross2 } from "react-icons/rx";
import { FiSave } from "react-icons/fi";
import { Link } from 'react-router-dom'
import ReactContext from '../../context/ReactContext';
import { useContext } from 'react';
import {toast} from 'sonner'

const NewTransaction = () => {
    const { addItem, totalAmounts, setTotalAmounts } = useContext(ReactContext)
    const [transType, setTranstype] = useState('Credit')
    const [amount, setAmount] = useState(0)
    const [description, setDescription] = useState('')



    const changeType = (event) => {
        setTranstype(event.target.value)
    }

    const changeAmount = (event) => {
        setAmount(event.target.value)
    }

    const changeDescription = (event) => {
        setDescription(event.target.value)
    }
    const formSubmit = (event) => {
        event.preventDefault()
        if (amount !== '' && description !== '') {
            const amounts = transType === 'Credit' ? parseInt(totalAmounts) + parseInt(amount) : parseInt(totalAmounts) - parseInt(amount)
            if (amounts > 0) {

                setTotalAmounts(amounts)
                const transDetails = {
                    id: uuidv4(),
                    date: Date(),
                    description,
                    amount,
                    transType,
                    amounts,
                }

                addItem(transDetails)
                toast.success('New Transaction is created')
            }else{
                toast.error('Insufficient Balance')
            }
        }else if (description === ''){
            toast.error('Please Enter Description')
        }else if (amount === ''){
            toast.error('PLease Enter Amount ')
        }else{
            toast.error('Please Enter Username & Description')
        }

    }


    return (
        <div className='bg-container'>
            <div className='top-head' >
                <h3 className='head'>New Transaction</h3>
                <Link to='/'>
                    <button type='button' className='cross-btn'>
                        <RxCross2 size={15} />
                    </button>
                </Link>
            </div>
            <form onSubmit={formSubmit} className='form'>
                <div className='input-container'>
                    <label className='label' htmlFor='transaction-type'>Transaction Type</label>
                    <select className='selects' value={transType} onChange={changeType} id='transaction-type'>
                        <option value='Credit' className='options'>Credit</option>
                        <option value='Debit' className='options'>Debit</option>
                    </select>
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='transaction-type'>Amount</label>
                    <input type='number' value={amount} onChange={changeAmount} className='input' />
                </div>
                <div className='input-container'>
                    <label className='label' htmlFor='transaction-type'>Description</label>
                    <textarea className='textarea' value={description} onChange={changeDescription} >

                    </textarea>
                </div>
                <div className='btn-container'>
                    <button type='submit' className='save-btn'>
                        <FiSave size={15} />
                        Save
                    </button>
                    <Link to='/'>
                        <button type='button' className='cancel-btn' >
                            <RxCross2 size={15} />
                            Cancel
                        </button>
                    </Link>

                </div>
            </form>



        </div>
    )

}

export default NewTransaction