import React from 'react'
import { useParams } from 'react-router-dom'

export const EditProfile: React.FC = () => {
    const params = useParams()
    return (
        <div>
            <h3>Edit My Profile Has ID: {params.id}</h3>
        </div>
    )
}