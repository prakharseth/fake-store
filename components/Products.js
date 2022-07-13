export default function Products({ img, title, price, slug }) {
  return (
    <a href={`/${slug}`}>
      <div className='text-black m-8 flex flex-col justify-center gap-3 items-center w-40 shadow-md rounded-xl'>
        <div className=' bg-[#f8f8f8] flex items-center justify-center h-40 mb-2'>
          <img src={img} width='120' alt='Bag' />
        </div>
        <div className=' font-mitr text-center '>{title.slice(0, 10)}...</div>
        <div className='font-mitr font-thin '>$ {price}</div>
      </div>
    </a>
  );
}

// https://fakeshope.vercel.app/_next/image?url=https%3A%2F%2Ffakestoreapi.com%2Fimg%2F81fPKd-2AYL._AC_SL1500_.jpg&w=1920&q=75
