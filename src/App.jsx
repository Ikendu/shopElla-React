import { useEffect } from 'react'
import Products from './features/CBody/Products'
import Card from './features/DCart/Card'
import { useDispatch, useSelector } from 'react-redux'
import { calculate } from './STORE/reducers/cartRedecer'
import Payment from './features/EPayment/Payment'
import Navbar from './features/AHeader/Navbar'
import FrontPage from './features/AHeader/FrontPage'

const App = () => {
  const { sales } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculate())
  }, [sales])

  return (
    <>
      <div>
        <Navbar />
        <FrontPage />
        {isOpen && <Payment />}
        <Card />
        <Products />
      </div>
    </>
  )
}

export default App
