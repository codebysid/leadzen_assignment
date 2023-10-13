import React from 'react'

const ShowDetails = ({ user }) => {
    return (
        <div className='show__details'>
            <div className='user__sections'>
                <span>ADDRESS</span>
                <span>{`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</span>
            </div>
            <div className='user__sections'>
                <span>ZIPCODE</span>
                <span>{user.address.zipcode}</span>
            </div>
            <div className='user__sections'>
                <span>COMPANY</span>
                <span>{user.company.name}</span>
            </div>
        </div>
    )
}

export default ShowDetails
