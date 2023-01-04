import "./Styles/cartwidget.css"
function CartWidget() {
  return (
    <div className="cart-widget">
      <i class="bi bi-cart"></i>
      <div className="qty-display">0</div>
    </div>
  )
}

export default CartWidget