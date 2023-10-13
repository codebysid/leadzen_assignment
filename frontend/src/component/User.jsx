import React, { useRef, useState } from 'react'
import ShowDetails from './ShowDetails'

const User = ({ user }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const details = useRef()

    const toggleDetails = () => {
        details.current.style.display === "block" ? details.current.style.display = "none" : details.current.style.display = "block"
        setIsDetailsVisible(prev => !prev)
    }

    return (
        <div>
            <div className='container '>
                <p>{user.name}</p>
                <div className='user__sections'>
                    <span>CONTACT</span>
                    <span>{user.phone}</span>
                </div>
                <div className='user__sections'>
                    <span>EMAIL</span>
                    <span>{user.email}</span>
                </div>
                <div className='user__sections'>
                    <span>CITY</span>
                    <span>{user.address.city}</span>
                </div>

                <button onClick={() => toggleDetails()}>
                    {isDetailsVisible ? "Hide Details" : "View Details"}
                </button>

            </div >
            <div ref={details} className='details__section'>
                <ShowDetails user={user} />
            </div>
        </div>
    )
}

export default User
