const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');



const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useUnifiedTopology: true, useNewUrlParser :true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.mimeType) === -1)
      return `${Date.now()}-blog-${file.originalname}`;
      

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`
    }
  }

})


module.exports = multer({ storage });