import React from 'react'

const Header = ({heading,subheading}) => {
  return (
     <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold leading-9">{heading}</h1>
          <p className="font-normal text-[16px] text-gray-500 leading-6">
            {subheading}
          </p>
        </div>
  )
}

export default Header