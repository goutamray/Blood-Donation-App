
import multer from "multer";


// multer setup 
const storage = multer.diskStorage({
  filename : (req, file, cb) => {
    cb(null, Date.now() + "_" + file.fieldname);
  }
})

// multer middleware
export const userPhoto = multer({ storage }).single("userPhoto");












