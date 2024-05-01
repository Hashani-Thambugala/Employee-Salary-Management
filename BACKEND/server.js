require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
// const host = '127.0.0.1';

const PORT = process.env.PORT || 8070 ;

app.use(cors());
app.use(bodyparser.json());

// const uri = 'mongodb+srv://Hashani:123456Hashani@cluster0.5cmtrit.mongodb.net/?retryWrites=true&w=majority';

// const connect = async() =>{
//     try {
//         await mongoose.connect(uri);
//         console.log('Connect to MongDb');
//     } catch (error) {
//         console.log('MongoDB Error:',error);
//     }
// };

// connect();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database successfully connected");
})
    .catch((error)=>{
        console.log(error.messege);
    });



const  server = app.listen(PORT,() => {
    console.log('Node server is listening to ${port}');
});

// const employeeRouter = require("./routes/employees.js");
// app.use("/employee",employeeRouter);

 const employeesalarydetailesRouter = require("./routes/employeeSalaries.js");
 app.use("/employee",employeesalarydetailesRouter);

 const otSalariesRouter = require("./routes/otSalaries.js");
 app.use("/employee",otSalariesRouter);

 const  SpecialLeavingSalariesRouter = require("./routes/specialLeavingSalaries.js");
 app.use("/employee",SpecialLeavingSalariesRouter)




