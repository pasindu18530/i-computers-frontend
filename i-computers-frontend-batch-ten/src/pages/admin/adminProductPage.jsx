import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  return (
    <div className="w-full h-full">
      <Link
        to="/admin/add-product"
        className="fixed bottom-2 right-2 w-[60px] h-[60px] bg-accent flex justify-center items-center text-white text-2xl rounded-full shadow-lg hover:bg-black hover:text-accent "
      >
        <FaPlus />
      </Link>
    </div>
  );
}
