import express from "express";
import { 
    addMaterial, 
    deleteMaterial, 
    findMaterialById, 
    getAllMaterial, 
    updateMaterial, 
    uploadAllData } from "../controller/materialController.js";
    
const router = express.Router();


router.post("/", addMaterial);
router.delete("/", deleteMaterial);
router.put("/", updateMaterial);
router.get("/", getAllMaterial);
router.post("/addallmaterial", uploadAllData);
router.get("/findmaterial", findMaterialById);

export default router;