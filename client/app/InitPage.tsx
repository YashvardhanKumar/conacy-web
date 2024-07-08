"use client"
import React, { useEffect, useState } from 'react'
import HomePage from './HomePage';
import IntroPage from './IntroPage';
import { handleValid } from './api/submitActions';
import { cookies } from 'next/headers';

const InitPage = () => {
    const [token, setToken] = useState(cookies().get('accessToken')?.value);
    const refreshToken = cookies().get('refreshToken')?.value;
    useEffect(() => {
      if(!token) {
        handleValid();
      }
    },[token])
    if(token) return <HomePage/>
    return <IntroPage/>
}

export default InitPage