const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const config = require('../config/keys');


aws.config.update({
    accessKeyId:config.config.accessKeyId,
    secretAccessKey:config.config.secretAccessKey,
    region:'us-east-2'

})
 
const s3 = new aws.S3();

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
    cb(null, true);
  }else{
      cb(new Error("Invalid MIME type , only JPEG and PNG "),false );
  }
}
 
const upload = multer({
  fileFilter:fileFilter,
  storage: multerS3({
    s3: s3,
    bucket: 'img-bootcamp',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: "testing-meta-data"});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;