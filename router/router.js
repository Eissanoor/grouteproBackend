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
  { name: "Photo" },
  { name: "ItemPhoto" },
  { name: "PDFFileName" },
  { name: "ProductPhoto" },
  {name:"VPhoto"}
]);
//----------------POST_API---------------------------------------------------------
router.post("/apt_post", cpUpload, FATSDB.apt_post)
router.post("/aptbckgrd_post", FATSDB.aptbckgrd_post)
router.post("/contact_post", cpUpload, FATSDB.contact_post)
router.post("/TransactionSummary_post", FATSDB.TransactionSummary_post)
router.post("/TransactionSummaryList_post", FATSDB.TransactionSummaryList_post)
router.post("/TransactionSummaryPrint_post", FATSDB.TransactionSummaryPrint_post)
router.post("/TransactionSummarytmp_post", FATSDB.TransactionSummarytmp_post)
router.post("/CardTypes_post", FATSDB.CardTypes_post)
router.post("/Companies_post", FATSDB.Companies_post)
router.post("/Customers_post", FATSDB.Customers_post)
router.post("/FEMembers_post", FATSDB.FEMembers_post)
router.post("/ItemBarcodes_post", FATSDB.ItemBarcodes_post)
router.post("/ItemBarcodesOnVan_post", FATSDB.ItemBarcodesOnVan_post)
router.post("/ItemBarcodesReturns_post", FATSDB.ItemBarcodesReturns_post)
router.post("/ItemBarcodesTmp_post", FATSDB.ItemBarcodesTmp_post)
router.post("/ItemMaster_post", cpUpload, FATSDB.ItemMaster_post)
router.post("/LIMembers_post", FATSDB.LIMembers_post)
router.post("/MemberProducts_post", FATSDB.MemberProducts_post)
router.post("/Members_post", FATSDB.Members_post)
router.post("/PDFs_post", cpUpload, FATSDB.PDFs_post)
router.post("/PDFsRPrintInvoice_post", cpUpload, FATSDB.PDFsRPrintInvoice_post)
router.post("/tblPDFsRPrintInvoiceDirect_post", cpUpload, FATSDB.tblPDFsRPrintInvoiceDirect_post)
router.post("/PDFsSalesCollectionPrint_post", cpUpload, FATSDB.PDFsSalesCollectionPrint_post)
router.post("/PDFsSalesCollectionReprint_post", cpUpload, FATSDB.PDFsSalesCollectionReprint_post)
router.post("/PDFsSalesReturnPrint_post", cpUpload, FATSDB.PDFsSalesReturnPrint_post)
router.post("/PDFsSalesReturnReprint_post", cpUpload, FATSDB.PDFsSalesReturnReprint_post)
router.post("/PDFsSummary_post", FATSDB.PDFsSummary_post)
router.post("/QRCodeLogin_post", FATSDB.QRCodeLogin_post)
router.post("/RequestDets_post", cpUpload, FATSDB.RequestDets_post)
router.post("/RequestDetsSHP_post", cpUpload, FATSDB.RequestDetsSHP_post)
router.post("/RequestMaster_post", FATSDB.RequestMaster_post)
router.post("/RequestMasterSHP_post", FATSDB.RequestMasterSHP_post)
router.post("/RouteDetails_post", FATSDB.RouteDetails_post)
router.post("/RouteMasterData_post", FATSDB.RouteMasterData_post)
router.post("/RouteMasterPlan_post", FATSDB.RouteMasterPlan_post)
router.post("/RouteMasterPlan1_post", FATSDB.RouteMasterPlan1_post)
router.post("/RouteMasterPlanDownloaded_post", FATSDB.RouteMasterPlanDownloaded_post)
router.post("/SalesCustomers_post", FATSDB.SalesCustomers_post)
router.post("/SalesCustomersReturn_post", FATSDB.SalesCustomersReturn_post)
router.post("/SalesInvoiceDets_post", FATSDB.SalesInvoiceDets_post)
router.post("/SalesInvoiceM_post", FATSDB.SalesInvoiceM_post)
router.post("/SalesInvoiceMList_post", FATSDB.SalesInvoiceMList_post)
router.post("/SalesManConfirmedDetsView_post", FATSDB.SalesManConfirmedDetsView_post)
router.post("/SalesManConfirmedOrderDets_post", FATSDB.SalesManConfirmedOrderDets_post)
router.post("/SalesManConfirmedOrderDetsSelected_post", FATSDB.SalesManConfirmedOrderDetsSelected_post)
router.post("/SalesManConfirmedOrdersM_post", FATSDB.SalesManConfirmedOrdersM_post)
router.post("/SalesManConfirmedOrdersMSelected_post", FATSDB.SalesManConfirmedOrdersMSelected_post)
router.post("/SalesOrder_post", FATSDB.SalesOrder_post)
router.post("/SalesOrderDets_post", FATSDB.SalesOrderDets_post)
router.post("/SalesOrderDetsM_post", FATSDB.SalesOrderDetsM_post)
router.post("/SalesOrderDetsMPrint_post", FATSDB.SalesOrderDetsMPrint_post)
router.post("/SalesOrderDetsMPrintCollection_post", FATSDB.SalesOrderDetsMPrintCollection_post)
router.post("/SalesOrderDetsMPrintCollectionR_post", FATSDB.SalesOrderDetsMPrintCollectionR_post)
router.post("/SalesOrderDetsMPrintDN_post", FATSDB.SalesOrderDetsMPrintDN_post)
router.post("/SalesOrderDetsMPrintDSI_post", FATSDB.SalesOrderDetsMPrintDSI_post)
router.post("/SalesOrderDetsMPrintR_post", FATSDB.SalesOrderDetsMPrintR_post)
router.post("/SalesOrderDetsMPrintRSReturn_post", FATSDB.SalesOrderDetsMPrintRSReturn_post)
router.post("/SalesOrderDetsMPrintRSReturnInvoice_post", FATSDB.SalesOrderDetsMPrintRSReturnInvoice_post)
router.post("/SalesOrderDetsViewInvoiceLine_post", FATSDB.SalesOrderDetsViewInvoiceLine_post)
router.post("/SalesOrderDetsViewInvoiceLine1_post", FATSDB.SalesOrderDetsViewInvoiceLine1_post)
router.post("/SalesOrderfromERPM_post", FATSDB.SalesOrderfromERPM_post)
router.post("/SalesOrderM_post", FATSDB.SalesOrderM_post)
router.post("/SalesOrderMPosted_post", FATSDB.SalesOrderMPosted_post)
router.post("/ShipmentGLNTracking_post", FATSDB.ShipmentGLNTracking_post)
router.post("/StockRequestVan_post", FATSDB.StockRequestVan_post)
router.post("/StocksOnVan_post", FATSDB.StocksOnVan_post)
router.post("/StocksOnVanPrint_post", FATSDB.StocksOnVanPrint_post)
router.post("/SysNo_post", FATSDB.SysNo_post)
router.post("/SysNoCounter_post", FATSDB.SysNoCounter_post)
router.post("/UsersLoggedIn_post", FATSDB.UsersLoggedIn_post)
router.post("/UsersLoginSalesMan_post", FATSDB.UsersLoginSalesMan_post)
router.post("/VanMaster_post", cpUpload, FATSDB.VanMaster_post)
router.post("/VehicleConditions_post", FATSDB.VehicleConditions_post)
router.post("/VehiclePhotos_post",cpUpload,FATSDB.VehiclePhotos_post)
//--------------------------------------------------------------------------

