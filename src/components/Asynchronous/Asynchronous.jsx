import React from 'react'
import  AsynchronousFetch from '../../utilitis/asynchronousFetch'
const Asynchronous = () => {
    const data = AsynchronousFetch()
    console.log(data)
  return (
    <div>
        {
            data?.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Asynchronous