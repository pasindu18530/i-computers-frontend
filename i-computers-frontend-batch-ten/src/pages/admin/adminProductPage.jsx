// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";

import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"



// export default function AdminProductPage() {

//   const [products,setProducts] = useState([])

//   useEffect(
//     ()=>{
//       const token = localStorage.getItem("token")

//   axios.get(import.meta.env.VITE_API_URL+"/products",{
//     headers:{
//       "Authorization" : "Bearer "+ token
//     }
//   }).then(
//     (response)=>{
//       setProducts(response.data)
//     }
//   ).catch(
//       (error)=>{
//         console.log(error);
        
//       }
//     )

//     },[]
//   )

  
  

//   return (
//     <div className="w-full h-full overflow-y-scroll p-5">

//      <div className="sticky top-0 w-full h-[100px] rounded-lg  bg-accent text-white flex items-center p-5 justify-between shadow-2xl ">
//         <h1 className="text-2xl font-semibold mb-4">Products</h1>
//         </div>


//       <table className="mt-5 w-full text-secondary ">
//         <thead className="bg-accent/15  text-white ">
//           <tr>
//             <th className="text-center border border-primary p-4 ">Image</th>
//             <th className="text-center border border-primary p-4 ">Product ID</th>
//             <th className="text-center border border-primary p-4 ">Name</th>
//             <th className="text-center border border-primary p-4 ">Price</th>
//             <th className="text-center border border-primary p-4 ">Labelled Price</th>
//             <th className="text-center border border-primary p-4 ">Brand</th>
//             <th className="text-center border border-primary p-4 ">Model</th>
//             <th className="text-center border border-primary p-4 ">Category</th>
//             <th className="text-center border border-primary p-4 ">Model</th>
//             <th className="text-center border border-primary p-4 ">Availability</th>
//             <th className="text-center border border-primary p-4 ">Stock</th>
//           </tr>
//         </thead>

//         <tbody>
          
//           {
//             products.map(
//               (item)=>{
//                 return(
//                   <tr className="odd:bg-gray-600 even:bg-primary odd:text-white border-t-4 border-primary hover:bg-accent/45" key={item.productId}>
//                     <td className="p-2 ">
//                       <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-full" />

//                     </td>
//                     <td className="text-center text-wrap p-2">{item.productId}</td>
//                     <td className="text-center text-wrap p-2">{item.name}</td>
//                     <td className="text-center text-wrap p-2">{item.price}</td>
//                     <td className="text-center text-wrap p-2">{item.labelledPrice}</td>
//                     <td className="text-center text-wrap p-2">{item.brand}</td>
//                     <td className="text-center text-wrap p-2">{item.model}</td>
//                     <td className="text-center text-wrap p-2">{item.category}</td>
//                     <td className="text-center text-wrap p-2"></td>
//                     <td className="text-center text-wrap p-2">{item.stock}</td>
//                   </tr>
//                 )
//               }
//             )
//           }
          

          

//         </tbody>
//       </table>
//       <Link
//         to="/admin/add-product"
//         className="fixed bottom-2 right-2 w-[60px] h-[60px] bg-accent flex justify-center items-center text-white text-2xl rounded-full shadow-lg hover:bg-black hover:text-accent "
//       >
//         <FaPlus />
//       </Link>
//     </div>
//   );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";



