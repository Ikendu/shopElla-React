import './body.css'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addItems, addToCart, increaseBtn, productAdd } from '../../STORE/reducers/cartRedecer'

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

const Display = ({ image, name, price, id, added, count }) => {
  const dispatch = useDispatch()
  const { sales } = useSelector((state) => state.cart)

  return (
    <div className='item' key={id}>
      <img src={image} alt={name} />
      <p className='title'>{name}</p>
      <p>N {price.toLocaleString()}</p>
      {!added ? (
        <button
          onClick={() => {
            dispatch(addItems({ id }))
            dispatch(productAdd({ id }))
          }}
        >
          <span>Add to Cart</span>
        </button>
      ) : (
        <>
          <button onClick={() => dispatch(increaseBtn(id))} className='plus'>
            +
          </button>
          <button
            className='adderBtn'
            onClick={() => {
              dispatch(addToCart({ id }))
            }}
          >
            {count}
          </button>
          <button className='plus'>-</button>
        </>
      )}
    </div>
  )
}
export default Products
