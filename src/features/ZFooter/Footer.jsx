const Footer = () => {
  return (
    <>
      <section className='content-read'>
        <div className='about-us' id='about-us'>
          <h3>About Us</h3>
          <p>
            Welcome to Lifella Hairs Website! We are a dedicated team passionate about providing
            high-quality imported human hairs and blended wigs to our customers nationwide.
          </p>
          <div className='hidder' id='about'>
            <p>
              Our mission is to connect international manufacturers and suppliers with consumers in
              Nigeria, ensuring a seamless and efficient importation process.
            </p>

            <p>
              At Lifella, we understand the significance of accessing diverse hairs from various
              parts of Nigria. We aim to bridge the gap between global markets and local demand,
              bringing an extensive range of hair products right to your doorstep. Whether you are a
              retailer, wholesaler, or an individual looking for unique hair products, we've got you
              covered.
            </p>
            <p>
              What sets us apart is our commitment to excellence in sourcing, procurement, and
              distribution in a more cheaper rate. We collaborate with reputable manufacturers and
              suppliers globally, carefully selecting products that meet our stringent quality
              standards. Our experienced team conducts thorough research and due diligence to ensure
              that all hair products comply with international regulations and certifications.
            </p>
            <p>
              Our website serves as a one-stop destination for exploring a wide array of hair
              products. From Human hairs, Blended wigs, weavons to Children wigs, Synthetic hairs of
              diverse qualities and much more, we strive to offer a comprehensive range of items to
              cater to various customer needs and preferences. With our user-friendly interface and
              detailed product descriptions, you can easily browse, compare, and select the items
              that best suit your requirements.
            </p>
            <p>
              We prioritize customer satisfaction and make every effort to provide a seamless and
              hassle-free shopping experience. Our efficient logistics network enables us to handle
              importation and distribution efficiently, ensuring timely delivery of your orders. We
              take pride in our dedicated customer support team, ready to assist you with any
              inquiries, concerns, or assistance you may need throughout your shopping journey.
            </p>
            <p>
              As an ethically conscious company, we prioritize sustainable business practices. We
              actively seek eco-friendly products and suppliers who share our commitment to
              minimizing environmental impact. By choosing us as your importation and distribution
              partner, you contribute to a more sustainable future.
            </p>
            <p>
              We value the trust and loyalty of our customers and continually strive to improve our
              services. Your feedback and suggestions are invaluable to us as we continuously evolve
              to meet your expectations and deliver the best possible experience.
            </p>
            <p>
              Thank you for choosing us as your trusted partner in goods importation and
              distribution
            </p>
            <p>Welcome to a world of endless possibilities! Lifella Hair Team</p>
          </div>
          <button onclick="showAboutUs('about')">More</button>
          <button onclick="hideAboutUs('about')">Less</button>
        </div>
        <div className='contact-us' id='contact-us'>
          <h3>Contact Us</h3>
          <p>
            Thank you for your interest in our hair product. We value your feedback, inquiries, and
            suggestions. Please feel free to reach out to us using the following contact
            information:
          </p>
          <div className='hidder' id='contact'>
            <p>
              Customer Support: Phone: 08023613691 Whatsapp line Email: ellagift25@gmail.com Working
              Hours: Monday to Friday, 8:00 AM - 6:00 PM (GMT)
            </p>

            <p>
              Sales Inquiries: Phone: 09133570055 Email: ellagift25@gmail.com Working Hours: Monday
              to Saturday, 8:00 AM - 6:00 PM (GMT)
            </p>
            <p>General Inquiries: Email: info@lifella.com.ng</p>
            <p>
              We strive to provide prompt and efficient assistance to all our customers and
              visitors. Whether you have questions about our goods or need assistance with an order,
              our dedicated team is here to help.
            </p>
            <p>
              Please provide us with the necessary details related to your inquiry, such as your
              name, contact information, and a brief description of your request. This will help us
              understand your needs better and enable us to respond to you more effectively.
            </p>
            <p>We aim to respond to all inquiries within 24 to 48 hours, excluding weekends.</p>
            <p>
              Thank you once again for choosing us. We look forward to hearing from you and
              assisting you with your requirements.
            </p>
            <p>Best regards,</p>
            <p>Lifella Hairs Importation and Distribution enterpise</p>
          </div>
          <button onclick="contactUs('contact')">More</button>
          <button onclick="hideContact('contact')">Less</button>
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
            <i class='fa-brands fa-instagram' style='color: #367277;'></i> */}
          {/* </a> */}
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
