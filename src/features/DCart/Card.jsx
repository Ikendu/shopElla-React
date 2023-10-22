import './card.css'
import cart from '../../image/shopping.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { closeCart, openCart } from '../../STORE/reducers/cartRedecer'

const Card = () => {
  const { total, counter, isOpen, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <div className='shopping' onClick={() => dispatch(openCart())}>
        <img src={cart} alt='shopping' />
        <span>{counter}</span>
        <p>Open</p>
      </div>
      {isOpen && (
        <div className='card-shopping'>
          <div className='card-header'>
            <h2>Selections</h2>
            <h3>Happy Shopping</h3>
          </div>
          <div className='heading'>
            <p>Items</p>
            <p>Price</p>
            <p>Quantity</p>
          </div>
          <div>
            {sales.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <p className='total-amount'>Total</p>
          <div className='checkout'>
            <div className='final'>Payment</div>
            <div className='total'>{total}</div>
            <div className='closeShopping' onClick={() => dispatch(closeCart())}>
              Minimize
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Card
