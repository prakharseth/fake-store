import { BiSearchAlt } from "react-icons/Bi";
export default function Search({ searchValue }) {
  return (
    <div className='border border-gray-600 rounded-lg flex items-center justify-center w-96'>
      <input
        onChange={searchValue}
        type='text'
        placeholder='Search here'
        className=' bg-inherit flex mb-2 w-full px-2 outline-none placeholder:text-gray-400 placeholder:text-sm text-black font-thin my-2 text-md font-mitr'
      ></input>
      <BiSearchAlt className='text-xl m-2' />
    </div>
  );
}
