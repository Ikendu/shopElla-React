import display from '../../image/100.jpg'

const FrontPage = () => {
  return (
    <main>
      <div className='trans'></div>
      <div className='front-page'>
        <h1 className='glamore'>Glamour fit</h1>
        <div className='write'>
          <p className='head-write'>Tell us your budget and we give you the best for it </p>
          <p className='more-write'>
            We are here to grace your looks and bring out the glamour, elegance and beauty in you.
            your awesome look is our concern. We also considers your budget as we bring to you
            quality hairs of different flavors. Our customers satisfaction is our main focus
            <a href='#products'>
              <button>Take a look</button>
            </a>
          </p>
        </div>
      </div>
      <img src={display} alt='display image' />
    </main>
  )
}
export default FrontPage
