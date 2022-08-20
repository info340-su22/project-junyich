import React from 'react';
import { Outlet } from 'react-router-dom';

export default function BookPage(props) {
    return (
        <section id='BookPage'>
            <h2 className='mb-5 text-center p-3'>Book Gallery</h2>
            <Outlet />
        </section>
    )
  }
  