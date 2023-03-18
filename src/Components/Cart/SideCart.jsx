import { useState } from "react";
import './SideCart.css'
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import CartItem from "./CartItem";
function SideCart(props) {
  // let teas = [
  //   { id: 1, name: "Мистер Пропер", cost: "430₽/унция", img: "./img/supplies-1.png" },
  //   { id: 2, name: "Негр обыкновенный", cost: "755₽/унция", img: "./img/supplies-2.png" },
  //   { id: 3, name: "Негр необыновенный", cost: "800₽/унция", img: "./img/supplies-3.png" },
  //   { id: 4, name: "АК-46 без магазина", cost: "210₽/унция", img: "./img/supplies-4.png" },
  // ]


  const [Value, setValue] = useState(0)
  const [Value1, setValue1] = useState(0)
  const [gold, setNewPage] = useState(false)
  // props.cart.map

  let cards =props.cart.map(tea => {
    return   <><CartItem cost={tea.cost} name={tea.name} img={tea.img}/></>
    
    
   
  })
  


  let message;
  if (gold) {


  }
  let styleOverflow = {}
  let styleSideBlock = {}
  if (props.openCart === true) {
    styleOverflow = { width: "100%" };
    styleSideBlock = { width: "385px" };

  } else {
    styleOverflow = { width: "0" }
    styleSideBlock = { width: "0" }
  }
  let sumn=0

  for(let i = 0; i < props.cart.length; i++){
    sumn += Number(props.cart[i]['cost']) 
  }


  let content = gold ? <div className="CartItems" id="puki">
    <div className="CartItem" id="kaki">
      <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Вернуться назад</Button>
      <h6 style={{ marginTop: "10px" }}>Ваш заказ #пошелвон скоро будет передан курьеру и привезен с огромной скоростью,ведь курьер петушара
      </h6>
      <h2 style={{ marginTop: "10px" }}>Заказ имеется у нас в наличие!</h2>
      <img src="zen_1_3.jpg" id="zabiyki" />

    </div>
  </div> : <div><Stack direction="horizontal" gap={3} id="topCart">
    <div className="element" id="poleno"><h1>Корзина Вашего Творога</h1></div>
    <div className="element ms-auto"><img src="img/CloseButton.svg" onClick={() => props.onOpenCart(!props.openCart)} /></div>
  </Stack>
    <div className="CartItems">
      { cards}
    </div>
    
    <div className="pizdec">
      <div className="content">
        <h4>Итого: ............... {sumn}</h4>
        <h4>Налог 10%: ..............{Math.round(sumn * 10/100)}</h4>
        <Button variant="outline-light" id="cool" onClick={() => setNewPage(!gold)}>Оформить заказ</Button>
      </div>
    </div>

  </div>



  return <div className="MainCart">
    <div className="Overflow" style={styleOverflow} onClick={() => props.onOpenCart(!props.openCart)}></div>
    <div className="SideBlock" style={styleSideBlock}>


      {content}


    </div>
  </div>


    ;

}

export default SideCart;
