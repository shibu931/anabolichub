import { Truck } from 'lucide-react'
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
            <h2 className='text-base-100 font-medium text-center'>{text}</h2>
        </div>
    )
}

export default InformationBar