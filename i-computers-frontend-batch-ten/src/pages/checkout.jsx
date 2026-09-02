import { useState } from "react"
import { addToCart, getCart, getCartTotal } from "../utils/cart"
import getFormattedPrice from "../utils/price-format"
import { useLocation } from "react-router-dom"
import CreateOrderModal from "../components/createOrderModal"

export default function CheckoutPage(){
  const location=useLocation()
  const[cart,setCart] = useState(location.state)
    

  return(
    <div className="flex flex-col items-center w-full  min-h-full gap-4 p-5 pb-20">
      {
        cart.map(
          (item,index)=>{
            return(
              <div key={item.product.productId} className="bg-white w-[500px] h-[150px] rounded-lg shadow-2xl flex p-2 items-center relative">
                <img className="w-[100px] h-[100px] object-cover rounded-lg" src={item.product.image}/>

                <div className="h-full w-[400px] ">
                  <h1 className="text-lg font-semibold" >{item.product.name}</h1>
                  <p className="text-sm text-gray-500">{item.product.productId}</p>
                  {
                    item.product.labelledPrice > item.product.price && <span className="mt-2 text-sm text-gray-500 line-through">{getFormattedPrice(item.product.labelledPrice)}</span>
                  }
                  <p className="text-sm font-semibold text-accent">
                    {getFormattedPrice(item.product.price)}
                  </p>
                  <div className="w-[100px] h-[30px] mt-2 flex items-center gap-2">

                  </div>
                </div>
                <div className="w-[200px] h-full absolute right-2  flex flex-col justify-end items-end p-2">
                  <div className="w-[100px] h-[30px] border rounded-full flex items-center justify-between px-2">
                    <button className="text-xl font-bold cursor-pointer hover:text-accent"
                    onClick={
                      ()=>{
                        // addToCart(item.product,-1)
                        // setCart(getCart())
                        const newCart = [...cart]
                        newCart[index].quantity-=1
                        if(newCart[index].quantity<=0){
                          newCart.splice(index,1)
                        }
                        setCart(newCart)
                      }
                    }>-</button>
                    <span>{item.quantity}</span>
                    <button 
                    onClick={
                      ()=>{
                        // addToCart(item.product , 1)
                        // setCart(getCart())
                        const newCart = [...cart]
                        newCart[index].quantity+=1
                        
                        setCart(newCart)
                      }
                    } className="text-xl font-bold cursor-pointer hover:text-accent">+</button>


                  </div>

                  <p className="mt-2 text-xl"><span className="font-semibold text-secondary">{getFormattedPrice(item.product.price * item.quantity)}</span></p>
                </div>
              </div>
            )
          }
        )
      }
      
              <div className="bg-white border w-[500px]  rounded-t-lg shadow-2xl flex p-2 items-center justify-between fixed bottom-[20px]">
                <CreateOrderModal cart={cart}/>
                <p className="ml-4 text-xl font-bold">Total: {getFormattedPrice(getCartTotal(cart))}</p>
              </div>


    </div>
  )
}


