import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { BsStarFill } from "react-icons/bs";

export default function Product({ data }) {
  console.log(data);
  return (
    <Layout>
      <Navbar />
      <div className='flex justify-center gap-4 md:gap-28 flex-col items-center pt-6 md:flex-row'>
        <div className='w-64 flex items-center justify-center bg-[#f8f8f8]'>
          <img src={data.image} alt='' />
        </div>
        <div className='w-60 md:w-96 px-2 md:px-0 md:96 flex flex-col gap-2 font-mitr font-light '>
          <div className=' text-xl font-medium'>{data.title}</div>
          <div className='capitalize'>{data.category}</div>
          <div className='flex items-center'>
            <div>{data.rating.rate}</div>
            <BsStarFill className='text-yellow-400 ml-1' />
            <div className='ml-4'>{data.rating.count} Rating </div>
          </div>
          <div>$ {data.price}</div>
          <div>{data.description} </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/ ${params.id}`);
  const data = await res.json();
  return {
    props: { data },
  };
}
