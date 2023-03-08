import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

const arr = [
    { name: 'Nike Air Max 97', price: 175, imageUrl: '/img/shoes/2.jpg' },
    { name: 'Puma Low Retro', price: 110, imageUrl: '/img/shoes/3.jpg' },
    { name: 'Nike Air Max 270', price: 150, imageUrl: '/img/shoes/4.jpg' },
    { name: 'Nike Pegasus 39', price: 120, imageUrl: '/img/shoes/5.jpg' }
]

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />

            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>All shoes</h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder="Search..." />
                    </div>
                </div>

                <div className="d-flex">
                    {arr.map((obj) =>
                        <Card
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onClick={()=>console.log("fsdf")} />

                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
