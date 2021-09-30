import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className='sticky-footer bg-white'>
            <div className='container my-auto'>
                <div className='copyright text-center my-auto pb-3'>
                    <span>Copyright &copy; Muhammad Isfandiarto {date} </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
