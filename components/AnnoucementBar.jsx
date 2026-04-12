import React from 'react'

const AnnoucementBar = () => {
  return (
   <>
   <style>
        {`
          @keyframes swipeHold {
            0% { transform: translateX(100%); opacity: 0; }
            10% { transform: translateX(0); opacity: 1; }
            90% { transform: translateX(0); opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }
          .animate-swipe-custom {
            animation: swipeHold 9s linear infinite;
          }
        `}
      </style>

      <div className='overflow-hidden bg-[#f9f8f2]'>
        <div className='flex items-center justify-center py-2.5 border border-gray-300'>
          <h2 className="animate-swipe-custom whitespace-nowrap font-medium text-gray-800 ">
            🔉 Avail free delivery on purchase of Rs. 699 and above. 🔉
          </h2>
        </div>
      </div>
   </>
  )
}

export default AnnoucementBar;
