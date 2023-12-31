import './cart.css'
import CartItem from'./cartitem'
import { useContext, useEffect } from "react";
import CartContext from "../../Store/CartContext"

const Cart =({onCartShow})=>{

const { items,totalAmount,fetchData,emptyCart } = useContext(CartContext);

useEffect(()=>{
    fetchData()
},[items])


const purchaseHandler=()=>{
    alert("Order Placed Successfully")
    emptyCart()
}
    return(
        <section id="cart" className="container" >
            <h2>CART</h2>
            <button className="cancel" onClick={onCartShow}>X</button>
            <div className="cart-header">
                <span className="cart-item">ITEM</span>
                <span className="cart-price">PRICE</span>
                <span className="cart-quantity">QUANTITY</span>
            </div>
            <div>
                {items.map((item,index)=>(
                    <CartItem item ={item} key={index} ></CartItem>
                ))}
            </div>
            <div className="cart-total">
                <span>
                    <span className="total-title"> Total
                        </span>
                    <span className="total-value">${totalAmount}</span>
                </span>
            </div>
            <button className="purchase-btn" type="button" onClick={purchaseHandler}>PURCHASE</button>
        </section>
    )
}
export default Cart;