export default function AdminProductPage() {

  const [products,setProducts] = useState([])

  useEffect(
    ()=>{
      const token = localStorage.getItem("token")

  axios.get(import.meta.env.VITE_API_URL+"/products",{
    headers:{
      "Authorization" : "Bearer "+ token
    }
  }).then(
    (response)=>{
      setProducts(response.data)
    }
  ).catch(
      (error)=>{
        console.log(error);
        
      }
    )

    },[]
  )


return (
  <div className="w-full h-full overflow-y-scroll bg-primary p-5 md:p-7">

    {/* Page Header */}
    <div className="sticky top-0 z-20 mb-6">
      <div className="w-full min-h-[95px] rounded-2xl bg-accent text-white flex items-center justify-between px-6 md:px-8 shadow-xl">

        <div>
          <p className="text-sm text-white/70 mb-1">
            Admin Dashboard
          </p>

          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Products
          </h1>

          <p className="text-sm text-white/70 mt-1">
            Manage your computer shop products
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm">
            <p className="text-xs text-white/60">
              Total Products
            </p>

            <p className="text-xl font-bold">
              {products.length}
            </p>
          </div>
        </div>

      </div>
    </div>


    {/* Products Table Card */}
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">

      {/* Table Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-secondary">
            Product Inventory
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            View and manage all available products
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Live Inventory
        </div>

      </div>


      {/* Responsive Table */}
      <div className="overflow-x-auto">

        <table className="w-full min-w-[1100px] text-secondary">

          <thead className="bg-secondary">

            <tr>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Image
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Product ID
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Product
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Price
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Labelled Price
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Brand
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Model
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Category
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Status
              </th>

              <th className="text-left text-xs uppercase tracking-wider font-semibold text-white/80 px-5 py-4">
                Stock
              </th>

            </tr>

          </thead>


          <tbody className="divide-y divide-gray-100">

            {
              products.map(
                (item) => {

                  return (

                    <tr
                      key={item.productId}
                      className="group hover:bg-purple-50/60 transition-all duration-200"
                    >

                      {/* Image */}
                      <td className="px-5 py-4">

                        <div className="w-16 h-16 rounded-xl bg-gray-100 border border-gray-200 p-1 flex items-center justify-center overflow-hidden group-hover:border-accent/40 transition">

                          <img
                            src={item.images[0]}
                            alt={item.name}
                            className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />

                        </div>

                      </td>


                      {/* Product ID */}
                      <td className="px-5 py-4">

                        <span className="font-mono text-xs font-semibold bg-gray-100 text-secondary px-3 py-1.5 rounded-lg">
                          {item.productId}
                        </span>

                      </td>


                      {/* Product Name */}
                      <td className="px-5 py-4">

                        <div className="max-w-[220px]">

                          <p className="font-semibold text-secondary truncate">
                            {item.name}
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Computer Product
                          </p>

                        </div>

                      </td>


                      {/* Price */}
                      <td className="px-5 py-4">

                        <span className="font-bold text-accent">
                          LKR {item.price?.toLocaleString()}
                        </span>

                      </td>


                      {/* Labelled Price */}
                      <td className="px-5 py-4">

                        <span className="text-sm text-gray-500 line-through">
                          LKR {item.labelledPrice?.toLocaleString()}
                        </span>

                      </td>


                      {/* Brand */}
                      <td className="px-5 py-4">

                        <span className="inline-flex px-3 py-1.5 rounded-lg bg-purple-50 text-accent text-sm font-medium">
                          {item.brand}
                        </span>

                      </td>


                      {/* Model */}
                      <td className="px-5 py-4">

                        <span className="text-sm font-medium text-secondary">
                          {item.model}
                        </span>

                      </td>


                      {/* Category */}
                      <td className="px-5 py-4">

                        <span className="inline-flex px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                          {item.category}
                        </span>

                      </td>


                      {/* Status */}
                      <td className="px-5 py-4">

                        <div className="flex items-center gap-2">

                          <span className="relative flex h-2.5 w-2.5">

                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>

                          </span>

                          <span className="text-sm font-medium text-green-600">
                            Available
                          </span>

                        </div>

                      </td>


                      {/* Stock */}
                      <td className="px-5 py-4">

                        <div className="flex items-center gap-2">

                          <span className="font-bold text-secondary">
                            {item.stock}
                          </span>

                          <span className="text-xs text-gray-400">
                            units
                          </span>

                        </div>

                      </td>

                    </tr>

                  )

                }
              )
            }

          </tbody>

        </table>

      </div>


      {/* Empty State */}
      {
        products.length === 0 && (

          <div className="py-20 flex flex-col items-center justify-center">

            <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-4">

              <span className="text-3xl">
                📦
              </span>

            </div>

            <h3 className="text-lg font-bold text-secondary">
              No Products Found
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Your product inventory is currently empty.
            </p>

          </div>

        )
      }

    </div>


    {/* Floating Add Product Button */}
    <Link
      to="/admin/add-product"
      className="
        fixed bottom-7 right-7
        w-14 h-14
        bg-accent
        flex justify-center items-center
        text-white text-xl
        rounded-2xl
        shadow-xl
        hover:bg-secondary
        hover:scale-110
        active:scale-95
        transition-all duration-200
        group
      "
    >

      <FaPlus className="group-hover:rotate-90 transition-transform duration-300" />

    </Link>

  </div>
);

}
