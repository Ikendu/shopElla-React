import './footer.css'
import { Suspense, lazy, useState } from 'react'
const SuspenseAbout = lazy(() => import('./AboutUs'))
const SuspenseContact = lazy(() => import('./ContactUs'))

const Footer = () => {
  const [show, setShow] = useState(false)
  const [showContact, setShowContact] = useState(false)
  return (
    <>
      <section className='content-read'>
        <div className='about-us' id='about-us'>
          <h3>About Us</h3>
          <p>
            Welcome to Lifella Hairs Website! We are a dedicated team passionate about providing
            high-quality imported human hairs and blended wigs to our customers nationwide.
          </p>
          <Suspense fallback={<h3>Loading more About us...</h3>}>
            {show && <SuspenseAbout />}
          </Suspense>

          <button onClick={show ? () => setShow(false) : () => setShow(true)}>
            {show ? `Less` : `More`}
          </button>
        </div>
        <div className='contact-us' id='contact-us'>
          <h3>Contact Us</h3>
          <p>
            Thank you for your interest in our hair product. We value your feedback, inquiries, and
            suggestions. Please feel free to reach out to us using the following contact
            information:
          </p>
          <Suspense fallback={<h3>Loading...</h3>}>{showContact && <SuspenseContact />}</Suspense>

          <button onClick={showContact ? () => setShowContact(false) : () => setShowContact(true)}>
            {showContact ? `Less` : `More`}
          </button>
        </div>
      </section>
      <footer>
        <p>Copyright 2023 © Lifella hair Importers. All rights reserved</p>
        <div className='last-social'>
          {/* <a href='https://web.facebook.com/Gift.Onyinyechi101' target='_blank'>
            <i className='fa-brands fa-facebook' style='color: #367277;'></i>
          </a>
          <a href='https://wa.me/+2348023613691' target='_blank'>
            <i className='fa-brands fa-whatsapp' style='color: #367277;'></i>
          </a>
          <a href='https://instagram.com/Onitsha_price_hair_store' target='_blank'>
            <i class='fa-brands fa-instagram' style='color: #367277;'></i> 
           </a> */}
        </div>
        <p>Privacy Policies</p>
        <p className='developer'>
          Developed and Managed by Ikendu Lifes
          <span className='devnum'>+2348061632276</span>
          <span className='devreg'>CAC Reg: 4133480</span>
        </p>
      </footer>
    </>
  )
}

export default Footer
