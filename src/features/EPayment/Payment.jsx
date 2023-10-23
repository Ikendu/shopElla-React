import { closeModel } from '../../STORE/reducers/modalReducer'
import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
const Payment = () => {
  const { total, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  let uniqueItem = [...new Set(sales)]

  return (
    <div className='modal-container'>
      <div className='modal'>
        <h2>Your purchase details</h2>
        <div className='summary'>
          {uniqueItem.map((item) => (
            <div className='each-details' key={item.id}>
              <span>{item.name}</span>
              <span> {item.price}</span>
              <span> {item.price * item.count}</span>
            </div>
          ))}
        </div>

        <h3>Total Price: {total}</h3>
        <h2>Payment Details</h2>
        <p>You can complete your payment using Mobile Transfer, POS or Bank deposite.</p>

        <p>Account Details</p>
        <h3>Name: Idoko Gift Onyinyechi</h3>
        <h3>Account No. 3121077326</h3>
        <h3>Bank name: First Bank</h3>

        <p>After payment is completed, send prove of payment to +2348023613691 through Whatsap</p>
        <p>Your can also call the above number or send us email through ellagift25@gmail.com</p>
        <h3>Thank you for your patronage we look forward to seeing you again</h3>
        <button onClick={() => dispatch(closeModel())}>Back to Page</button>
      </div>
    </div>
  )
}
export default Payment
