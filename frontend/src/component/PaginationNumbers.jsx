import React from 'react'

const PaginationNumbers = ({ users, setPage, page }) => {

    const selectPage = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(users.length / 3)) {
            setPage(selectedPage)
        }
    }
    return (
        <div className='pagination'>
            <span onClick={() => selectPage(page - 1)}>&lt;</span>
            {
                [...Array(Math.ceil(users.length / 3))].map((_, index) => {
                    return (
                        <span key={index} onClick={() => selectPage(index + 1)} className={page === index + 1 && "pagination__selected"}>{index + 1}</span>
                    )
                })

            }
            <span onClick={() => selectPage(page + 1)}>&gt;</span>
        </div>
    )
}

export default PaginationNumbers
