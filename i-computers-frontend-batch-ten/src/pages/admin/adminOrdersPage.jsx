
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingAnimation from "../../components/loadingAnimation";
import getFormattedPrice from "../../utils/price-format";
import { FaEye } from "react-icons/fa";
import OrderDetailsModel from "../../components/orderDetailsModel";





export default function AdminOrdersPage() {

  

  const [orders,setOrders] = useState([])
  const[isOrdersAreLoaded , setIsOrdersAreLoaded] = useState(false)
  const[pageSize,setPageSize] =  useState(10);
  const[currentPage,setCurrentPage] = useState(1);
  const[totalPages,setTotalPages] = useState(1);
  const[totalOrders,setTotalOrders] = useState(0);

  useEffect(
    ()=>{

      if(!isOrdersAreLoaded){

      
      const token = localStorage.getItem("token")

  axios.get(import.meta.env.VITE_API_URL+"/orders/"+pageSize+"/"+currentPage,{
    headers:{
      "Authorization" : "Bearer "+ token
    }
  }).then(
    (response)=>{
       

      setOrders(response.data.orders)
      setTotalPages(response.data.totalPages);
      setTotalOrders(response.data.total);
      setIsOrdersAreLoaded(true);
    }
  ).catch(

      (error)=>{
        
        console.log(error);
        
      }
    )

    }

    },[isOrdersAreLoaded]
  )

  
  

  return (

    
    <div className="w-full h-full overflow-y-scroll p-5">

     <div className="sticky top-0 w-full h-[100px] rounded-lg  bg-accent text-white flex items-center p-5 justify-between shadow-2xl ">
        <div>
        <h1 className="text-2xl font-semibold mb-4">Orders</h1>
        
        </div>
        <div className="flex items-center gap-4 ">
          <span className="text-sm text-gray-600">{totalOrders}</span>

        </div>
        </div>



      {
        isOrdersAreLoaded ?
        <>
        <table className="mt-5 w-full text-secondary ">
        <thead className="bg-accent/15  text-white ">
          <tr>
            <th className="text-center border border-primary p-4 ">Order ID</th>
            <th className="text-center border border-primary p-4 ">Email</th>
            <th className="text-center border border-primary p-4 ">First Name</th>
            <th className="text-center border border-primary p-4 ">Last  Name</th>
            <th className="text-center border border-primary p-4 ">Phone</th>
            <th className="text-center border border-primary p-4 ">Date</th>
            <th className="text-center border border-primary p-4 ">Total</th>
            <th className="text-center border border-primary p-4 ">Status</th>
            <th className="text-center border border-primary p-4 ">Actions</th>
          </tr>
        </thead>

        <tbody>
          
          {
            orders.map(
              (item)=>{
                return(
                  <tr className="odd:bg-gray-600 even:bg-primary odd:text-white border-t-4 border-primary hover:bg-accent/45" key={item.orderId}>
                    
                    <td className="text-center text-wrap p-2">{item.orderId}</td>
                    <td className="text-center text-wrap p-2">{item.email}</td>
                    <td className="text-center text-wrap p-2">{item.firstName}</td>
                    <td className="text-center text-wrap p-2">{item.lastName}</td>
                    <td className="text-center text-wrap p-2">{item.phone}</td>
                    <td className="text-center text-wrap p-2">{new Date(item.date).toLocaleDateString()}</td>
                    <td className="text-center text-wrap p-2"><span className="font-semibold text-gray-800">{getFormattedPrice(item.total)}</span></td>
                    <td className="text-center text-wrap p-2">{item.status}</td>
                    <td className="text-center text-wrap p-2"><OrderDetailsModel order={item} refresh={()=>setIsOrdersAreLoaded(false)}/></td>
                    
                  </tr>
                )
              }
            )
          }
          

          

        </tbody>
      </table>
      
      <div className="w-full flex justify-end items-center gap-3 mt-4">
        <button onClick={
          ()=>{
            if(currentPage>1){
              setCurrentPage(currentPage-1);
              setIsOrdersAreLoaded(false);
            }
          }
        }className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200 ">previous</button>
        <span className="text-sm text-gray-600 ">Page{currentPage} of {totalPages}</span>
        <button onClick={
          ()=>{
            setCurrentPage(currentPage + 1);
            setIsOrdersAreLoaded(false);
          }
        }className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200">Next</button>
        
        <select value={pageSize}
        onChange={(e)=>{
          setPageSize(parseInt(e.target.value));
          setIsOrdersAreLoaded(false);
        }}
        className="ml-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors duration-200"
          >
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>

      </div>

      </>

  :
     <LoadingAnimation/>      
    }

      
    </div>

    
  );
}






// import axios from "axios";
// import { useEffect, useState } from "react";
// import { BiEdit } from "react-icons/bi";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import LoadingAnimation from "../../components/loadingAnimation";
// import ProductDeleteModal from "../../components/productDeleteModal";

// export default function AdminProductPage() {
//   const [products, setProducts] = useState([]);
//   const [isProductsAreLoaded, setIsProductsAreLoaded] = useState(false);

//   useEffect(() => {
//     if (!isProductsAreLoaded) {
//       const token = localStorage.getItem("token");

//       axios
//         .get(import.meta.env.VITE_API_URL + "/products", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         })
//         .then((response) => {
//           setProducts(response.data);
//           setIsProductsAreLoaded(true);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }, [isProductsAreLoaded]);

//   return (
//     <div className="w-full h-full overflow-y-scroll bg-gray-100 p-4 md:p-6">

//       {/* Header */}
//       <div className="sticky top-0 z-20 w-full min-h-[90px] rounded-2xl bg-accent text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-5 shadow-xl">

//         <div>
//           <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
//             Products
//           </h1>

