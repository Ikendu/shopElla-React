import './header.css'

import shopIcon from '../ICON/shopIcon3.jpg'
const Navbar = () => {
  return (
    <header className='top'>
      <div className='logo'>
        <a href='#'>
          <img src={shopIcon} className='icon' alt='logo' />
          <p className='name'>Lifella</p>
        </a>
      </div>
      <nav className='content' id='content'>
        <ul className='lists' id='bar'>
          <a href='#'>
            <li>Home</li>
          </a>
          <a href='#products'>
            <li>Produts</li>
          </a>
          <a href='#social'>
            <li>Social Media</li>
          </a>
          <a href='#about-us'>
            <li>About us</li>
          </a>
          <a href='#contact-us'>
            <li>Contact us</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}
export default Navbar
