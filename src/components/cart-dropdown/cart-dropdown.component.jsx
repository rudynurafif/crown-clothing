import React from 'react'
import Button from '../buttton/button.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown
