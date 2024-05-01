import CounterClass from './component/counterClass';
import CounterFunction from './component/counterFunction';
import './App.css';
// import './salary.css';
// import "./bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from './component/header';
// import AddStudent from './component/addStudent';
// import AllStudent from './component/AllEmployee';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Footer from './component/footer';
import Hello from './component/hello';
// import update from './component/updateNew';
// import StudentDeatails from './component/employeeDeatails';
// import Update from './component/Update';
import Update from './component/UpdateDetailes';
import StudentDetails from './component/employeeDeatails';
import AddEmployee from './component/addEmployee';
import AllEmployee from './component/AllEmployee';
import AddSalary from './component/addSalary';

import AllEmployeesalarydetailes from './component/AllSalary';

import Home from './component/home';
import EmployeeSalaryDetails from './component/employeeDeatails';
import AddOTSalary from './component/AddOTSalary';
import AllOTSalary from './component/allOTSalary';
import AdminHome from './component/AdminHome';
import AdminNavbar from './component/AdminNavbar';
import AllSpecialSalary from './component/allSpecialLeaving';
import AddSpecialSalary from './component/addSpecailLeaveSalary';
import UpdateOT from './component/updateOT';
import OTSalaryView from './component/viewOT';
import UpdateSpecial from './component/updateSpecial';
import SpecialSalaryView from './component/viewSpecial';



function App() {
  return (
    <Router>
     <div className="App">
       {/* <Home/>  */}
      {/* <h1>Hello React</h1>
      {/* <CounterClass />
      <CounterFunction /> */} 
      {/* <Header /> */}
      {/* <AllStudent /> */}
      <AdminNavbar/>
       <Routes> 
        <Route path ='/' exact Component={AdminHome}/>
      <Route path='/addSalary' exact Component={AddSalary}/>
        {/* <Route path='/' exact Component={AllSalary} />   */}
      <Route path='/updateSalary/:id' exact Component={Update} />
      <Route path='/get/:id' exact Component={EmployeeSalaryDetails}/>
      {/* <Route path='/addSalary' exact Component={AddSalary}/> */}
        <Route path='/allSalary' exact Component={AllEmployeesalarydetailes} /> 
        <Route path='/addOTSalary' exact Component={AddOTSalary}/>
        < Route path = '/allOTsalaries' exact Component={AllOTSalary}/>
        <Route path = '/allSpecialsalaries' exact Component={AllSpecialSalary}/>
        <Route path='/addSpecialLeavingSalary' exact Component={AddSpecialSalary}/>
        <Route path='/updateOt/:id' exact Component={UpdateOT}/>
        <Route path='/getOT/:id'exact Component={OTSalaryView}/>
        <Route path='/updateSpecial/:id' exact Component={UpdateSpecial}/>
        <Route path ='/getSpecial/:id' exact Component={SpecialSalaryView}/>
      
   

      
      
       </Routes> 
      {/* <AddStudent /> */}
      {/* <Hello /> */}
      {/* <Footer /> */}
      
     </div>
    </Router>
    
  );
}

export default App;
