import React from 'react'
import { footer } from '../../static'

const Footer = () => {
  return (

    <div className='container mx-auto max-w-[1600px] w-full border-t-1 border-t-gray-300'>
    <div className="flex justify-center gap-6">
      {
      footer?.footer_categories.map((fuu)=>(
        <ul className="flex flex-col gap-4 border-r">
          <h2 className='mb-3 text-xl'>{fuu.title}</h2>
          {
            fuu.links.map(link => <li>{link}</li>)
          }
        </ul>
      ))
}
    </div>
    </div>
    
  )
}

export default Footer