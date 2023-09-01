import React from 'react'
import Button from './Button'

const DateInput = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
    {/* Column 1 */}
    <div className="col-span-1 md:col-span-1 lg:col-span-1">
      <label className='text-lg font-medium  text-gray-500' htmlFor="date1">Start Date</label>
      <input
        type="date"
        id="date1"
        name="date1"
        className="border p-2 w-full rounded-xl text-md"
      />
    </div>

    {/* Column 2 */}
    <div className="col-span-1 md:col-span-1 lg:col-span-1">
      <label className='text-lg font-medium  text-gray-500' htmlFor="date2">End Date</label>
      <input
        type="date"
        id="date2"
        name="date2"
        className="border rounded-xl p-2 w-full "
      />
          </div>
          
          <button className='bg-blue-400 w-[7rem] rounded-2xl text-white text-md p-2 hover:bg-blue-600 '>
            Query
          </button>
  </div>
  )
}

export default DateInput
