import React from 'react'

const Verification = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
      <div className='flex justify-center flex-col items-center w-auto h-[300px] border-2 border-[#e7e7e5] border-solid p-4 my-4 rounded-lg'>
            <div className='text-center my-5'>
                <h1 className='font-semibold'>Verify your account</h1>
            </div>
              <div>
                  <form className='flex justify-center items-center w-auto' action="">
                      <input 
                      className='border rounded mx-2'
                      type="text"
                      placeholder='Enter your OTP' 
                      required
                      />
                  </form>
              </div>
            <div>
                <button className='bg-[#f7bf0c] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-700'>Verify</button>
            </div>
        </div>
    </div>
  )
}

export default Verification
