import React from 'react'

const Title = ({ children, className }) => {
    return (
        <h2 className={`text-center font-dm font-bold text-3xl ${className}`}>{children}</h2>
    )
}

export default Title