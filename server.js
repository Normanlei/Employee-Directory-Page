const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();
//set storage engine 

const storage = multer.diskStorage({
  destination: './client/uploads/',
  filename: function(req,file,cb){
    cb(null,file.fieldname+"-"+Date.now()+path.extname(file.originalname));
  }
});

//init upload
const upload = multer ({
  storage:storage,
  limits: {fileSize:1000000},
  fileFilter: function(req,file,cb){
    checkFileType(file,cb);
  }
}).single("userImage");

function checkFileType(file,cb){
  //Allowd extention
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) return cb(null, true);
  else cb('Error: image file only!!!');
}

app.use(express.static("client"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production"){
  app.use(express.static("client/build"));
}
// app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/employees", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
    if (err) res.json({err:"Not A Valid file is Uploaded!"});
    else{
      console.log(req.file);
      if (req.file==undefined){
        res.json({err:"No File is Uploaded!"});
      }else{
        res.json({message:"Image is uploaded successfully!", name:req.file.filename});
      }
    }
  })
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
