import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
    const styles = {
        link: 'hover: font-medium hover:text-[#826047] active: font-[200]'
    }
  return (
    <nav className='mb-10'>
        <ul className='flex justify-center gap-2 font-light'>
            <li className={styles.link}><NavLink to='/'>Home</NavLink></li>
            <li className={styles.link}><NavLink to='about'>About</NavLink></li>
            <li className={styles.link}><NavLink to='products'>Products</NavLink></li>
            
        </ul>
    </nav>
  )
}

export default Navbar