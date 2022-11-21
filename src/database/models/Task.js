module.exports = (sequelize, dataTypes) => {
    const Task = sequelize.define(`Task`, {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: dataTypes.INTEGER(11),
        },
        task_name:{
            allowNull: false,
            type: dataTypes.STRING(45)
        },
        task_date:{
          allowNull: false,
          type: dataTypes.DATE
        },
        priority:{
          allowNull: false,
          type: dataTypes.STRING(10)
        },
        description: {
          allowNull: false,
          type: dataTypes.STRING(100)
        }
      },{
          tableName: `tasks`,
          timestamps: false,
      });
      return Task;
};