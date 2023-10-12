import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { db } from '../firebase';

export default function Form() {
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('')
    const [dob, setDob] = useState('');
    const [company, setCompany] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('');
    const [marital, setMarital] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !firstname || !lastname || !dob || !company || !id || !phone || !address || !marital) {
            setError('Please fill out all fields.');
            return;
        }

        await setDoc(doc(db, "customers", id), {
            email,
            firstname,
            lastname,
            dob,
            company,
            id,
            phone,
            address,
            marital
        });

        setAddress("");
        setCompany("");
        setDob("");
        setEmail("");
        setFirstname("");
        setId("");
        setLastname("");
        setPhone("");
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setAddress("");
        setCompany("");
        setDob("");
        setEmail("");
        setFirstname("");
        setId("");
        setLastname("");
        setPhone("");
        setError('')
    }
    return (
        <form>
            <div className="space-y-12 sm:max-w-[1440px] sm:mx-10">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Customer Information</h2>

                    <h3 className="text-base font-semibold leading-7 text-red-400">{error}</h3>
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={firstname}
                                    onChange={(e) => { setFirstname(e.target.value) }}
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={lastname}
                                    onChange={(e) => { setLastname(e.target.value) }}
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4 sm:flex sm:justify-between ">
                            <div className="mt-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>

                                <input
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    DOB
                                </label>

                                <input
                                    value={dob}
                                    onChange={(e) => { setDob(e.target.value) }}
                                    id="dob"
                                    name="dob"
                                    type="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                Marital status
                            </label>
                            <div className="mt-2">
                                <select
                                    value={marital}
                                    onChange={(e) => { setMarital(e.target.value) }}
                                    id="status"
                                    name="status"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                >
                                    <option></option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select>
                            </div>
                            <div className='mt-2'>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    National ID number
                                </label>
                                <input
                                    value={id}
                                    onChange={(e) => { setId(e.target.value) }}
                                    id="id"
                                    name="id"
                                    type="text"

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={address}
                                    onChange={(e) => { setAddress(e.target.value) }}
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    value={phone}
                                    onChange={(e) => { setPhone(e.target.value) }}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                Company/Employer Name
                            </label>
                            <div className="mt-2">
                                <input
                                    value={company}
                                    onChange={(e) => { setCompany(e.target.value) }}
                                    type="employer"
                                    name="employer"
                                    id="employer"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button onClick={handleCancel} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </form>
    )
}
