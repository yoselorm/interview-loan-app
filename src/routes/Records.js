import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import LoanRecords from '../components/LoanRecords';

const Records = () => {
    const [records, setRecords] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        const q = query(collection(db, 'loans'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const record = [];
            querySnapshot.forEach((doc) => {
                record.push(doc.data());
            });
            setRecords(record);
        });
        return () => unsubscribe();
    }, []);
    console.log(records)
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
            <div className='sm:flex flex flex-wrap gap-4'>


                {
                    records.filter((value) => {
                        if (search === '') {
                            return true;
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
                                <div className=" w-[400px]" key={items.id}>
                                    <LoanRecords items={items} />
                                </div>
                            );
                        })}
            </div>
        </div>
    );
}

export default Records;
