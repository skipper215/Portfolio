import { useEffect, useState, useRef } from 'react';


export const Home = () =>  {
    return (
        <section 
            id="home" // section + id - allows for href routing 
            className="min-h-screen flex items-center justify-center relative bg-gray-900"
        >
            <div className="text-center z-10">
                <h1 className="text-5xl font-bold"> 
                    Ivan Ma
                </h1>
                <p className="text-gray-400 text-lg max-w-lg mx-auto"> 
                    An aspiring Front-end developer who loves problem-solving, using tools like React, and TailWindCSS to provide modern solutions with 
                    <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> STYLE! </span>  
                </p>
            </div>


        </section>
    )
}