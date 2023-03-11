function Drawer({items = [], onClose, onRemove}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30 cu-p'> Cart <img className='removeBtn' onClick={onClose} src="/img/btn-remove.svg" alt="remove" /></h2>

                {
                    items.length > 0 ? <div className='items'>
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                className='cartItemImg'>
                            </div>


                            <div className='mr-20 flex'>
                                <p className='mb-5'>{obj.title}</p>
                                <b>${obj.price}</b>
                            </div>
                            <img className='removeBtn' onClick={()=>onRemove(obj.id)} src="/img/btn-remove.svg" alt="remove" />
                        </div>
                    ))}

                </div> : <div class="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img calss="mb-20" width="120px" height="120px" src="/img/empty-cart.jpg" alt="empty cart" />
                    <h2>Cart is empty</h2>
                    <p class="opacity-6">Add at least one item</p>
                    <button class="greenButton">
                        <img src="/img/arrow.svg" alt="arrow" />
                        Back to shopping
                    </button>
                </div>
                }
                

                

                <div className="cartTotalBlock ">
                    <ul>
                        <li className='d-flex'>
                            <span>Summary: </span>
                            <div></div>
                            <b>754$</b>
                        </li>
                        <li className='d-flex'>
                            <span>TAX 23%</span>
                            <div></div>
                            <b> 38$</b>
                        </li>
                    </ul>
    
                    <button className='greenButton' onClick={()=>console.log(items)}>Confirm order <img src="img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;




