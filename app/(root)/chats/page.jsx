/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React from 'react';
import { useSession } from 'next-auth/react';

import Contacts from '@components/Contacts';


const chats = () => {
    const {data:session}=useSession()
    console.log(session)
    return (
        <div className="main-container">
        <div className="w-1/3 max-lg:w-1/2 max-md:w-full">
         
        </div>
        <div className="w-2/3 max-lg:w-1/2 max-md:hidden">
          <Contacts />
        </div>
      </div>
    );
};

export default chats;