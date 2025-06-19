import React from 'react'
import Navbar from '../components/Navbar'
import Restaurant from '../components/Restaurant'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <div>
                <h1 className='title justify-center text-3xl text-canter m-5 p-5'>
                    Grab Rastaurant
                </h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" className="grow" placeholder="Search" />
                    <kbd className="kbd kbd-sm"></kbd>
                    <kbd className="kbd kbd-sm"></kbd>
                </label>
                <Restaurant />
            </div>
        </div>
    )
}

export default Home