import React, { useState } from 'react'
import User from './User'
import PaginationNumbers from './PaginationNumbers'

const DisplayUsers = ({ users }) => {
    const [page, setPage] = useState(1)
    return (
        <div className='display__users'>
            {
                users.slice(page * 3 - 3, page * 3).map((user) => {
                    return (
                        <User key={user.id} user={user} details={false} />
                    )
                })
            }
            <PaginationNumbers users={users} setPage={setPage} page={page} />
        </div>
    )
}

export default DisplayUsers
