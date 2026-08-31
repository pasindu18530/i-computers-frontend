import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import api from "../utils/api"
import toast from "react-hot-toast"
import LoadingAnimation from "../components/loadingAnimation"
import ImageSlideShow from "../components/imageSlideShow"
import getFormattedPrice from "../utils/price-format"

export default function ProductOverviewPage(){
  const parameters = useParams()
  const navigate = useNavigate()
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

          <div className="w-1/2 h-full border flex justify-center items-center ">
              <ImageSlideShow images={product.images}/>
          </div>
          <div className="w-1/2 h-full border flex flex-col p-5">
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
              <span className="text-sm text-gray-500 line-through ml-4">
                {
                  getFormattedPrice(product.labelledPrice)
                }
              </span>
            }

          </div>
          </div>

        </div>
      }



    </div>
  )
}