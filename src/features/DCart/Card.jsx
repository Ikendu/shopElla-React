import './card.css'
import { CartIcon } from '../ICON/CartIcon'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
  addBtn,
  closeCart,
  decreaseBtn,
  increaseBtn,
  openCart,
  reduceBtn,
  removeItem,
} from '../../STORE/reducers/cartRedecer'
import { openModel } from '../../STORE/reducers/modalReducer'

const Card = () => {
  const { total, counter, isOpen, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <div className='shopping' onClick={() => dispatch(openCart())}>
        <CartIcon />
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
            {sales.map(({ name, image, id, price, count }) => (
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
                  <button
                    onClick={() => {
                      dispatch(increaseBtn(id))
                      dispatch(addBtn(id))
                    }}
                  >
                    +
                  </button>
                  <p>{count}</p>
                  <button
                    onClick={() => {
                      if (count == 1) dispatch(removeItem(id))
                      else {
                        dispatch(decreaseBtn(id))
                        dispatch(reduceBtn(id))
                      }
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
            <div className='final' onClick={() => dispatch(openModel())}>
              Pay here
            </div>
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
