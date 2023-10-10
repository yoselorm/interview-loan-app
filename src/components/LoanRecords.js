import React from 'react';

const LoanRecords = ({ items }) => {
    console.log(items)
    return (
        <div>

            <div className=' w-[400px] border-b-1 bg-slate-100 border-b-gray-500 shadow-xl mx-auto mt-5 p-4 '>
                <div className='flex flex-col justify-center items-center '>
                    <div className='mb-5'>
                        <div className='font-bold text-2xl'><p>{items.lastname},{items.firstname}</p></div>
                        <p className='text-sm text-gray-400'>{items.email}</p>
                        <p className='text-xl font-semibold text-gray-500'>{items.id}</p>
                        <p className='text-xl font-semibold text-gray-500'>Tel: {items.phone}</p>
                        <p className='text-xl font-semibold text-gray-500'>Loan details</p>
                        <p className='text-xl font-semibold text-gray-500'>Loan amount: {items.loanamount}</p>
                        <p className='text-xl font-semibold text-gray-500'>Rate: {items.rate}</p>
                        <p className='text-xl font-semibold text-gray-500'>Time: {items.tenure} year(s)</p>
                        <p className='text-xl font-semibold text-gray-500'>Amount to pay: {items.totalLoanAmount}</p>

                    </div>

                </div>
                <div className='flex justify-center mt-5 gap-2'>
                    <button className='px-2 w-20 h-10 rounded-lg hover:text-black hover:bg-white text-white bg-[#3282B8]'>paid</button>

                </div>
            </div>
        </div>
    );
}

export default LoanRecords;
