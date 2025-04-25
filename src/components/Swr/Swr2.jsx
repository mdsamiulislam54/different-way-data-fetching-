import React from 'react'
import fetcher from '../../utilitis/DataFetch'
import useSWR from 'swr'
const Swr2 = () => {
    const {data,error,isLoading } = useSWR('user', fetcher)
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
                        <p>{item.email}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Swr2