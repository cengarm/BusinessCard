import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import SingleUser from './SingleUser'



const UserList = () => {
    const[users,setUsers] = useState([])

const fetchUsers =async() =>{
   const response =  await axios.get("https://randomuser.me/api/?results=20") //axios çekiyo
   setUsers(response.data.results) // userse güncelliyor
}

useEffect(()=>{
    fetchUsers()
},[])
  return (

    <div className='user-list'>
        <ul>
            {users.map((user,idx)=>(
                <li> <SingleUser user={user} key={idx}/> {''}</li>
            ))}
        </ul>
    </div>

  )
}

export default UserList