//-------------------------------GET_API---------------------------------------------
router.get("/apt_GET_LIST", FATSDB.apt_GET_LIST)
router.get("/apt_GET_BYID/:APTID", FATSDB.apt_GET_BYID)
router.get("/aptbckgrd_GET_LIST", FATSDB.aptbckgrd_GET_LIST)
router.get("/aptbckgrd_GET_BYID/:APTBckgrdID", FATSDB.aptbckgrd_GET_BYID)
router.get("/contact_GET_BYID/:ContactID", FATSDB.contact_GET_BYID)
router.get("/contact_GET_LIST", FATSDB.contact_GET_LIST)
router.get("/TransactionSummary_GET_LIST", FATSDB.TransactionSummary_GET_LIST)
router.get("/TransactionSummary_GET_BYID/:TblSysNoCounterID", FATSDB.TransactionSummary_GET_BYID)
router.get("/TransactionSummaryList_GET_LIST", FATSDB.TransactionSummaryList_GET_LIST)
router.get("/TransactionSummaryList_GET_BYID/:TblSysNoCounterID", FATSDB.TransactionSummaryList_GET_BYID)
router.get("/TransactionSummaryPrint_GET_BYID/:TblSysNoCounterID", FATSDB.TransactionSummaryPrint_GET_BYID)
router.get("/TransactionSummaryPrint_GET_LIST", FATSDB.TransactionSummaryPrint_GET_LIST)
router.get("/TransactionSummarytmp_GET_LIST", FATSDB.TransactionSummarytmp_GET_LIST)
router.get("/TransactionSummarytmp_GET_BYID/:TblSysNoCounterID", FATSDB.TransactionSummarytmp_GET_BYID)
router.get("/CardTypes_GET_BYID/:tblItemBarcodesID", FATSDB.CardTypes_GET_BYID)
router.get("/CardTypes_GET_LIST", FATSDB.CardTypes_GET_LIST)
router.get("/Companies_GET_LIST", FATSDB.Companies_GET_LIST)
router.get("/Companies_GET_BYID/:tblCompaniesID", FATSDB.Companies_GET_BYID)
router.get("/Customers_GET_BYID/:TblCustomersID", FATSDB.Customers_GET_BYID)
router.get("/Customers_GET_LIST", FATSDB.Customers_GET_LIST)
router.get("/FEMembers_GET_LIST", FATSDB.FEMembers_GET_LIST)
router.get("/FEMembers_GET_BYID/:tblLIMembersID", FATSDB.FEMembers_GET_BYID)
router.get("/temBarcodes_GET_BYID/:tblItemBarcodesID", FATSDB.temBarcodes_GET_BYID)
router.get("/ItemBarcodes_GET_LIST", FATSDB.ItemBarcodes_GET_LIST)
router.get("/ItemBarcodesOnVan_GET_LIST", FATSDB.ItemBarcodesOnVan_GET_LIST)
router.get("/ItemBarcodesOnVan_GET_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesOnVan_GET_BYID)
router.get("/ItemBarcodesReturns_GET_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesReturns_GET_BYID)
router.get("/ItemBarcodesReturns_GET_LIST", FATSDB.ItemBarcodesReturns_GET_LIST)
router.get("/ItemBarcodesTmp_GET_LIST", FATSDB.ItemBarcodesTmp_GET_LIST)
router.get("/ItemBarcodesTmp_GET_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesTmp_GET_BYID)
router.get("/ItemMaster_GET_BYID/:tblItemMasterID", FATSDB.ItemMaster_GET_BYID)
router.get("/ItemMaster_GET_LIST", FATSDB.ItemMaster_GET_LIST)
router.get("/LIMembers_GET_BYID/:tblLIMembersID", FATSDB.LIMembers_GET_BYID)
router.get("/LIMembers_GET_LIST", FATSDB.LIMembers_GET_LIST)
router.get("/MemberProducts_GET_LIST", FATSDB.MemberProducts_GET_LIST)
router.get("/MemberProducts_GET_BYID/:ProductID", FATSDB.MemberProducts_GET_BYID)
router.get("/Members_GET_BYID/:MemberID", FATSDB.Members_GET_BYID)
router.get("/Members_GET_LIST", FATSDB.Members_GET_LIST)
router.get("/PDFs_GET_LIST", FATSDB.PDFs_GET_LIST)
router.get("/PDFs_GET_BYID/:tblPDFsID", FATSDB.PDFs_GET_BYID)
router.get("/PDFsRPrintInvoice_GET_BYID/:tblPDFsID", FATSDB.PDFsRPrintInvoice_GET_BYID)
router.get("/PDFsRPrintInvoice_GET_LIST", FATSDB.PDFsRPrintInvoice_GET_LIST)
router.get("/PDFsRPrintInvoiceDirect_GET_LIST", FATSDB.PDFsRPrintInvoiceDirect_GET_LIST)
router.get("/PDFsRPrintInvoiceDirect_GET_BYID/:tblPDFsID", FATSDB.PDFsRPrintInvoiceDirect_GET_BYID)
router.get("/PDFsSalesCollectionPrint_GET_BYID/:tblPDFsID", FATSDB.PDFsSalesCollectionPrint_GET_BYID)
router.get("/PDFsSalesCollectionPrint_GET_LIST", FATSDB.PDFsSalesCollectionPrint_GET_LIST)
router.get("/PDFsSalesCollectionReprint_GET_LIST", FATSDB.PDFsSalesCollectionReprint_GET_LIST)
router.get("/PDFsSalesCollectionReprint_GET_BYID/:tblPDFsID", FATSDB.PDFsSalesCollectionReprint_GET_BYID)
router.get("/PDFsSalesReturnPrint_GET_LIST", FATSDB.PDFsSalesReturnPrint_GET_LIST)
router.get("/PDFsSalesReturnPrint_GET_BYID/:tblPDFsID", FATSDB.PDFsSalesReturnPrint_GET_BYID)
router.get("/PDFsSalesReturnReprint_GET_BYID/:tblPDFsID", FATSDB.PDFsSalesReturnReprint_GET_BYID)
router.get("/PDFsSalesReturnReprint_GET_LIST", FATSDB.PDFsSalesReturnReprint_GET_LIST)
router.get("/PDFsSummary_GET_LIST", FATSDB.PDFsSummary_GET_LIST)
router.get("/PDFsSummary_GET_BYID/:tblPDFsID", FATSDB.PDFsSummary_GET_BYID)
router.get("/QRCodeLogin_GET_BYID/:tblQRCodeLoginID", FATSDB.QRCodeLogin_GET_BYID)
router.get("/QRCodeLogin_GET_LIST", FATSDB.QRCodeLogin_GET_LIST)
router.get("/RequestDets_GET_LIST", FATSDB.RequestDets_GET_LIST)
router.get("/RequestDets_GET_BYID/:tblRequestMasterID", FATSDB.RequestDets_GET_BYID)
router.get("/RequestDetsSHP_GET_BYID/:tblRequestMasterID", FATSDB.RequestDetsSHP_GET_BYID)
router.get("/RequestDetsSHP_GET_LIST", FATSDB.RequestDetsSHP_GET_LIST)
router.get("/RequestMaster_GET_LIST", FATSDB.RequestMaster_GET_LIST)
router.get("/RequestMaster_GET_BYID/:tblRequestMasterID", FATSDB.RequestMaster_GET_BYID)
router.get("/RequestMasterSHP_GET_BYID/:tblRequestMasterID", FATSDB.RequestMasterSHP_GET_BYID)
router.get("/RequestMasterSHP_GET_LIST", FATSDB.RequestMasterSHP_GET_LIST)
router.get("/RouteDetails_GET_LIST", FATSDB.RouteDetails_GET_LIST)
router.get("/RouteDetails_GET_BYID/:tblRouteMasterID", FATSDB.RouteDetails_GET_BYID)
router.get("/RouteMasterData_GET_BYID/:tblRouteMasterDataID", FATSDB.RouteMasterData_GET_BYID)
router.get("/RouteMasterData_GET_LIST", FATSDB.RouteMasterData_GET_LIST)
router.get("/RouteMasterPlan_GET_LIST", FATSDB.RouteMasterPlan_GET_LIST)
router.get("/RouteMasterPlan_GET_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlan_GET_BYID)
router.get("/RouteMasterPlan1_GET_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlan1_GET_BYID)
router.get("/RouteMasterPlan1_GET_LIST", FATSDB.RouteMasterPlan1_GET_LIST)
router.get("/RouteMasterPlanDownloaded_GET_LIST", FATSDB.RouteMasterPlanDownloaded_GET_LIST)
router.get("/RouteMasterPlanDownloaded_GET_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlanDownloaded_GET_BYID)
router.get("/SalesCustomers_GET_BYID/:tblSalesCustomersID", FATSDB.SalesCustomers_GET_BYID)
router.get("/SalesCustomers_GET_LIST", FATSDB.SalesCustomers_GET_LIST)
router.get("/SalesCustomersReturn_GET_LIST", FATSDB.SalesCustomersReturn_GET_LIST)
router.get("/SalesCustomersReturn_GET_BYID/:tblSalesCustomersID", FATSDB.SalesCustomersReturn_GET_BYID)
router.get("/SalesInvoiceDets_GET_BYID/:tblSalesInvoiceMID", FATSDB.SalesInvoiceDets_GET_BYID)
router.get("/SalesInvoiceDets_GET_LIST", FATSDB.SalesInvoiceDets_GET_LIST)
router.get("/SalesInvoiceM_GET_LIST", FATSDB.SalesInvoiceM_GET_LIST)
router.get("/SalesInvoiceM_GET_BYID/:tblSalesInvoiceMID", FATSDB.SalesInvoiceM_GET_BYID)
router.get("/SalesInvoiceMList_GET_BYID/:tblSalesInvoiceMListID", FATSDB.SalesInvoiceMList_GET_BYID)
router.get("/SalesInvoiceMList_GET_LIST", FATSDB.SalesInvoiceMList_GET_LIST)
router.get("/SalesManConfirmedDetsView_GET_BYID/:tblSalesInvoiceMID", FATSDB.SalesManConfirmedDetsView_GET_BYID)
router.get("/SalesManConfirmedDetsView_GET_LIST", FATSDB.SalesManConfirmedDetsView_GET_LIST)
router.get("/SalesManConfirmedOrderDets_GET_BYID/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDets_GET_BYID)
router.get("/SalesManConfirmedOrderDets_GET_LIST", FATSDB.SalesManConfirmedOrderDets_GET_LIST)
router.get("/SalesManConfirmedOrderDetsSelected_GET_LIST", FATSDB.SalesManConfirmedOrderDetsSelected_GET_LIST)
router.get("/SalesManConfirmedOrderDetsSelected_GET_BYID/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDetsSelected_GET_BYID)
router.get("/SalesManConfirmedOrdersM_GET_BYID/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersM_GET_BYID)
router.get("/SalesManConfirmedOrdersM_GET_LIST", FATSDB.SalesManConfirmedOrdersM_GET_LIST)
router.get("/SalesManConfirmedOrdersMSelected_GET_LIST", FATSDB.SalesManConfirmedOrdersMSelected_GET_LIST)
router.get("/SalesManConfirmedOrdersMSelected_GET_BYID/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersMSelected_GET_BYID)
router.get("/SalesOrder_GET_BYID/:tblSalesOrderID", FATSDB.SalesOrder_GET_BYID)
router.get("/SalesOrder_GET_LIST", FATSDB.SalesOrder_GET_LIST)
router.get("/SalesOrderDets_GET_LIST", FATSDB.SalesOrderDets_GET_LIST)
router.get("/SalesOrderDets_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDets_GET_BYID)
router.get("/SalesOrderDetsM_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsM_GET_BYID)
router.get("/SalesOrderDetsM_GET_LIST", FATSDB.SalesOrderDetsM_GET_LIST)
router.get("/SalesOrderDetsMPrint_GET_LIST", FATSDB.SalesOrderDetsMPrint_GET_LIST)
router.get("/SalesOrderDetsMPrint_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrint_GET_BYID)
router.get("/SalesOrderDetsMPrintCollection_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintCollection_GET_BYID)
router.get("/SalesOrderDetsMPrintCollection_GET_LIST", FATSDB.SalesOrderDetsMPrintCollection_GET_LIST)
router.get("/SalesOrderDetsMPrintCollectionR_GET_LIST", FATSDB.SalesOrderDetsMPrintCollectionR_GET_LIST)
router.get("/SalesOrderDetsMPrintCollectionR_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintCollectionR_GET_BYID)
router.get("/SalesOrderDetsMPrintDN_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDN_GET_BYID)
router.get("/SalesOrderDetsMPrintDN_GET_LIST", FATSDB.SalesOrderDetsMPrintDN_GET_LIST)
router.get("/SalesOrderDetsMPrintDSI_GET_LIST", FATSDB.SalesOrderDetsMPrintDSI_GET_LIST)
router.get("/SalesOrderDetsMPrintDSI_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDSI_GET_BYID)
router.get("/SalesOrderDetsMPrintR_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintR_GET_BYID)
router.get("/SalesOrderDetsMPrintR_GET_LIST", FATSDB.SalesOrderDetsMPrintR_GET_LIST)
router.get("/SalesOrderDetsMPrintRSReturn_GET_LIST", FATSDB.SalesOrderDetsMPrintRSReturn_GET_LIST)
router.get("/SalesOrderDetsMPrintRSReturn_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintRSReturn_GET_BYID)
router.get("/SalesOrderDetsMPrintRSReturnInvoice_GET_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsMPrintRSReturnInvoice_GET_BYID)
router.get("/SalesOrderDetsMPrintRSReturnInvoice_GET_LIST", FATSDB.SalesOrderDetsMPrintRSReturnInvoice_GET_LIST)
router.get("/SalesOrderDetsViewInvoiceLine_GET_LIST", FATSDB.SalesOrderDetsViewInvoiceLine_GET_LIST)
router.get("/SalesOrderDetsViewInvoiceLine_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsViewInvoiceLine_GET_BYID)
router.get("/SalesOrderDetsViewInvoiceLine1_GET_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsViewInvoiceLine1_GET_BYID)
router.get("/SalesOrderDetsViewInvoiceLine1_GET_LIST", FATSDB.SalesOrderDetsViewInvoiceLine1_GET_LIST)
router.get("/SalesOrderfromERPM_GET_LIST", FATSDB.SalesOrderfromERPM_GET_LIST)
router.get("/SalesOrderfromERPM_GET_BYID/:tblSalesInvoiceMID", FATSDB.SalesOrderfromERPM_GET_BYID)
router.get("/SalesOrderM_GET_BYID/:tblSalesOrderID", FATSDB.SalesOrderM_GET_BYID)
router.get("/SalesOrderM_GET_LIST",FATSDB.SalesOrderM_GET_LIST)
router.get("/SalesOrderMPosted_GET_LIST", FATSDB.SalesOrderMPosted_GET_LIST)
router.get("/SalesOrderMPosted_GET_BYID/:tblSalesOrderID", FATSDB.SalesOrderMPosted_GET_BYID)
router.get("/ShipmentGLNTracking_GET_BYID/:tblRequestMasterID", FATSDB.ShipmentGLNTracking_GET_BYID)
router.get("/ShipmentGLNTracking_GET_LIST", FATSDB.ShipmentGLNTracking_GET_LIST)
router.get("/StockRequestVan_GET_LIST", FATSDB.StockRequestVan_GET_LIST)
router.get("/StockRequestVan_GET_BYID/:tblItemMasterID", FATSDB.StockRequestVan_GET_BYID)
router.get("/StocksOnVan_GET_BYID/:tblItemMasterID", FATSDB.StocksOnVan_GET_BYID)
router.get("/StocksOnVan_GET_LIST", FATSDB.StocksOnVan_GET_LIST)
router.get("/StocksOnVanPrint_GET_LIST", FATSDB.StocksOnVanPrint_GET_LIST)
router.get("/StocksOnVanPrint_GET_BYID/:tblItemMasterID", FATSDB.StocksOnVanPrint_GET_BYID)
router.get("/SysNo_GET_BYID/:TblSysNoID", FATSDB.SysNo_GET_BYID)
router.get("/SysNo_GET_LIST", FATSDB.SysNo_GET_LIST)
router.get("/SysNoCounter_GET_LIST", FATSDB.SysNoCounter_GET_LIST)
router.get("/SysNoCounter_GET_BYID/:TblSysNoCounterID", FATSDB.SysNoCounter_GET_BYID)
router.get("/UsersLoggedIn_GET_BYID/:tblVersionNoID", FATSDB.UsersLoggedIn_GET_BYID)
router.get("/UsersLoggedIn_GET_LIST", FATSDB.UsersLoggedIn_GET_LIST)
router.get("/UsersLoginSalesMan_GET_LIST", FATSDB.UsersLoginSalesMan_GET_LIST)
router.get("/UsersLoginSalesMan_GET_BYID/:tblUsersLoginSalesManID", FATSDB.UsersLoginSalesMan_GET_BYID)
router.get("/VanMaster_GET_BYID/:tblVanMasterID", FATSDB.VanMaster_GET_BYID)
router.get("/VanMaster_GET_LIST", FATSDB.VanMaster_GET_LIST)
router.get("/VehicleConditions_GET_LIST", FATSDB.VehicleConditions_GET_LIST)
router.get("/VehicleConditions_GET_BYID/:tblVehiclePhotosID", FATSDB.VehicleConditions_GET_BYID)
router.get("/VehiclePhotos_GET_BYID/:tblVehiclePhotosID", FATSDB.VehiclePhotos_GET_BYID)
router.get("/VehiclePhotos_GET_LIST",FATSDB.VehiclePhotos_GET_LIST)
//------------------------------------------------------------------------------
//-----------------------------------PUT_API-------------------------------------
router.put("/apt_Put/:APTID", cpUpload, FATSDB.apt_Put)
router.put("/aptbckgrd_Put/:APTBckgrdID", FATSDB.aptbckgrd_Put)
router.put("/contact_Put/:ContactID", cpUpload, FATSDB.contact_Put)
router.put("/TransactionSummary_Put/:TblSysNoCounterID", FATSDB.TransactionSummary_Put)
router.put("/TransactionSummaryList_Put/:TblSysNoCounterID", FATSDB.TransactionSummaryList_Put)
router.put("/TransactionSummaryPrint_Put/:TblSysNoCounterID", FATSDB.TransactionSummaryPrint_Put)
router.put("/TransactionSummarytmp_Put/:TblSysNoCounterID", FATSDB.TransactionSummarytmp_Put)
router.put("/CardTypes_Put/:tblItemBarcodesID", FATSDB.CardTypes_Put)
router.put("/Companies_Put/:tblCompaniesID", FATSDB.Companies_Put)
router.put("/Customers_Put/:TblCustomersID", FATSDB.Customers_Put)
router.put("/FEMembers_Put/:tblLIMembersID", FATSDB.FEMembers_Put)
router.put("/ItemBarcodes_Put/:tblItemBarcodesID", FATSDB.ItemBarcodes_Put)
router.put("/ItemBarcodesOnVan_Put/:tblItemBarcodesID", FATSDB.ItemBarcodesOnVan_Put)
router.put("/ItemBarcodesReturns_Put/:tblItemBarcodesID", FATSDB.ItemBarcodesReturns_Put)
router.put("/ItemBarcodesTmp_Put/:tblItemBarcodesID", FATSDB.ItemBarcodesTmp_Put)
router.put("/ItemMaster_Put/:tblItemMasterID", cpUpload, FATSDB.ItemMaster_Put)
router.put("/LIMembers_Put/:tblLIMembersID", FATSDB.LIMembers_Put)
router.put("/MemberProducts_Put/:ProductID", FATSDB.MemberProducts_Put)
router.put("/Members_Put/:MemberID", FATSDB.Members_Put)
router.put("/PDFs_Put/:tblPDFsID", cpUpload, FATSDB.PDFs_Put)
router.put("/PDFsRPrintInvoice_Put/:tblPDFsID", cpUpload, FATSDB.PDFsRPrintInvoice_Put)
router.put("/PDFsRPrintInvoiceDirect_Put/:tblPDFsID", cpUpload, FATSDB.PDFsRPrintInvoiceDirect_Put)
router.put("/PDFsSalesCollectionPrint_Put/:tblPDFsID", cpUpload, FATSDB.PDFsSalesCollectionPrint_Put)
router.put("/PDFsSalesCollectionReprint_Put/:tblPDFsID", cpUpload, FATSDB.PDFsSalesCollectionReprint_Put)
router.put("/PDFsSalesReturnPrint_Put/:tblPDFsID", cpUpload, FATSDB.PDFsSalesReturnPrint_Put)
router.put("/PDFsSalesReturnReprint_Put/:tblPDFsID", cpUpload, FATSDB.PDFsSalesReturnReprint_Put)
router.put("/PDFsSummary_Put/:tblPDFsID", FATSDB.PDFsSummary_Put)
router.put("/QRCodeLogin_Put/:tblQRCodeLoginID", FATSDB.QRCodeLogin_Put)
router.put("/RequestDets_Put/:tblRequestMasterID", cpUpload, FATSDB.RequestDets_Put)
router.put("/RequestDetsSHP_Put/:tblRequestMasterID", cpUpload, FATSDB.RequestDetsSHP_Put)
router.put("/RequestMaster_Put/:tblRequestMasterID", FATSDB.RequestMaster_Put)
router.put("/RequestMasterSHP_Put/:tblRequestMasterID", FATSDB.RequestMasterSHP_Put)
router.put("/RouteDetails_Put/:tblRouteMasterID", FATSDB.RouteDetails_Put)
router.put("/RouteMasterData_Put/:tblRouteMasterDataID", FATSDB.RouteMasterData_Put)
router.put("/RouteMasterPlan_Put/:tblRouteMasterID", FATSDB.RouteMasterPlan_Put)
router.put("/RouteMasterPlan1_Put/:tblRouteMasterID",FATSDB.RouteMasterPlan1_Put)
router.put("/RouteMasterPlanDownloaded_Put/:tblRouteMasterID", FATSDB.RouteMasterPlanDownloaded_Put)
router.put("/SalesCustomers_Put/:tblSalesCustomersID", FATSDB.SalesCustomers_Put)
router.put("/SalesCustomersReturn_Put/:tblSalesCustomersID", FATSDB.SalesCustomersReturn_Put)
router.put("/SalesInvoiceDets_Put/:tblSalesInvoiceMID", FATSDB.SalesInvoiceDets_Put)
router.put("/SalesInvoiceM_Put/:tblSalesInvoiceMID", FATSDB.SalesInvoiceM_Put)
router.put("/SalesInvoiceMList_Put/:tblSalesInvoiceMListID", FATSDB.SalesInvoiceMList_Put)
router.put("/SalesManConfirmedDetsView_Put/:tblSalesInvoiceMID", FATSDB.SalesManConfirmedDetsView_Put)
router.put("/SalesManConfirmedOrderDets_Put/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDets_Put)
router.put("/SalesManConfirmedOrderDetsSelected_Put/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDetsSelected_Put)
router.put("/SalesManConfirmedOrdersM_Put/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersM_Put)
router.put("/SalesManConfirmedOrdersMSelected_Put/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersMSelected_Put)
router.put("/SalesOrder_Put/:tblSalesOrderID", FATSDB.SalesOrder_Put)
router.put("/SalesOrderDets_Put/:tblRouteMasterID", FATSDB.SalesOrderDets_Put)
router.put("/SalesOrderDetsM_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsM_Put)
router.put("/SalesOrderDetsMPrint_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrint_Put)
router.put("/SalesOrderDetsMPrintCollection_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintCollection_Put)
router.put("/SalesOrderDetsMPrintCollectionR_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintCollectionR_Put)
router.put("/SalesOrderDetsMPrintDN_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDN_Put)
router.put("/SalesOrderDetsMPrintDSI_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDSI_Put)
router.put("/SalesOrderDetsMPrintR_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintR_Put)
router.put("/SalesOrderDetsMPrintRSReturn_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintRSReturn_Put)
router.put("/SalesOrderDetsMPrintRSReturnInvoice_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintRSReturnInvoice_Put)
router.put("/SalesOrderDetsViewInvoiceLine_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsViewInvoiceLine_Put)
router.put("/SalesOrderDetsViewInvoiceLine1_Put/:tblRouteMasterID", FATSDB.SalesOrderDetsViewInvoiceLine1_Put)
router.put("/SalesOrderfromERPM_Put/:tblSalesInvoiceMID", FATSDB.SalesOrderfromERPM_Put)
router.put("/SalesOrderM_Put/:tblSalesOrderID", FATSDB.SalesOrderM_Put)
router.put("/SalesOrderMPosted_Put/:tblSalesOrderID", FATSDB.SalesOrderMPosted_Put)
router.put("/ShipmentGLNTracking_Put/:tblRequestMasterID", FATSDB.ShipmentGLNTracking_Put)
router.put("/StockRequestVan_Put/:tblItemMasterID", FATSDB.StockRequestVan_Put)
router.put("/StocksOnVan_Put/:tblItemMasterID", FATSDB.StocksOnVan_Put)
router.put("/StocksOnVanPrint_Put/:tblItemMasterID", FATSDB.StocksOnVanPrint_Put)
router.put("/SysNo_Put/:TblSysNoID", FATSDB.SysNo_Put)
router.put("/SysNoCounter_Put/:TblSysNoCounterID", FATSDB.SysNoCounter_Put)
router.put("/UsersLoggedIn_Put/:tblVersionNoID", FATSDB.UsersLoggedIn_Put)
router.put("/UsersLoginSalesMan_Put/:tblUsersLoginSalesManID", FATSDB.UsersLoginSalesMan_Put)
router.put("/VanMaster_Put/:tblVanMasterID", cpUpload, FATSDB.VanMaster_Put)
router.put("/VehiclePhotosID_put/:tblVehiclePhotosID", FATSDB.VehiclePhotosID_put)
router.put("/VehiclePhotos_Put/:tblVehiclePhotosID",cpUpload, FATSDB.VehiclePhotos_Put)
//---------------------------------------------------------------------------------------------------------------

//-----------------------------------DELETE_API------------------------------------------------------------------
router.delete("/apt_DELETE_BYID/:APTID", FATSDB.apt_DELETE_BYID)
router.delete("/aptbckgrd_DELETE_BYID/:APTBckgrdID", FATSDB.aptbckgrd_DELETE_BYID)
router.delete("/contact_DELETE_BYID/:ContactID", FATSDB.contact_DELETE_BYID)
router.delete("/TransactionSummary_DELETE_BYID/:TblSysNoCounterID", FATSDB.TransactionSummary_DELETE_BYID)
router.delete("/TransactionSummaryList_DELETE_BYID/:TblSysNoCounterID", FATSDB.TransactionSummaryList_DELETE_BYID)
router.delete("/TransactionSummaryPrint_DELETE_BYID/:TblSysNoCounterID", FATSDB.TransactionSummaryPrint_DELETE_BYID)
router.delete("/TransactionSummarytmp_DELETE_BYID/:TblSysNoCounterID", FATSDB.TransactionSummarytmp_DELETE_BYID)
router.delete("/CardTypes_DELETE_BYID/:tblItemBarcodesID", FATSDB.CardTypes_DELETE_BYID)
router.delete("/Companies_DELETE_BYID/:tblCompaniesID", FATSDB.Companies_DELETE_BYID)
router.delete("/Customers_DELETE_BYID/:TblCustomersID", FATSDB.Customers_DELETE_BYID)
router.delete("/FEMembers_DELETE_BYID/:tblLIMembersID", FATSDB.FEMembers_DELETE_BYID)
router.delete("/ItemBarcodes_DELETE_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodes_DELETE_BYID)
router.delete("/ItemBarcodesOnVan_DELETE_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesOnVan_DELETE_BYID)
router.delete("/ItemBarcodesReturns_DELETE_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesReturns_DELETE_BYID)
router.delete("/ItemBarcodesTmp_DELETE_BYID/:tblItemBarcodesID", FATSDB.ItemBarcodesTmp_DELETE_BYID)
router.delete("/ItemMaster_DELETE_BYID/:tblItemMasterID", FATSDB.ItemMaster_DELETE_BYID)
router.delete("/LIMembers_DELETE_BYID/:tblLIMembersID", FATSDB.LIMembers_DELETE_BYID)
router.delete("/MemberProducts_DELETE_BYID/:ProductID", FATSDB.MemberProducts_DELETE_BYID)
router.delete("/Members_DELETE_BYID/:MemberID", FATSDB.Members_DELETE_BYID)
router.delete("/PDFs_DELETE_BYID/:tblPDFsID", FATSDB.PDFs_DELETE_BYID)
router.delete("/PDFsRPrintInvoice_DELETE_BYID/:tblPDFsID", FATSDB.PDFsRPrintInvoice_DELETE_BYID)
router.delete("/PDFsRPrintInvoiceDirect_DELETE_BYID/:tblPDFsID", FATSDB.PDFsRPrintInvoiceDirect_DELETE_BYID)
router.delete("/PDFsSalesCollectionPrint_DELETE_BYID/:tblPDFsID", FATSDB.PDFsSalesCollectionPrint_DELETE_BYID)
router.delete("/PDFsSalesCollectionReprint_DELETE_BYID/:tblPDFsID", FATSDB.PDFsSalesCollectionReprint_DELETE_BYID)
router.delete("/PDFsSalesReturnPrint_DELETE_BYID/:tblPDFsID", FATSDB.PDFsSalesReturnPrint_DELETE_BYID)
router.delete("/PDFsSalesReturnReprint_DELETE_BYID/:tblPDFsID", FATSDB.PDFsSalesReturnReprint_DELETE_BYID)
router.delete("/PDFsSummary_DELETE_BYID/:tblPDFsID", FATSDB.PDFsSummary_DELETE_BYID)
router.delete("/QRCodeLogin_DELETE_BYID/:tblQRCodeLoginID", FATSDB.QRCodeLogin_DELETE_BYID)
router.delete("/RequestDets_DELETE_BYID/:tblRequestMasterID", FATSDB.RequestDets_DELETE_BYID)
router.delete("/RequestDetsSHP_DELETE_BYID/:tblRequestMasterID", FATSDB.RequestDetsSHP_DELETE_BYID)
router.delete("/RequestMaster_DELETE_BYID/:tblRequestMasterID", FATSDB.RequestMaster_DELETE_BYID)
router.delete("/RequestMasterSHP_DELETE_BYID/:tblRequestMasterID", FATSDB.RequestMasterSHP_DELETE_BYID)
router.delete("/RouteDetails_DELETE_BYID/:tblRouteMasterID", FATSDB.RouteDetails_DELETE_BYID)
router.delete("/RouteMasterData_DELETE_BYID/:tblRouteMasterDataID", FATSDB.RouteMasterData_DELETE_BYID)
router.delete("/RouteMasterPlan_DELETE_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlan_DELETE_BYID)
router.delete("/RouteMasterPlan1_DELETE_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlan1_DELETE_BYID)
router.delete("/RouteMasterPlanDownloaded_DELETE_BYID/:tblRouteMasterID", FATSDB.RouteMasterPlanDownloaded_DELETE_BYID)
router.delete("/SalesCustomers_DELETE_BYID/:tblSalesCustomersID", FATSDB.SalesCustomers_DELETE_BYID)
router.delete("/SalesCustomersReturn_DELETE_BYID/:tblSalesCustomersID", FATSDB.SalesCustomersReturn_DELETE_BYID)
router.delete("/SalesInvoiceDets_DELETE_BYID/:tblSalesInvoiceMID", FATSDB.SalesInvoiceDets_DELETE_BYID)
router.delete("/SalesInvoiceM_DELETE_BYID/:tblSalesInvoiceMID", FATSDB.SalesInvoiceM_DELETE_BYID)
router.delete("/SalesInvoiceMList_DELETE_BYID/:tblSalesInvoiceMListID", FATSDB.SalesInvoiceMList_DELETE_BYID)
router.delete("/SalesManConfirmedDetsView_DELETE_BYID/:tblSalesInvoiceMID", FATSDB.SalesManConfirmedDetsView_DELETE_BYID)
router.delete("/SalesManConfirmedOrderDets_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDets_DELETE_BYID)
router.delete("/SalesManConfirmedOrderDetsSelected_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesManConfirmedOrderDetsSelected_DELETE_BYID)
router.delete("/SalesManConfirmedOrdersM_DELETE_BYID/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersM_DELETE_BYID)
router.delete("/SalesManConfirmedOrdersMSelected_DELETE_BYID/:tblSalesOrderID", FATSDB.SalesManConfirmedOrdersMSelected_DELETE_BYID)
router.delete("/SalesOrder_DELETE_BYID/:tblSalesOrderID", FATSDB.SalesOrder_DELETE_BYID)
router.delete("/SalesOrderDets_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDets_DELETE_BYID)
router.delete("/SalesOrderDetsM_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsM_DELETE_BYID)
router.delete("/SalesOrderDetsMPrint_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrint_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintCollection_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsMPrintCollection_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintCollectionR_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsMPrintCollectionR_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintDN_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDN_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintDSI_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintDSI_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintR_DELETE_BYID/:tblRouteMasterID", FATSDB.SalesOrderDetsMPrintR_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintRSReturn_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsMPrintRSReturn_DELETE_BYID)
router.delete("/SalesOrderDetsMPrintRSReturnInvoice_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsMPrintRSReturnInvoice_DELETE_BYID)
router.delete("/SalesOrderDetsViewInvoiceLine_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsViewInvoiceLine_DELETE_BYID)
router.delete("/SalesOrderDetsViewInvoiceLine1_DELETE_BYID/:tblRouteMasterID",FATSDB.SalesOrderDetsViewInvoiceLine1_DELETE_BYID)
router.delete("/SalesOrderfromERPM_DELETE_BYID/:tblSalesInvoiceMID", FATSDB.SalesOrderfromERPM_DELETE_BYID)
router.delete("/SalesOrderM_DELETE_BYID/:tblSalesOrderID", FATSDB.SalesOrderM_DELETE_BYID)
router.delete("/SalesOrderMPosted_DELETE_BYID/:tblSalesOrderID", FATSDB.SalesOrderMPosted_DELETE_BYID)
router.delete("/ShipmentGLNTracking_DELETE_BYID/:tblRequestMasterID", FATSDB.ShipmentGLNTracking_DELETE_BYID)
router.delete("/StockRequestVan_DELETE_BYID/:tblItemMasterID", FATSDB.StockRequestVan_DELETE_BYID)
router.delete("/StocksOnVan_DELETE_BYID/:tblItemMasterID", FATSDB.StocksOnVan_DELETE_BYID)
router.delete("/StocksOnVanPrint_DELETE_BYID/:tblItemMasterID", FATSDB.StocksOnVanPrint_DELETE_BYID)
router.delete("/SysNo_DELETE_BYID/:TblSysNoID", FATSDB.SysNo_DELETE_BYID)
router.delete("/SysNoCounter_DELETE_BYID/:TblSysNoCounterID", FATSDB.SysNoCounter_DELETE_BYID)
router.delete("/UsersLoggedIn_DELETE_BYID/:tblVersionNoID", FATSDB.UsersLoggedIn_DELETE_BYID)
router.delete("/UsersLoginSalesMan_DELETE_BYID/:tblUsersLoginSalesManID", FATSDB.UsersLoginSalesMan_DELETE_BYID)
router.delete("/VanMaster_DELETE_BYID/:tblVanMasterID", FATSDB.VanMaster_DELETE_BYID)
router.delete("/VehicleConditions_DELETE_BYID/:tblVehiclePhotosID", FATSDB.VehicleConditions_DELETE_BYID)
router.delete("/VehiclePhotos_DELETE_BYID/:tblVehiclePhotosID",FATSDB.VehiclePhotos_DELETE_BYID)
//--------------------------------------------------------------------------------------------------------////
export default router;
