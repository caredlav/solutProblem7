const taskModel=require("../models/taskModel");

const homeController={
    getHome: async(req,res)=>{
        try {   
            const tasks=await taskModel.getTasks();
            res.render("home",{tasks: tasks});
        } catch (error) {
            console.log(error);
        }
    },
    addTask: async(req,res)=>{
        try {
            const taskInfo=req.body;
            await taskModel.newTask(taskInfo);
            res.redirect("/");
        } catch (error) {
         console.log(error);   
        }
    },
    getTaskDetail: async(req,res)=>{
        try {
            const taskId=req.params.id;
            const task=await taskModel.findTaskById(taskId);
            res.render("editTask",{task: task});
        } catch (error) {
            console.log(error);
        }
    },
    updateTask: async(req,res)=>{
        try {
            const taskId=req.params.id;
            const taskInfo=req.body;
            await taskModel.modifytask(taskId,taskInfo);
            res.redirect("/");
        } catch (error) {
            console.log(error);
        }
    },
    deleteTask: async(req,res)=>{
        const taskId=req.params.id;
        await taskModel.destroyTask(taskId);
        res.redirect("/");
    }
}

module.exports=homeController;