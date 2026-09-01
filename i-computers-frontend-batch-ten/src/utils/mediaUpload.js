import {createClient} from "@supabase/supabase-js";


// let url = "https://nkcwtavontjebljyswoz.supabase.co/rest/v1/"
let url = "https://nkcwtavontjebljyswoz.supabase.co"
let key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rY3d0YXZvbnRqZWJsanlzd296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4NzkzNzAsImV4cCI6MjEwMzQ1NTM3MH0.V9IKQzDu0YS0w3BLAX7QyTFE8bGzYj_FbU1NbGLIfo0"

const supabase  = createClient(url,key);

export default function uploadMedia(file){
  return new Promise(
    (resolve,reject)=>{
      if(file==null){
        reject("No file selected");
      }else{
        const timeStamp = new Date().getTime();
        const fileName = timeStamp + " " +file.name
        
        supabase.storage.from("images").upload(fileName,file,{


          upsert:false,
          cacheControl : "3600",

        }).then(()=>{

          const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
          resolve(publicUrl);
          
          
        }).catch((error)=>{
          reject(error);
          
        })
      
      }

    }
  )

  
}



