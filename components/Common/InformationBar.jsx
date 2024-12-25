import Image from 'next/image'
import React from 'react'

const InformationBar = ({icon,text,className}) => {
    return (
        <div className={`${className} w-full py-2 flex justify-center`}>
            {
                icon && <Image
                src={`/assets/icons/${icon}.svg`}
                width="25"
                height="25"
                className="me-3"
                alt={icon}
            />
            }
            <p className='text-base-100 font-medium text-center'>{text}</p>
        </div>
    )
}

export default InformationBar