const Navbar = () => {
  return (
    <nav className="w-full h-90 bg-transparent absolute top-5 max-sm:hidden">
      <ul className="text-xl font-bold tracking-widest text-white uppercase flex gap-10 sm:ml-[7%]">
        <a href="#hero">
          <li className="hover:text-white">Home</li>
        </a>
        <a href="">
          <li className="hover:text-white">Products</li>
        </a>
        <a href="">
          <li className="hover:text-white">Contact us</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
