import express from "express";
import upload from "../config/multerConfig.js";
import multer from "multer";
const router = express.Router();

import FATSDBODBC from "../controllers/controllersODBC.js";

import FATSDB from "../controllers/controlletrsMSSQL.js";
import {
  checkAuthentication,
  checkRole,
  generateToken,
} from "../helpers/apiAuth.js";
import logoUpload from "../config/multerLogoConfig.js";

const storage = multer.diskStorage({
  destination: "../uploads",
  filename: function (req, file, cb) {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
var uploadee = multer({
  storage: storage,
  limits: { fileSize: 1000000000000000000000 },
});
router.use("/profile", express.static("uploads"));
const cpUpload = upload.fields([
  { name: "Image" },
  { name: "selfieIDImage" },
]);
//----------------POST_API---------------------------------------------------------
router.post("/apt_post", cpUpload,FATSDB.apt_post)
//--------------------------------------------------------------------------

//-------------------------------GET_API---------------------------------------------
router.get("/apt_GET_LIST", FATSDB.apt_GET_LIST)
router.get("/apt_GET_BYID/:APTID",FATSDB.apt_GET_BYID)
//------------------------------------------------------------------------------
//-----------------------------------PUT_API-------------------------------------
router.put("/apt_Put/:APTID", cpUpload, FATSDB.apt_Put)
//--------------------------------------------------------------------------------
//-----------------------------------DELETE_API-----------------------------------------

//----------------------------------------------------------------------------////
export default router;
