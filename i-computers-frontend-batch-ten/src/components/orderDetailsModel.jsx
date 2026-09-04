{/* <td className="text-center text-wrap p-2"><FaEye/></td> */}
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { TbTrash } from "react-icons/tb";
import getFormattedPrice from "../utils/price-format";

// import { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import getFormattedPrice from "../../utils/price-format";

export default function OrderDetailsModel(props) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const order = props.order;
  const refresh = props.refresh;

  return (
    <>

      {/* Eye Button */}
      <FaEye
        className="text-2xl text-blue-500 cursor-pointer hover:text-blue-700"
        onClick={() => {
          setIsModalOpen(true);
        }}
      />


      {/* Modal */}
      {isModalOpen && (

        <div className="w-screen h-screen fixed bg-black/30 top-0 left-0 flex justify-center items-center text-secondary z-99">

          <div className="w-[600px] max-h-[90vh] bg-white flex flex-col rounded-xl relative shadow-2xl overflow-hidden">

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 z-10 w-8 h-8 flex justify-center items-center rounded-full text-gray-500 hover:bg-red-100 hover:text-red-600 cursor-pointer text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>


            {/* Header */}
            <div className="w-full p-5 border-b border-gray-200">

              <h2 className="text-2xl font-bold text-gray-800">
                Order Details
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Order information and purchased products
              </p>

            </div>


            {/* Customer Information */}
            <div className="w-full p-5">

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">

                {/* Order ID */}
                <div className="flex flex-col">

                  <span className="text-xs text-gray-500">
                    Order ID
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    {order.orderId}
                  </span>

                </div>


                {/* Customer */}
                <div className="flex flex-col">

                  <span className="text-xs text-gray-500">
                    Customer
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    {order.firstName} {order.lastName}
                  </span>

                </div>


                {/* Email */}
                <div className="flex flex-col">

                  <span className="text-xs text-gray-500">
                    Email
                  </span>

                  <span className="text-sm font-semibold text-gray-800 break-all">
                    {order.email}
                  </span>

                </div>


                {/* Phone */}
                <div className="flex flex-col">

                  <span className="text-xs text-gray-500">
                    Phone
                  </span>

                  <span className="text-sm font-semibold text-gray-800">
                    {order.phone}
                  </span>

                </div>

              </div>


              {/* Address */}
              <div className="mt-4 flex flex-col">

                <span className="text-xs text-gray-500">
                  Address
                </span>

                <span className="text-sm font-semibold text-gray-800">
                  {order.addressLineOne}
                  {order.addressLineTwo && `, ${order.addressLineTwo}`}
                  {order.city && `, ${order.city}`}
                  {order.state && `, ${order.state}`}
                  {order.postalCode && `, ${order.postalCode}`}
                </span>

              </div>

            </div>


            {/* Products */}
            <div className="w-full px-5">

              <div className="border-t border-gray-200 pt-4">

                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Ordered Products
                </h3>


                {/* Product List */}
                <div className="w-full max-h-[300px] overflow-y-auto flex flex-col gap-2">

                  {
                    order.items.map((item, index) => {

                      return (

                        <div
                          key={index}
                          className="w-full flex items-center justify-between bg-gray-50 rounded-lg p-3 border border-gray-200"
                        >

                          {/* Product Left Side */}
                          <div className="flex items-center gap-3 min-w-0">

                            {/* Product Image */}
                            <img
                              className="w-[70px] h-[70px] object-cover rounded-lg bg-white"
                              src={item.product.image}
                              alt={item.product.name}
                            />


                            {/* Product Details */}
                            <div className="flex flex-col gap-1 min-w-0">

                              <span className="font-semibold text-gray-800 text-sm">
                                {item.product.name}
                              </span>

                              <span className="text-xs text-gray-500">
                                Quantity: {item.quantity}
                              </span>

                              <span className="text-xs text-gray-500">
                                Price: {getFormattedPrice(item.product.price)}
                              </span>

                            </div>

                          </div>


                          {/* Product Total */}
                          <div className="text-sm font-bold text-gray-800 ml-3 whitespace-nowrap">

                            {getFormattedPrice(
                              item.product.price * item.quantity
                            )}

                          </div>

                        </div>

                      );

                    })
                  }

                </div>

              </div>

            </div>


            {/* Total + Status */}
            <div className="w-full p-5 mt-4 border-t border-gray-200 flex justify-between items-center">

              {/* Status */}
              <div className="flex flex-col gap-1">

                <span className="text-xs text-gray-500">
                  Status
                </span>

                <span className="w-fit px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-xs">
                  {order.status}
                </span>

              </div>


              {/* Total */}
              <div className="flex flex-col items-end gap-1">

                <span className="text-xs text-gray-500">
                  Order Total
                </span>

                <span className="text-xl font-bold text-gray-800">
                  {getFormattedPrice(order.total)}
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}