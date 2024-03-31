import './Header.scss';
import { useEffect, useState } from 'react';
import { TbSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className='header-content'>
        <div className='logo'>HamzaDevStore</div>
        <ul className='nav-links'>
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className='nav-icons'>
          <TbSearch />
          <AiOutlineHeart />
          <span className='cart-icon'>
            <CgShoppingCart />
            <span>12</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