//           <p className="text-sm text-white/70 mt-1">
//             Manage your store products
//           </p>
//         </div>

//         <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10">
//           <span className="text-sm text-white/70">
//             Total Products
//           </span>

//           <p className="text-xl font-bold">
//             {products.length}
//           </p>
//         </div>
//       </div>

//       {/* Table */}
//       {isProductsAreLoaded ? (
//         <div className="mt-6 w-full bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">

//           {/* Table Top */}
//           <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">

//             <div>
//               <h2 className="text-xl font-bold text-gray-800">
//                 Product List
//               </h2>

//               <p className="text-sm text-gray-500 mt-1">
//                 View and manage all products
//               </p>
//             </div>

//             <div className="hidden md:block text-sm text-gray-500">
//               {products.length} products
//             </div>
//           </div>

//           {/* Responsive Table */}
//           <div className="overflow-x-auto">

//             <table className="w-full min-w-[1200px]">

//               <thead>
//                 <tr className="bg-gray-50 border-b border-gray-200">

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Product
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Product ID
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Price
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Labelled Price
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Brand
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Model
//                   </th>

//                   <th className="text-left px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Category
//                   </th>

//                   <th className="text-center px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Availability
//                   </th>

//                   <th className="text-center px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Stock
//                   </th>

//                   <th className="text-center px-5 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
//                     Actions
//                   </th>

//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100">

//                 {products.map((item) => {
//                   return (
//                     <tr
//                       key={item.productId}
//                       className="group hover:bg-gray-50 transition-all duration-200"
//                     >

//                       {/* Product */}
//                       <td className="px-5 py-4">

//                         <div className="flex items-center gap-4">

//                           <div className="w-14 h-14 rounded-xl overflow-hidden border border-gray-200 bg-gray-100 flex-shrink-0">
//                             <img
//                               src={item.images[0]}
//                               alt={item.name}
//                               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                             />
//                           </div>

//                           <div className="max-w-[220px]">
//                             <p className="font-semibold text-gray-800 truncate">
//                               {item.name}
//                             </p>

//                             <p className="text-xs text-gray-400 mt-1">
//                               {item.category}
//                             </p>
//                           </div>

//                         </div>

//                       </td>

//                       {/* Product ID */}
//                       <td className="px-5 py-4">
//                         <span className="inline-flex px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium">
//                           {item.productId}
//                         </span>
//                       </td>

//                       {/* Price */}
//                       <td className="px-5 py-4">
//                         <p className="font-bold text-gray-800">
//                           LKR {Number(item.price).toLocaleString()}
//                         </p>
//                       </td>

//                       {/* Labelled Price */}
//                       <td className="px-5 py-4">
//                         <p className="text-gray-500 line-through">
//                           LKR {Number(item.labelledPrice).toLocaleString()}
//                         </p>
//                       </td>

//                       {/* Brand */}
//                       <td className="px-5 py-4">
//                         <span className="font-medium text-gray-700">
//                           {item.brand || "-"}
//                         </span>
//                       </td>

//                       {/* Model */}
//                       <td className="px-5 py-4">
//                         <span className="text-gray-600">
//                           {item.model || "-"}
//                         </span>
//                       </td>

//                       {/* Category */}
//                       <td className="px-5 py-4">

//                         <span className="inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
//                           {item.category}
//                         </span>

//                       </td>

//                       {/* Availability */}
//                       <td className="px-5 py-4 text-center">

//                         {item.isAvailable ? (
//                           <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-semibold">

//                             <span className="w-2 h-2 rounded-full bg-green-500"></span>

//                             Available

//                           </span>
//                         ) : (
//                           <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold">

//                             <span className="w-2 h-2 rounded-full bg-red-500"></span>

//                             Not Available

//                           </span>
//                         )}

//                       </td>

//                       {/* Stock */}
//                       <td className="px-5 py-4 text-center">

//                         {item.stock > 0 ? (
//                           <span className="inline-flex px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold">
//                             {item.stock} units
//                           </span>
//                         ) : (
//                           <span className="inline-flex px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-bold">
//                             Out of Stock
//                           </span>
//                         )}

//                       </td>

//                       {/* Actions */}
//                       <td className="px-5 py-4">

//                         <div className="flex justify-center items-center gap-3">

//                           {/* Delete */}
//                           <div className="p-2 rounded-lg hover:bg-red-50 transition-colors">
//                             <ProductDeleteModal
//                               product={item}
//                               refresh={() => {
//                                 setIsProductsAreLoaded(false);
//                               }}
//                             />
//                           </div>

//                           {/* Edit */}
//                           <Link
//                             to="/admin/edit-product"
//                             state={item}
//                             className="p-2 rounded-lg text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
//                           >
//                             <BiEdit className="text-2xl" />
//                           </Link>

//                         </div>

//                       </td>

//                     </tr>
//                   );
//                 })}

//               </tbody>

//             </table>

//           </div>

//           {/* Empty State */}
//           {products.length === 0 && (
//             <div className="flex flex-col items-center justify-center py-20">

//               <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl">
//                 📦
//               </div>

//               <h3 className="mt-4 text-lg font-semibold text-gray-700">
//                 No products found
//               </h3>

//               <p className="text-sm text-gray-400 mt-1">
//                 Add your first product to get started.
//               </p>

//             </div>
//           )}

//         </div>
//       ) : (
//         <div className="flex justify-center items-center min-h-[400px]">
//           <LoadingAnimation />
//         </div>
//       )}

//       {/* Add Product Button */}
//       <Link
//         to="/admin/add-product"
//         className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-accent flex justify-center items-center text-white text-2xl rounded-full shadow-xl hover:bg-black hover:text-accent hover:scale-110 transition-all duration-200"
//       >
//         <FaPlus />
//       </Link>

//     </div>
//   );
// }







