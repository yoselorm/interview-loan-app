import { collection, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const CustomerInfo = ({ items }) => {
    // console.log(items)
    const [loanamount, setLoanamount] = useState();
    const [tenure, setTenure] = useState()
    const [rate, setRate] = useState()
    const [toggle, setToggle] = useState(false)


    const rateDecimal = parseFloat(rate) / 100;

    const interest = (parseFloat(loanamount) * parseFloat(tenure) * rateDecimal);
    const totalLoanAmount = parseFloat(loanamount) + interest;


    const handleSubmit = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "loans", items.id), {
            loanamount,
            tenure,
            totalLoanAmount,
            interest,
            rate,
            lastname: items.lastname,
            firstname: items.firstname,
            id: items.id,
            phone: items.phone
        });
        setRate('')
        setTenure('')
        setLoanamount('')
    }


    return (

        toggle ? (<div>

            <div className='sm:flex gap-4 sm:max-w-[850px] max-w-[600px] sm:justify-between mx-auto min-h-[600px] px-4 py-20 sm:items-center'>
                {items.firstname}
                <form className='sm:w-[60%]' >
                    <div className='my-4'>
                        <label>Loan amount</label>
                        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input
                                value={loanamount}
                                type='number'
                                onChange={(e) => { setLoanamount(e.target.value) }}
                                className='w-full p-2 bg-primary border border-input rounded-2xl' />

                        </div>
                    </div>
                    <div className='my-4'>
                        <label>Tenure</label>
                        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input
                                value={tenure}
                                onChange={(e) => { setTenure(e.target.value) }}
                                className='w-full p-2 bg-primary border border-input rounded-2xl' type='number' />

                        </div>
                    </div>
                    <div className='my-4'>
                        <label>Rate</label>
                        <div className='my-2 w-full relative rounded-2xl shadow-xl'>
                            <input
                                value={rate}
                                onChange={(e) => { setRate(e.target.value) }}
                                className='w-full p-2 bg-primary border border-input rounded-2xl' type='number' />

                        </div>
                    </div>
                    <button className='w-full my-2 p-3 bg-[#BEADFA] hover:bg-[#4D4C7D] rounded-2xl shadow-xl' onClick={handleSubmit}>Submit</button>
                    <button onClick={(e) => { setToggle(false) }} className='w-[50%] my-2 p-3 bg-[#BEADFA] hover:bg-[#4D4C7D] rounded-2xl shadow-xl mb-10'>Cancel</button>
                </form>
                <div className='space-y-4'>
                    <p className='text-xl font-bold'>Principal/Loan collected:{loanamount}</p>
                    <p className='text-xl font-bold'>Cumulated interest: {interest}</p>
                    <p className='text-xl font-bold'>Total Loan to be paid:{totalLoanAmount}</p>
                </div>
            </div>
        </div >) : (
            <div className=' w-[400px] border-b-1 bg-slate-100 border-b-gray-500 shadow-xl mx-auto mt-5 p-4 '>
                <div className='flex flex-col justify-center items-center '>
                    <div className='mb-5'>
                        <div className='font-bold text-2xl'><p>{items.lastname},{items.firstname}</p></div>
                        <p className='text-sm text-gray-400'>{items.email}</p>
                        <p>{items.id}</p>
                        <p>{items.phone}</p>

                    </div>

                    <div>
                        <p className='font-bold text-xl text-gray-400'>Employer: {items.company}</p>
                        <p className='font-semibold text-gray-400'>DOB: {items.dob}</p>
                        <p className='font-semibold text-gray-400'>{items.address}</p>
                        <p className='font-semibold text-gray-400'>{items.marital}</p>

                    </div>

                </div>
                <div className='flex justify-between gap-2'>
                    {/* <button className='px-2 w-20 h-10 rounded-lg hover:text-black hover:bg-white text-white bg-red-300' >Remove</button> */}
                    <button onClick={(e) => setToggle(true)} className='px-2 w-20 h-10 rounded-lg hover:text-black hover:bg-white text-white bg-[#3282B8]'>Apply</button>

                </div>
            </div>)
    );
}

export default CustomerInfo;
