import React, { useState } from 'react'
import logo from '../static/logo1.png'
// import '../mypro.css'
import './Navbar.css'
import { Link, Outlet } from 'react-router-dom'


export default () => {
    const [mystyle, setmystyle] = useState('none')

    const unhidden = (e) => {
        e.preventDefault();
        if ( mystyle === "flex" ) {
            setmystyle("none")

        } 
        else {

            setmystyle("flex")
        }
    }

    let swidth = window.innerWidth;
        React.useEffect(()=>{

            
            if ( swidth > 1023 ) {
                setmystyle("flex")
                return;
            }
        }
           , [mystyle] )

    let mobStyle = {
        display: mystyle
    }




    return (
        <>

            <nav className="flex items-center justify-between flex-wrap text-teal-100 bg-teal-600 border-b-2 border-black py-5 px-3">
                <div className="flex items-center flex-shrink-0 text-white mr-3">
                    <img src={logo} className="w-10 mr-2 rounded-full" />
                    <Link to="/" className="font-semibold text-xl tracking-tight text-teal-100 hover:text-teal-300" alt="Logo">Code By Basit</Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={unhidden} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>


                <div id="mymenu" style={mobStyle} className="w-full lg:flex-grow lg:flex lg:items-center lg:w-auto hidden">
                    <div className="text-sm lg:flex-grow">
                    </div>
                    <ul>
                        <li className='myNavItem block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-teal-100 mr-4 ml-4'>
                        <Link data-text="Home" to="/" className="myLink">
                            Home
                        </Link>
                        </li>
                        <li className='myNavItem block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-teal-100 mr-4 ml-4'>
                        <Link data-text="Projects" to="/projects/" className="myLink">
                            Projects
                        </Link>
                        </li>
                        <li className='myNavItem block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-teal-100 mr-4 ml-4'>
                        <Link data-text="ContactUs" to="/contact/" className="myLink">
                            ContactUs

                        </Link>
                        </li>
                        <li className='myNavItem block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-teal-100 mr-4 ml-4'>
                        <Link data-text="About" to="/about/" className="myLink">
                            About
                        </Link>
                        </li>
                        <Link data-text="" to="/feedback/" className="inline-block text-sm px-4 py-2 leading-none border rounded hover:text-teal-500 border-teal-200 hover:border-teal-500  hover:bg-teal-200 mt-4 lg:mt-0 ">FeedBack</Link>
                    </ul>
                </div>
            </nav>

            <Outlet />

        </>
    )
}
{/* <style>
        .ss {
            background-color: #48BB78;
        }
        
        .er {
            background-color: #F56565;
        }
        
        .wr {
            background-color: #ECC94B;
        }
        
        .in {
            background-color: #4299E1;
        }
    </style> */}
{/* {% for message in messages %} */ }














