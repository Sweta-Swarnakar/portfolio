import React from 'react'
import {social } from '../../profile'



const HeaderButton = () => {

    return (
        <>
            
            <div className="mx-auto">
                <a href="#about"><button className="see">Checkout Portfolio<i className="fas fa-eye"></i></button></a>
                <span>
                <div>
                    {social.resume && <a title="Download Resume" href={social.resume} download><i className="fas fa-download res" ></i></a>}
            </div>
                </span>
            </div>

        </>
    )
}

export default HeaderButton
