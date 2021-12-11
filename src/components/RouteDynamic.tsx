import React from 'react'
import { useParams } from 'react-router-dom'

interface DynamicProps{}

export const  Dynamic: React.FC<DynamicProps> = () => {
    const param = useParams();
    return (
        <div>
           Hello: {param.id}
        </div>
    )
}
