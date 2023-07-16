import React from 'react'

export const Fights = () => {
  return (
    <div>
    <div className="flex  gap-10">
      <h1 className="head_text m-auto green_gradient">Unite Otakus, Decide the Ultimate Champion!</h1>
    </div>
    <div className="flex m-20">
      <img
        className="w-[700px] m-auto mt-10 mb-8 rounded-lg"
        src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440"
        alt="onepiece"
      />
      <h1 className="vs_text text-center blue_gradient">VS</h1>
      <img
        className="w-[700px] m-auto mt-10 mb-8 rounded-lg"
        src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440"
        alt="onepiece"
      />
    </div>
  </div>
  )
}
