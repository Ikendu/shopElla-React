import { closeModel } from '../../STORE/reducers/modalReducer'
import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
const Payment = () => {
  const { total, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='modal-container'>
      <div className='modal'>
        <h2>Your purchase details</h2>
        <div className='summary'>
          <div>
            <p>name</p>
            <p>price</p>
            <p>count</p>
            <p>amount</p>
          </div>
          {sales.map((item) => (
            <div className='each-details' key={item.id}>
              <span className='name-item'>{item.name}</span>
              <span className='price-item'> {item.price}</span>
              <span className='count-item'>{item.count}</span>
              <span> {item.price * item.count}</span>
            </div>
          ))}
        </div>
        <h3 className='price'>Total Amount: {total}</h3>

        <h2>Payment Details</h2>
        <div className='account'>
          <p>You can complete your payment using Mobile Transfer, POS or Bank deposite.</p>
          <p>Account Details</p>
          <h3>Name: Idoko Gift Onyinyechi</h3>
          <h3>Account No: 3121077326</h3>
          <h3>Bank name: First Bank</h3>
        </div>

        <p>After payment is completed, send prove of payment to +2348023613691 through Whatsap</p>
        <p>Your can also call the above number or send us email through ellagift25@gmail.com</p>
        <h3>Thank you for your patronage we look forward to seeing you again</h3>
        <button onClick={() => dispatch(closeModel())}>Back to Page</button>
      </div>
    </div>
  )
}
export default Payment
