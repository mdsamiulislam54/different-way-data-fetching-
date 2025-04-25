import React from 'react'
import { useQuery } from '@tanstack/react-query'

const ReactQuery2 = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['user'],})
  return (
    <div>
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && data.map((item) => {
            return (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <p>{item.email}</p>
                </div>
            )
        })}
    </div>
  )
}

export default ReactQuery2