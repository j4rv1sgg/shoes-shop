import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import axios from "axios";

function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [cartOpened, setCartOpened] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        axios.get('https://6409ecabd16b1f3ed6e14668.mockapi.io/items').then(res =>{
            setItems(res.data)
        })
        axios.get('https://6409ecabd16b1f3ed6e14668.mockapi.io/cart').then(res =>{
            setCartItems(res.data)
        })
    }, []);


    const onAddToCart = (obj) => {
        //axios.post('https://6409ecabd16b1f3ed6e14668.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
    }

    const onRemoveItem = (id) =>{
        //axios.delete(`https://6409ecabd16b1f3ed6e14668.mockapi.io/cart/${id}`)
        setCartItems((prev) => prev.filter(item => item.id !== id))

    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}

            <Header onClickCart={() => setCartOpened(true)} />

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>{searchValue ? `Search by request "${searchValue}"` : "All shoes"}</h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search" />
                        {searchValue && <img className="clear cu-p" onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="Close"></img>}
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..." />
                    </div>
                </div>


                <div className="d-flex flex-wrap">
                    {items
                    .filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) =>
                        <Card
                            key={index}
                            title={item.name}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            onFavorite={() => console.log('favorite')}
                            onPlus={(obj) => onAddToCart(obj)} />

                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
