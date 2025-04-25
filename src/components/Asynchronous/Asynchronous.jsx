import React, { useEffect, useState } from 'react'
import  AsynchronousFetch from '../../utilitis/asynchronousFetch'
const Asynchronous = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await AsynchronousFetch()
            setUser(data)
        }
        fetchData()
    },[])
   
  return (
    <div>
        {
            user?.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.username}</h1>
                       
                    </div>
                )
            })
        }
    </div>
  )
}

export default Asynchronous