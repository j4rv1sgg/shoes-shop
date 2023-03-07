import './App.css';

function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2 className='mb-30'>Cart</h2>

                    <div className="items">
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: 'url(/img/shoes/1.jpg' }}
                                className='cartItemImg'>

                            </div>


                            <div className='mr-20 flex'>
                                <p className='mb-5'>Nike VapourMax 270</p>
                                <b>249$</b>
                            </div>
                            <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                        </div>

                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: 'url(/img/shoes/4.jpg' }}
                                className='cartItemImg'>

                            </div>


                            <div className='mr-20 flex'>
                                <p className='mb-5'>Nike VapourMax 270</p>
                                <b>249$</b>
                            </div>
                            <img className='removeBtn' src="/img/btn-remove.svg" alt="remove" />
                        </div>
                    </div>

                    <ul className='cardTotalBlock'>
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
                </div>
            </div>



            <header className='d-flex justify-between align-center p-40'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src="/img/logo.png" alt="logo" />
                    <div>
                        <h3 className='text-uppercase'>React sneacers</h3>
                        <p className='opacity-5'>The best shoes shop</p>
                    </div>
                </div>

                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img width={18} height={18} src="/img/cart.svg" alt="cart" />
                        <span>99 $</span>
                    </li>
                    <li>
                        <img width={18} height={18} src="/img/profile.svg" alt="user" />
                    </li>
                </ul>
            </header>

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>All shoes</h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Search..." />
                    </div>
                </div>

                <div className="d-flex">
                    <div className="cart">
                        <div className='favorite'>
                            <img src="/img/heart.svg" alt="Unliked" />
                        </div>
                        <img width={133} height={112} src="/img/shoes/1.jpg" />
                        <h5>Nike AirMax 435</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b> 299 $</b>
                            </div>
                        </div>

                        <button className='button'>
                            <img width={11} height={11} src="/img/btn-plus.svg" alt="+" />

                        </button>
                    </div>



                    <div className="cart">
                        <img width={133} height={112} src="/img/shoes/2.jpg" />
                        <h5>Nike AirMax 435</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b> 299 $</b>
                            </div>
                        </div>

                        <button className='button'>
                            <img width={11} height={11} src="/img/btn-plus.svg" alt="+" />

                        </button>
                    </div>



                    <div className="cart">
                        <img width={133} height={112} src="/img/shoes/3.jpg" />
                        <h5>Nike AirMax 435</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b> 299 $</b>
                            </div>
                        </div>

                        <button className='button'>
                            <img width={11} height={11} src="/img/btn-plus.svg" alt="+" />

                        </button>
                    </div>



                    <div className="cart">
                        <img width={133} height={112} src="/img/shoes/4.jpg" />
                        <h5>Nike AirMax 435</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Price:</span>
                                <b> 299 $</b>
                            </div>
                        </div>

                        <button className='button'>
                            <img width={11} height={11} src="/img/btn-plus.svg" alt="+" />

                        </button>
                    </div>

                </div>






            </div>
        </div>

    );
}

export default App;
