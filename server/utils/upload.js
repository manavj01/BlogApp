const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');



const storage = new GridFsStorage({
  url: 'mongodb://username:username@webdev-shard-00-00.ztgu1.mongodb.net:27017,webdev-shard-00-01.ztgu1.mongodb.net:27017,webdev-shard-00-02.ztgu1.mongodb.net:27017/webdev?ssl=true&replicaSet=atlas-9lixug-shard-0&authSource=admin&retryWrites=true&w=majority',
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