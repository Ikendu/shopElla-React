import './body.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addItems } from '../../STORE/reducers/cartRedecer'
import { useState } from 'react'

const Products = () => {
  const { products } = useSelector((state) => state.cart)

  return (
    <div className='container'>
      <div className='heading-product' id='products'>
        <h2>Current Products on Sale</h2>
      </div>
      <section className='list'>
        {products.map((items) => (
          <Display {...items} key={items.id} />
        ))}
      </section>
    </div>
  )
}

const Display = ({ image, name, price, id }) => {
  let [count, setCount] = useState(0)
  const dispatch = useDispatch()

  const plusCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='item' key={id}>
      <img src={image} alt={name} />
      <p className='title'>{name}</p>
      <p>N {price.toLocaleString()}</p>
      <button
        onClick={
          (plusCount(),
          () => {
            return dispatch(addItems({ id }))
          })
        }
      >
        <span>{count < 1 ? `Add to Cart` : count}</span>
      </button>
    </div>
  )
}
export default Products
