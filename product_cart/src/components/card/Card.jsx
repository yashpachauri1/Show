import classes from './card.module.css';
import cartImg from '../../assets/images/icon-add-to-cart.svg';

const Card = ({ listData, addToCartHandler }) => {
  return (
    <>
      {listData.map((item, index) => (
        <div key={index} className={classes.container}>
          <main>
            <img src={item.image} alt={item.name || "Product Image"} />
            <button onClick={() => addToCartHandler(item)}>
              <img src={cartImg} alt="Add to Cart" />
              <p>Add to Cart</p>
            </button>
          </main>
          <footer>
            <div className={classes.name}>
              <p>{item.category || "Category"}</p>
              <p className={classes.dark}>{item.name || "Product Name"}</p>
            </div>
            <p className={classes.price}>${item.price || "0.00"}</p>
          </footer>
        </div>
      ))}
    </>
  );
};

export default Card;
