import React from 'react'
import Sidebar from '../components/Cart/Sidebar';
import Courses from '../components/Cart/Courses';
import Webinars from '../components/Cart/Webinars';
import { useSnapshot } from 'valtio';
import CartProxy from '../proxy/CartProxy';

const Cart = () => {

    const CartInfo = useSnapshot(CartProxy);
    
    const conditionalRender = () => {
        if (CartInfo.Courses) {
            return (
                <Courses />
            )
        }
        else if (CartInfo.Webinars) {
            return (
                <Webinars />
            )
        }
        else {
            return ;
        }
    }
  return (
    <div className='flex'>
        <Sidebar />
        <React.Fragment>
            {conditionalRender()}
        </React.Fragment>
    </div>
  )
}

export default Cart