import Card from "../card/Card";
import waffle from '../../assets/images/image-waffle-desktop.jpg'
import creme from '../../assets/images/image-creme-brulee-desktop.jpg'
import baklava from '../../assets/images/image-baklava-desktop.jpg'
import brownie from '../../assets/images/image-brownie-desktop.jpg'
import cake from '../../assets/images/image-cake-desktop.jpg'
import tiramisu from '../../assets/images/image-tiramisu-desktop.jpg'
import macaron from '../../assets/images/image-macaron-desktop.jpg'
import meringue from '../../assets/images/image-meringue-desktop.jpg'
import panna from '../../assets/images/image-panna-cotta-desktop.jpg'

import CartContext from "../../store/CartContext";
import { useContext } from "react";

const desserts = [
  { id: 1, name: "Waffle with Berries", type: "Waffle", price: 6.50, image: waffle},
  { id: 2, name: "Vanilla Bean Crème Brûlée", type: "Crème Brûlée", price: 7.00, image: creme },
  { id: 3, name: "Macaron Mix of Five", type: "Macaron", price: 8.00, image: macaron },
  { id: 4, name: "Classic Tiramisu", type: "Tiramisu", price: 5.50, image: tiramisu },
  { id: 5, name: "Pistachio Baklava", type: "Baklava", price: 4.00, image: baklava },
  { id: 6, name: "Lemon Meringue Pie", type: "Pie", price: 5.00, image: meringue},
  { id: 7, name: "Red Velvet Cake", type: "Cake", price: 4.50, image: cake },
  { id: 8, name: "Salted Caramel Brownie", type: "Brownie", price: 4.50, image: brownie},
  { id: 9, name: "Vanilla Panna Cotta", type: "Panna Cotta", price: 6.50, image: panna}
];

  
const List = () =>{
 
  const {addItemToCart} =useContext(CartContext);

    return(
     
         <Card listData ={desserts} addToCartHandler={addItemToCart}/>
      
      
    )
}

export default List;