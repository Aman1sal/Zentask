import { groupNumber, ordersData } from '../../data';
import css from './Orders.module.css';
const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
            <img src="./logo.png" alt="logo" />
            <span>Order today</span>
        </div>

        <div className={`grey-conatiner ${css.stat}`}>
            <span>Amount</span>
            <span>${groupNumber(4650)}</span>
        </div>

        <div className={css.orders}>
            {
                ordersData.map((order, index)=>(
                    <div key={index} className={css.order}>
                        <div>
                            <span>{order.name}</span>
                            <span>{order.change}</span>
                        </div>
                        <div>
                            <span>{order.type}</span>
                            <span>Items: {order.items}</span>
                        </div>
                        </div>
                ))
            }
        </div>


    </div>
  )
}

export default Orders