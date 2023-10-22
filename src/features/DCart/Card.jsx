import './card.css'
import cart from '../../image/shopping.svg'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  closeCart,
  decreaseBtn,
  increaseBtn,
  openCart,
  removeItem,
} from '../../STORE/reducers/cartRedecer'

const Card = () => {
  const { total, counter, isOpen, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  let uniqueItem = [...new Set(sales)]

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
            <p>Quantity</p>
          </div>
          <div>
            {uniqueItem.map(({ name, image, id, price, count }) => (
              <div className='cardGroup' key={id}>
                <div className='listItems'>
                  <img src={image} alt={name} style={{ width: 70 }} />
                  <div className='details'>
                    <p>{name}</p>
                    <p className='gapping'>N {price.toLocaleString()}</p>
                    <button onClick={() => dispatch(removeItem(id))}>remove</button>
                  </div>
                </div>
                <div className='counter'>
                  <button onClick={() => dispatch(increaseBtn(id))}>+</button>
                  <p>{count}</p>
                  <button
                    onClick={() => {
                      if (count == 1) dispatch(removeItem(id))
                      else dispatch(decreaseBtn(id))
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className='total-amount'>Total</p>
          <div className='checkout'>
            <div className='final'>Payment</div>
            <div className='total'>N{total.toLocaleString()}</div>
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