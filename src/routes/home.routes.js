const express=require("express");
const router=express.Router();
const homeController=require("../controllers/homeController");

router.get("/",homeController.getHome);
router.post("/",homeController.addTask);
router.get("/update/:id",homeController.getTaskDetail);
router.put("/update/:id",homeController.updateTask);
router.delete("/delete/:id",homeController.deleteTask);

module.exports=router;