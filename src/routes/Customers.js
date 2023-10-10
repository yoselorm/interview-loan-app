import { collection, deleteDoc, doc, onSnapshot, query, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import CustomerInfo from '../components/CustomerInfo';

const Customers = () => {
    const [customerData, setCustomerData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'customers'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const customers = [];
            querySnapshot.forEach((doc) => {
                customers.push(doc.data());
            });
            setCustomerData(customers);
        });
        return () => unsubscribe();
    }, []);


    return (
        <div>
            <div className='flex flex-row justify-center'>
                <input
                    value={search}
                    type='text'
                    onChange={(e) => { setSearch(e.target.value) }}
                    className='w-[50%] p-2 bg-primary border border-input rounded-2xl'
                    placeholder='Search customers'
                />
            </div>

            {customerData
                .filter((value) => {
                    if (search === '') {
                        return true; // Return all customers if search is empty
                    } else if (
                        (value.firstname.toLowerCase().includes(search.toLowerCase()) ||
                            value.lastname.toLowerCase().includes(search.toLowerCase()) ||
                            value.email.toLowerCase().includes(search.toLowerCase()))
                    ) {
                        return true;
                    }
                    return false;
                })
                .map((items) => {
                    return (
                        <div className='sm:grid sm:grid-cols-2' key={items.id}>
                            <CustomerInfo items={items} />
                        </div>
                    );
                })}
        </div>
    );
};

export default Customers;
