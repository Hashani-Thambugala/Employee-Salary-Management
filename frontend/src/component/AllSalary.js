import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {PDFViewer,Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import {useReactToPrint} from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";

import './allSalary.css'


export default function AllEmployeesalarydetailes() {

    const componentPDF = useRef();
    const[employeesalarydetailes,setEmployeesalarydetailes] = useState([]);
    const[searchTerm,setSearchTerm] = useState("");

    useEffect(() =>{
        function getEmployeesalarydetailes(){
            axios.get("http://localhost:8070/employee/allSalary").then((res) => {
                setEmployeesalarydetailes(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getEmployeesalarydetailes();

    }, [])

   
    
    const generatePDF = () => {
        const doc = new jsPDF(); // Create a new jsPDF instance
      
        // doc.addImage(salonLogo, "JPEG", 10, 10, 50, 50);
        
        // Add salon address
        doc.setFontSize(12);
        const salonAddressLines = [
          "E3, Isurupura",
          "Malabe",
          "Sri Lanka",
        ];
        salonAddressLines.forEach((line, index) => {
          const yPos = 30 + (index * 10); // Adjust spacing between lines
          doc.text(line, 150, yPos); // Add each line of the address (align right)
        });
      
        // Add table title "Employee Salary Details"
        doc.setFontSize(14);
        const titleText = "Employee Salary Details";
        const titleWidth = doc.getStringUnitWidth(titleText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const titleX = (doc.internal.pageSize.width - titleWidth) / 2; // Center the title horizontally
        const titleY = 70; // Vertical position for the title
        doc.text(titleText, titleX, titleY); // Add table title in the middle of the page
      
        // Define table headers
        const headers = ["#", "Name", "Position", "Email", "Gender", "Salary", "Tax Rate", "Net Salary"];
      
        // Define table rows
        const rows = filteredemployeesalarydetailes.map((employee, index) => [
          index + 1,
          employee.name,
          employee.position,
          employee.email,
          employee.gender,
          employee.salary,
          employee.tax,
          employee.netSalary,
        ]);
      
        // Set table position and styling
        const tableProps = {
          startY: titleY + 20, // Adjust startY value to move the table further down from the title
          margin: { horizontal: 10 },
          styles: { cellPadding: 5, fontSize: 10, cellWidth: "auto" },
          headStyles: { fillColor: [100, 100, 100], textColor: [255, 255, 255] },
          bodyStyles: { textColor: [0, 0, 0] },
        };
      
        // Add table to PDF
        doc.autoTable(headers, rows, tableProps);
      
        // Add manager's signature placeholder
        const signatureText = "Manager's Signature:";
        doc.text(".................................", 168, 280);
        const textWidth = doc.getStringUnitWidth(signatureText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const textX = doc.internal.pageSize.width - textWidth - 10; // Align to right, with margin
        const textY = doc.internal.pageSize.height - 10; // Bottom margin
        doc.text(textX, textY, signatureText);
      
        // Save the PDF with filename "employee_salary_report.pdf"
        doc.save("employee_salary_report.pdf");
      };

    const filteredemployeesalarydetailes = employeesalarydetailes.filter(employee => employee.name.toLowerCase().includes(searchTerm.toLowerCase()));



    // const genaratePDF = () =>{

    //     const styles = StyleSheet.create({

    //         page: {
    //             flexDirection: "row",
    //             backgroundColor: "#E4E4E4",
    //             padding: 10,
    //         },
    //         section: {
    //             margin: 10,
    //             padding: 10,
    //             flexGrow: 1,
    //         },
    //         header: {
    //             fontSize: 20,
    //             marginBottom: 10,
    //         },
    //         tableHeader: {
    //             fontWeight: "bold",
    //         },
    //         tableRow: {
    //             flexDirection: "row",
    //             borderBottomWidth: 1,
    //             borderBottomColor: "#000",
    //             alignItems: "center",
    //             height: 24,
    //             fontSize: 12,
    //         },
    //         tableCell: {
    //             width: "14.28%",
    //             borderRightWidth: 1,
    //             borderRightColor: "#000",
    //             paddingLeft: 8,
    //         },
    //         lastTableCell: {
    //             width: "14.28%",
    //             paddingLeft: 8,
    //         },
    //     });

    //     //render pdf
    //     const MyDocument = () => (

    //         <Document>
    //             <Page size="A4" style={styles.Page}>
    //                 <View style={styles.section}>
    //                     <Text style={styles.tableRow}>Employee salary detailes</Text>
    //                     <View style={styles.tableRow}>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>No</Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>Name</Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>Positon</Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>Gender</Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>Salary</Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>Tax </Text>
    //                         <Text style={[styles.tableCell, styles.tableHeader]}>NetSalary</Text>
    //                     </View>

    //                     {employeesalarydetailes.map((employeesalarydetailes, index) => (
    //                         <View key={index} style={styles.tableRow}>
    //                             <Text style={[styles.tableCell]}>{index+1}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.name}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.position}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.gender}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.salary}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.tax}</Text>
    //                             <Text style={[styles.tableCell]}>{employeesalarydetailes.netSalary}</Text>

    //                         </View>




    //                     ))}
                        
    //                 </View>



    //             </Page>
            
    //          </Document>            
           
    //     )


    //     //open pdf in a new tab

    //     const pdf = <PDFViewer><MyDocument/></PDFViewer>
    //     const blob = new Blob([pdf], {type:"application/pdf"});
    //     const url = URL.createObjectURL(blob);
       

    //     const a = document.createElement("a");
    //     a.href = url;
    //     a.download = "report.pdf";
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //     URL.revokeObjectURL(url);
                
    //}

    function handleDelete(id){


        axios.delete(`http://localhost:8070/employee/deleteSalary/${id}`).then(() => {
        const newEmployeesalarydetailes = employeesalarydetailes.filter(Emp => Emp._id !==id )
        setEmployeesalarydetailes(newEmployeesalarydetailes);
    }).catch((error) => {
        alert(error.message);
    });
    }


    
    return(
        <div className="responsive-table">
            <h1>All Employee Salary Details</h1>

            {/* <input type="text" placeholder="Search by name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/> */}

            <div class="row height d-flex justify-content-center align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>
                
              </div>
              
            </div>

            <Link to ={'/addSalary'}><button id="btnStart" type="button" class="btn btn-primary" style={{marginLeft: '5px'}}>Add New Salary Detailes</button></Link>
                
            <div ref={componentPDF} style={{width:'100%'}} className="container1">
            <table className="table1" style={{justifyContent:"center"}}>
                <thead>
                    <tr>
                        <th classname="col col-1">
                            No
                        </th>  
                        <th classname="col col-2">
                            Name
                        </th>
                        <th classname="col col-3">
                            Position
                        </th>
                        <th classname="col col-4">
                            Email
                        </th >
                        <th classname="col col-4">
                            Gender
                        </th>
                        <th classname="col col-4">
                            Salary
                        </th>
                        <th classname="col col-1">
                            Tax Rate
                        </th>
                        <th classname="col col-1">
                            Net Salary
                        </th>
                        
                         <th classname="col col-1">
                            Action
                        </th> 
                    </tr>
                </thead>
                <tbody >
                    {
                       filteredemployeesalarydetailes.map((employeesalarydetailes, index) => (
                           <tr key ={index} >
                                 <th>{index+1}</th> 
                                <td >
                                    {/* <Link to = {'/get/:id'} style ={{textDecoration:'none'}}> */}
                                    {employeesalarydetailes.name}
                                    {/* </Link> */}
                                    
                                </td>
                                <td >{employeesalarydetailes.position}</td>
                                <td >{employeesalarydetailes.email}</td>
                                <td >{employeesalarydetailes.gender}</td>
                                <td >{employeesalarydetailes.salary}</td>
                                <td >{employeesalarydetailes.tax}</td>
                                <td >{employeesalarydetailes.netSalary}</td>

                             <td >
                              <Link to = {`/updateSalary/${employeesalarydetailes._id}`}><button className="btn btn-warning" style={{marginLeft: '5px'}}> Update</button></Link> 
                             <button className="btn btn-danger" style={{marginLeft: '5px'}} onClick={() => handleDelete(employeesalarydetailes._id)}>Delete</button>
                             
                             <Link to = {`/get/${employeesalarydetailes._id}`} style={{marginLeft: '5px'}}><button className="btn btn-success"> View</button></Link>

                             
                            
                              </td>

                             
                            </tr>
                        ))
                    }
                   
                </tbody>
             </table>
            </div>

            

                <button onClick={generatePDF} className="btn btn-info" style={{marginLeft: '5px', marginTop:'15px'}}> Genarate Report </button> 

             <Link to ={'/allOTsalaries'}><button  style={{marginLeft: '5px',marginTop:'15px'}} class="btn btn-secondary" >OThours</button> </Link>
             <Link to ={'/allSpecialsalaries'}><button  style={{marginLeft: '5px',marginTop:'15px'}} class="btn btn-secondary" >Special leavings</button> </Link>
        </div>
    )

}
