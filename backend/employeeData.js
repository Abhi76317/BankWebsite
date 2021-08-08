const {Sequelize, DataTypes} = require('sequelize');

const connection = new Sequelize('bank_data', 'monu', '12345', {
    dialect: 'mysql'
  })

const User = connection.define('employee',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fatherName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    motherName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        defaultValue: "male"
    },
    dob:{
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    },
    email:{
        type:DataTypes.STRING,
        allowNull: true
    },
    mobile:{
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    altMobile:{
        type: DataTypes.DOUBLE,
        allowNull: true
    },
    perAddress:{
        type: DataTypes.STRING,
        allowNull: true
    },
    cortrAddress:{
        type: DataTypes.STRING,
        allowNull: true
    },
    userID:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING
    }
})

connection.sync({force:true}).then(()=>{
    console.log("table created successfully");
    app.listen(port, ()=>{
        console.log("Running server on port "+port);
    })
})
