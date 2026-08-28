import { FaRegUserCircle } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
// import uploadMedia from "../utils/mediaUpload";


export default function TestPage() {
  
  
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-primary text-secondary">
     
    <FaRegUserCircle />
    <FaUserShield />

    </div>
  );
}

//https://nkcwtavontjebljyswoz.supabase.co/rest/v1/


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rY3d0YXZvbnRqZWJsanlzd296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NzkzNzAsImV4cCI6MjEwMzQ1NTM3MH0.V9IKQzDu0YS0w3BLAX7QyTFE8bGzYj_FbU1NbGLIfo0


// async function handleUpload(){
//   try {
//     const url = await uploadMedia(file);
//     console.log(url);
    
//   } catch (error) {
//     console.log(error);
    
//   }
// }