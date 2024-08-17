import Cart from "../cart/Cart"
import List from "../list/List"
import './container.css'
const Container = () =>{

    return(
        <div className="content">
            <main className="content-main">
                <h1>Desserts</h1>
                <div className="card-list">
                    <List/>
                </div>
            </main>
            <div className="cart">
                <Cart/>
            </div>
        </div>
    )
}

export default Container