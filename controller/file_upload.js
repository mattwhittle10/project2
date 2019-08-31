var express = require("express");

var awsRoutes = express.Router();

const upload = require('../services/file_upload');


const singleUpload = upload.single('image');

awsRoutes.post('/upload', function(req, res, next) {
    //res.send('Successfully uploaded ' + req.files.length + ' files!')
    singleUpload(req,res, function(err){
        if (err) throw err;
      return res.json({'imageUrl':req.file.location});
    })
    
  });

  module.exports = awsRoutes ;