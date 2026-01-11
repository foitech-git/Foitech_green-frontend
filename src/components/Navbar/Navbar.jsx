import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Avatar from "../../assets/avatar.png"
import { useSelector } from 'react-redux';
import { useAuth } from '../../context/AuthContext';

const navigation =[
    {name:"Dashboard", href:"/dashboard"},
    {name:"Orders", href:"/Orders"},
    {name:"Cart Page", href:"/cart"},
    {name:"Check Out", href:"/checkout"},

]

 

function Navbar() {
    const [isDropDownOpen, setIsDropDownOpen]=useState(false)
    
    

    
    const cartItems = useSelector(state=> state.cart.cartItems);
    const {currentUser, logout} = useAuth()
    const handleLogOut = () =>{
        logout()
    }

  return (
    <header className='max-w-screen-2xl mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
            {/* left side search bar and logo*/}
            <div className='flex items-center md:gap-16 gap-4'>
                <Link to='/'>
                <img src={logo} alt="logo" className='size-8'/>
                </Link>

                <div className='relative sm:w-72 w-40 space-x-2'>
                <IoSearch className='absolute inline-block left-3 inset-y-2'/>
                <input type="text" placeholder='search ' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
                </div>
            </div>

            {/* right side of nav bar  */}

            <div className='relative flex items-center md:space-x-3 space-x-2'>
                <div>
                    {
                        currentUser ? <>
                        <button onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                            <img src={Avatar} alt="" className={`size-7 rounded-full 
                                ${currentUser ? 'ring-2 ring-blue-500' :''}`}/>
                        </button>

                        {/* drop down */}
                        {
                            isDropDownOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg
                                rounded-md z-40'>
                                    <ul className='py-2'>
                                        {
                                            navigation.map((item)=>(
                                                <li key={item.name} onClick={()=>setIsDropDownOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-200 shadow-sm'>
                                                    {item.name}
                                                    
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <button 
                                            onClick={handleLogOut}
                                            className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 shadow-sm'>Logout</button>
                                        </li>
                                    </ul>

                                </div>
                            )
                        }

                        </> :<Link to='/login'><HiOutlineUser className='size-6' /></Link>
                    }
                </div>
        
            <button className='hidden sm:block'>
            <FaRegHeart className='size-6' />
            </button>

            <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
            <MdOutlineShoppingCartCheckout className='size-6'/>

            {
                cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml:1 '>{cartItems.length}</span> : 
                <span className='text-sm font-semibold sm:ml:1 '>{cartItems.length}</span>
            }
            
            </Link>
            

            </div>


        </nav>


    </header>   
  )
}

export default Navbar
