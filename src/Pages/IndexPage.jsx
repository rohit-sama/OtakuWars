import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <div className="flex  gap-10"> 
        <h1 className="head_text m-auto orange_gradient">Otaku Showdown</h1>
        </div>
        <div className='flex-col'>
        <img className='w-[700px] m-auto mt-10 mb-8 rounded-lg' src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440" alt="onepiece" />
        <h1 className='blue_gradient m-auto text-center desc'>CHOOSE, VOTE, CONQUER !!</h1>
        </div>
        
        <div className='flex justify-center'>
            <img className='w-[300px] m-4 rounded-m' src="https://m.media-amazon.com/images/M/MV5BNTVlMGJmMTgtMzE0Ny00MmI0LTg1OTktZmY5N2EwZDY5ZWNmXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_FMjpg_UX1000_.jpg" alt="" />
            <img className='w-[300px] m-4 rounded-m' src="https://m.media-amazon.com/images/M/MV5BNTVlMGJmMTgtMzE0Ny00MmI0LTg1OTktZmY5N2EwZDY5ZWNmXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_FMjpg_UX1000_.jpg" alt="" />
            <img className='w-[300px] m-4 rounded-m' src="https://m.media-amazon.com/images/M/MV5BNTVlMGJmMTgtMzE0Ny00MmI0LTg1OTktZmY5N2EwZDY5ZWNmXkEyXkFqcGdeQXVyMjAwMzU2MDY@._V1_FMjpg_UX1000_.jpg" alt="" />
        </div>
    </div>
  )
}

export default IndexPage;