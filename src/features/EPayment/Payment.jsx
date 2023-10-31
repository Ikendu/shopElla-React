import { closeModel } from '../../STORE/reducers/modalReducer'
import './payment.css'
import { useDispatch, useSelector } from 'react-redux'
const Payment = () => {
  const { total, sales } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='modal-container'>
      <div className='modal'>
        <button onClick={() => dispatch(closeModel())}>Back to Shopping</button>
        <h2>Your Purchase Details</h2>
        <div className='summary'>
          <table className='table'>
            <caption className='preview'>Preview Selection</caption>
            <tr>
              <th>Modal</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
            {sales.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td> {item.price}</td>
                <td>{item.count}</td>
                <td> {(item.price * item.count).toLocaleString()}</td>
              </tr>
            ))}
          </table>
          <div className='heading-item'></div>
        </div>
        <h3 className='price'>Total Amount: N{total.toLocaleString()}</h3>

        <h2>Payment Details</h2>
        <div className='account'>
          <p>You can complete your payment using Mobile Transfer, POS or Bank deposite.</p>
          <h3>Name: Idoko Gift Onyinyechi</h3>
          <h3>Account No: 3121077326</h3>
          <h3>Bank name: First Bank</h3>
        </div>

        <p>
          After payment send prove of payment and Preview Selection to 08023613691 through Whatsap
          for comfirmation and subsequent packaging of your items
        </p>
        <p>email: ellagift25@gmail.com</p>
        <h3>Thank you for your patronage we look forward to seeing you again</h3>
        <button onClick={() => dispatch(closeModel())}>Back to Shopping</button>
      </div>
    </div>
  )
}
export default Payment
