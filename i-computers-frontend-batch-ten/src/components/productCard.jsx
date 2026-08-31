import { Link } from "react-router-dom"

export default function ProductCard(props){
  const product = props.product
  
  return(
    <Link to={"/overview/" + product.productId} state={product} className = "w-[300px] h-[450px] m-10 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col hover:[&_.primary-image]:opacity-0 border justify-between ">
      <div className="w-full h-[250px] bg-red-900 relative ">
      <img src={product.images[1 ]} className="w-full bg-white h-full object-cover absolute top-0 left-0 "  />
      <img src={product.images[0]} className="w-full bg-white h-full object-cover absolute top-0 left-0 primary-image transition-opacity duration-500"  />

      </div>

      <h1 className="text-lg font-semibold mt-4 px-4">{product.name}</h1>
      <div className="w-full flex flex-col py-4 ">
        {
          product.labelledPrice > product.price && <span className="text-sm text-gray-500 mt-2 px-4 line-through">{product.labelledPrice}Rs</span>
        }
      </div>

        
      </Link>
  )
}

// export default function ProductCard(props) {
//   console.log(props.name);
//   console.log("Product card is being rendered");

//   return (
//     <div className="group w-64 overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

//       {/* Product Image */}
//       <div className="relative h-56 overflow-hidden bg-gray-100">
//         <img
//           src={props.image}
//           alt={props.name}
//           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//         />

//         {/* Discount Badge */}
//         <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow">
//           SALE
//         </span>
//       </div>

//       {/* Product Details */}
//       <div className="p-5">

//         {/* Product Name */}
//         <h2 className="mb-2 line-clamp-1 text-lg font-bold text-gray-800">
//           {props.name}
//         </h2>

//         {/* Description */}
//         <p className="mb-4 text-sm text-gray-500">
//           Premium quality product
//         </p>

//         {/* Price + Button */}
//         <div className="flex items-center justify-between">

//           <div>
//             <p className="text-xs text-gray-400">Price</p>
//             <p className="text-xl font-bold text-gray-900">
//               LKR {props.price}
//             </p>
//           </div>

//           <button
//             className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white
//                        transition-all duration-300
//                        hover:bg-gray-800 hover:shadow-lg
//                        active:scale-95"
//           >
//             Buy Now
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }