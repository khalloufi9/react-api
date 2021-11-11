import axios from 'axios'
import React from 'react'
import { useState,useEffect}from 'react'

const Users = () => {
    const [users, setUsers] = useState([])

    const fetchusers=()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    }
     useEffect(() => {
       fetchusers()
     }, [])
    
    return (
        <div>
            {users.map((el,i)=><h1>{el.name}</h1>)}
         </div>
    )
}
export default Users