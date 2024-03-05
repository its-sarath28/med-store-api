const express = require("express");
const medicineRouter = express.Router();

const isLogin = require("../../middlewares/isLogin");

const {
  showMedicineController,
  addMedicineController,
  searchMedicineController,
  editMedicineController,
  deleteMedicineController,
} = require("../../controllers/medicineController");

//GET: /api/v1/medicine/show -> show all medicine
medicineRouter.get("/show", isLogin, showMedicineController);

//POST: /api/v1/medicine/add-medicine -> add a medicine
medicineRouter.post("/add-medicine", isLogin, addMedicineController);

//GET: /api/v1/medicine/search-medicine -> search a medicine
medicineRouter.get("/search-medicine", isLogin, searchMedicineController);

//PUT: /api/v1/medicine/edit-medicine/:id -> update a medicine
medicineRouter.put("/edit-medicine/:id", isLogin, editMedicineController);

//DELETE: /api/v1/medicine/delete-medicine/:id -> delete a medicine
medicineRouter.delete(
  "/delete-medicine/:id",
  isLogin,
  deleteMedicineController
);

module.exports = medicineRouter;
