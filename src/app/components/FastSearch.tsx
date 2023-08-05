import React from 'react'
import Image from 'next/image'

const QuickSearch = () => {
  return (
    <div className='container mx-auto p-5'>
      <div className="flex">
        <div className='w-full h-[2px] bg-gray-500'></div>
        <h2 className='px-5 font-medium text-gray-500 whitespace-nowrap' >Try searching for</h2>
        <div className='w-full h-[2px] bg-gray-500'></div>
      </div>
    
        <div className="flex w-full justify-between mt-4">
            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='' alt='Hotel'/>
                <p className='text-sm text-gray-500'>Hotel</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='' alt=''/>
                <p className='text-sm text-gray-500'>Farm</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='' alt=''/>
                <p className='text-sm text-gray-500'>Cottage</p>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Image width={25} height={25} src='' alt=''/>
                <p className='text-sm text-gray-500'>Resort</p>
            </div>
        </div>
    </div>
  )
}

export default QuickSearch
