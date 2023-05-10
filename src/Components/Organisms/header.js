import React, { useState } from 'react'
import Navbar from '../Molecules/navbar'
import './header.css'
import { Mainbutton } from '../Atoms/button'
export default function Header() {

    return (
        <div>
            <Navbar />
            <div className='main'>
                
                <div className='text' >
                    <h1>Be There</h1>
                    <h3>Listen to Brilliant Songs in the moment</h3>

                    <Mainbutton/>
                </div>
                <img src='https://images.pexels.com/photos/14348172/pexels-photo-14348172.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1' className='image' />

            </div>
        </div>
    )
}