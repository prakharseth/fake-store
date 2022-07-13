import Search from "./Search";
export default function Navbar({ search, searchValue }) {
  return (
    <nav className='text-black flex items-center p-4 px-10 shadow-lg justify-between'>
      <a href='/'>
        <div className='font-mitr text-3xl text-black'>Fake-Store</div>
      </a>
      {search && <Search searchValue={searchValue} />}
    </nav>
  );
}
