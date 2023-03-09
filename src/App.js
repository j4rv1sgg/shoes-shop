import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://6409ecabd16b1f3ed6e14668.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
            });
    }, []);

    const onAddToCart = (obj) =>{
        setCartItems([...cartItems, obj])
    }
    
    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items = {cartItems} onClose={() => setCartOpened(false)} />}

            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>All shoes</h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Search..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {items.map((item) =>
                        <Card
                            title={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={() => console.log('favorite')}
                            onPlus={(obj)=> onAddToCart(obj)} />

                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
