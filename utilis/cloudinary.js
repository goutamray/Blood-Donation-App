
import cloudinary from "cloudinary";


//cloud configuration
cloudinary.v2.config({
  cloud_name: 'dg4fvo1o8', 
  api_key: '277275736642615', 
  api_secret: 'u1t_8EY8zJdEUxmNsC4G0QiYnaI' 
})



// file upload to cloud
export const fileUploadToCloud = async(path) => {
  const data = await cloudinary.v2.uploader.upload(path);
  return data;
}; 

// file upload to cloud
export const fileDeleteFromCloud = async(publicId) => {
  await cloudinary.v2.uploader.destroy(publicId);
}; 










