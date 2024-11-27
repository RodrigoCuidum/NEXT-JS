import Link from 'next/link'

function Navbar() {
  return (
    <nav className='bg-pink-600 text-black mb-4 flex justify-between item-center px-20 p-3 font-bold'>
      <Link href='/' className='hover:text-white'>Home</Link>

      <ul>
        <li>
          <Link href='/about' className='hover:text-white'>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
