function Drawer({items = [], onClose}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30 cu-p'> Cart <img className='removeBtn' onClick={onClose} src="/img/btn-remove.svg" alt="remove" /></h2>

                <div className='items'>
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
                            <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                        </div>
                    ))}

                </div>

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
                    <button className='greenButton'>Confirm order <img src="img/arrow.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
}
export default Drawer;




