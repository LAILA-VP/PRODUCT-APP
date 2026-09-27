import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav class="bg-blue-600 text-white p-4 flex items-center">
            <h5 class="text-x1 flex-grow">product-App</h5>
            <Link to="/home">
            <button class="bg-white text-blue-600 px-2 py-1 mx-3 rounded">HOME</button>
            </Link>
            <Link to="/add">
            <button class="bg-white text-blue-600 px-2 py-1 mx-3 rounded">ADD</button>
             </Link>           
             <Link to="/view">
            <button class="bg-white text-blue-600 px-2 py-1 mx-3 rounded">VIEW</button>
            </Link>
        </nav>
    </div>
  )
}

export default NavBar