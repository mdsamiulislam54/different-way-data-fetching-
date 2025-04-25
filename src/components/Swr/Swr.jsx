import React from 'react'
import useSwr from 'swr'
import DataFetch from '../../utilitis/DataFetch'
 


const Swr = () => {
    const {data,error,isLoading } = useSwr('user', DataFetch)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    console.log(data)
  return (
    <div>
        {
            data.map((item) => {
                return (
                    <div key={item.id}>
                        <h1>{item.id}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Swr