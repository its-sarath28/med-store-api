const Medicine = require("../models/medicineModel");

const addMedicineController = async (req, res) => {
  const { medicineName, price, category } = req.body;
  try {
    const createMedicine = await Medicine.create({
      medicineName,
      price,
      category,
    });

    await createMedicine.save();

    res.json({
      status: "Success",
      data: createMedicine,
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

const showMedicineController = async (req, res) => {
  try {
    const allMedicines = await Medicine.find({});

    res.json({
      status: "Success",
      data: allMedicines,
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

const editMedicineController = async (req, res, next) => {
  const { medicineName, price, category } = req.body;
  try {
    const medicineToUpdate = await Medicine.findById(req.params.id);

    if (!medicineToUpdate) {
      return next(appError("No medicine found", 404));
    }

    await Medicine.findByIdAndUpdate(
      req.params.id,
      {
        medicineName,
        price,
        category,
      },
      {
        new: true,
      }
    );

    res.json({
      status: "Success",
      data: "Medicine updated successfully",
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

const deleteMedicineController = async (req, res, next) => {
  try {
    const medicineToDelete = await Medicine.findById(req.params.id);

    if (!medicineToDelete) {
      return next(appError("No medicine found", 404));
    }

    await Medicine.findByIdAndDelete(req.params.id);

    res.json({
      status: "Success",
      data: "Medicine deleted successfully",
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};
const searchMedicineController = async (req, res, next) => {
  try {
    const { medicineName } = req.query;

    const searchResults = await Medicine.find({
      medicineName: { $regex: medicineName, $options: "i" },
    });

    res.json({
      status: "Success",
      data: searchResults,
    });
  } catch (err) {
    console.log(err);
    next(appError(err.message));
  }
};

module.exports = {
  addMedicineController,
  showMedicineController,
  editMedicineController,
  deleteMedicineController,
  searchMedicineController,
};
