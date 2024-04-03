/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react';
import { useSession } from 'next-auth/react';


const chats = () => {
    const {data:session}=useSession()
    console.log(session)
    return (
        <div>
            <p>fjhasdjfsd</p>
        </div>
    );
};

export default chats;