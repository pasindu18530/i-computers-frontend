import { useEffect, useState } from "react"
import { Link,useParams } from "react-router-dom"
import api from "../utils/api"
import toast from "react-hot-toast"
import LoadingAnimation from "../components/loadingAnimation"
import ImageSlideShow from "../components/imageSlideShow"
import getFormattedPrice from "../utils/price-format"
import { addToCart, getCart } from "../utils/cart"

export default function ProductOverviewPage(){
  const parameters = useParams()
  const[product,setproduct] = useState(null)
  const [status, setStatus] = useState("loading")
  
  useEffect(
    ()=>{
      api.get("/products/" + parameters.productId).then(
         (response)=>{
          console.log(response.data);
          setproduct(response.data)
          setStatus("success")
          
         }
      ).catch(
        (error)=>{
        toast.error(error?.response?.data?.message || "An error occured while fetching product details.")

        setStatus("error")
      }
    
  )

},[]
  )


  
  
  return(
    <div className="w-full h-full flex justify-center items-center">
      {
        status == "loading" && <LoadingAnimation/>
      }

      {
        status == "error" && <div className="w-full h-[300px] flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Failed to load product details.</h1>
          <Link to="/products" className="px-4 py-2 bg-primary text-white rounded">Back to Products</Link>
        </div>
      }

       {
        status == "success" && <div className="w-full h-full flex">

          <div className="w-1/2 h-full  flex justify-center items-center ">
              <ImageSlideShow images={product.images}/>
          </div>
          <div className="w-1/2 h-full flex flex-col p-5">
          <h1 className="text-3xl font-bold">{product.name}
            {product.altNames.map(
              (alternativeName,index)=>{
                return(
                  <span key={index} className="text-gray-500"> | {alternativeName}</span>
                )
              }
            )}
          </h1>

          <h2 className="text-sm text-gray-500 mt-5">{product.productId}</h2>
          <div className="w-full mt-5 flex flex-col ">
            <p className="text-accent font-semibold text-4xl">
            {
              getFormattedPrice(product.price)
            }

            
            </p>

            {
              product.labelledPrice > product.price && 
              <span className="text-xl text-gray-500 line-through">
                {
                  getFormattedPrice(product.labelledPrice)
                }
              </span>
            }

            <div className="w-full mt-5 flex gap-10">
              <span className="text-lg text-gray-500">{product.brand}</span>
              <span className="text-lg text-gray-500">{product.model}</span>
            </div>

            <div className="w-full mt-5 flex gap-10">
              <span className="text-lg text-gray-500">{product.category}</span>
            </div>

            <p className="text-lg mt-5">
                {
                  product.description
                }
            </p>
            <div className="flex mt-5 gap-5">

            <button className="w-62.5 h-16.5 bg-green-500 text-white text-xl font-semibold rounded-lg cursor-pointer hover:bg-green-700 transition-colors duration-300 " onClick={
              ()=>{
                addToCart(product,1)
              }
            }>Add to cart</button>
            <button onClick={
              ()=>{
                // localStorage.removeItem("cart")
                console.log(getCart());
                
              }
            } className="w-62.5 h-16.5 bg-green-500 text-white text-xl font-semibold rounded-lg cursor-pointer hover:bg-blue-700 transition-colors duration-300-62.5 h-16.5 bg-blue-500">Buy now</button>

                </div>
          </div>
          </div>

        </div>
      }



    </div>
  )
}