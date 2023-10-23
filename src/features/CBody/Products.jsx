import { items } from './items'

import './body.css'

import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { addItems } from '../../STORE/reducers/cartRedecer'

const Products = () => {
  const { products } = useSelector((state) => state.cart)

  return (
    <div className='container'>
      <header>
        <h2>Products on sale</h2>
      </header>
      <section className='list'>
        {products.map((items) => (
          <Display {...items} key={items.id} />
        ))}
      </section>
    </div>
  )
}

const Display = ({ image, name, price, id }) => {
  const dispatch = useDispatch()
  return (
    <div className='item' key={id}>
      <img src={image} alt={name} />
      <p className='title'>{name}</p>
      <p>N {price.toLocaleString()}</p>
      <button onClick={() => dispatch(addItems({ id }))}>Add to Cart</button>
    </div>
  )
}
export default Products
