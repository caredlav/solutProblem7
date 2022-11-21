const taskdb=require("../database/models");

const taskModel={
  getTasks: async()=>{
    try {
      const taskList=await taskdb.Task.findAll();
      return taskList;
    } catch (error) {
      return error;
    }
  },
  newTask: async(taskInfo)=>{
    try {
      taskdb.Task.create({
        task_name: taskInfo.taskName,
        task_date: taskInfo.taskDate,
        priority: taskInfo.priority,
        description: taskInfo.description
      });
    } catch (error) {
      return error;
    }
  },
  findTaskById: async(taskId)=>{
    try {
      const taskToFind=await taskdb.Task.findByPk(taskId);
      return taskToFind;
    } catch (error) {
      return error;
    }
  },
  modifytask: async(taskId,taskInfo)=>{
    try {
      await taskdb.Task.update({
        task_name: taskInfo.taskName,
        task_date: taskInfo.taskDate,
        priority: taskInfo.priority,
        description: taskInfo.description
      },{
        where: {id: taskId}
      });
    } catch (error) {
      return error;
    }
  },
  destroyTask: async(taskId)=>{
    try {
      await taskdb.Task.destroy({
        where:{id: taskId}
      });
    } catch (error) {
      return error;
    }
  }
}

module.exports=taskModel;