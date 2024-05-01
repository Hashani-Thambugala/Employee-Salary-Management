import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './allOTsalary.css';
import jsPDF from "jspdf";
import "jspdf-autotable";

//import './allSalary.css'


export default function AllSpecialSalary() {

    const[specialLeavingSalaries,setSpecialLeavingSalaries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        function getSpecialLeavingSalaries(){
            axios.get("http://localhost:8070/employee/allSpecialsalaries").then((res) => {
                setSpecialLeavingSalaries(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }

        getSpecialLeavingSalaries();

    }, [])

    const generatePDF = () => {
        const doc = new jsPDF(); // Create a new jsPDF instance

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
        const titleText = "Employee Special Salary Details";
        const titleWidth = doc.getStringUnitWidth(titleText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const titleX = (doc.internal.pageSize.width - titleWidth) / 2; // Center the title horizontally
        const titleY = 70; // Vertical position for the title
        doc.text(titleText, titleX, titleY); // Add table title in the middle of the page

        // Define table headers
        const headers = ["#", "Name", "Position", "Email", "Salary", "No of Leaving Days", "Special Leaving Net Salary"];

        // Define table rows
        const rows = specialLeavingSalaries.map((employee, index) => [
            index + 1,
            employee.name,
            employee.position,
            employee.email,
            employee.salary,
            employee.noOFleavingdates,
            employee.leavingNetnetSalary,
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

        // Save the PDF with filename "employee_special_salary_report.pdf"
        doc.save("employee_special_salary_report.pdf");
    };

    const filteredSpecialLeavingSalaries = specialLeavingSalaries.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(id){


        axios.delete(`http://localhost:8070/employee/deleteSpecial/${id}`).then(() => {
        const newSpecialLeavingSalaries = specialLeavingSalaries.filter(Ot => Ot._id !==id )
        setSpecialLeavingSalaries(newSpecialLeavingSalaries);
    }).catch((error) => {
        alert(error.message);
    });
    }


    return(
        <div>
            <h1>All Employee Special Salary </h1>

            <div class="row height d-flex justify-content-center align-items-center">

              <div class="col-md-6">

                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>
                
              </div>
              
            </div>

            <Link to ={'/addSpecialLeavingSalary'}><button id="btnStart" type="button" class="btn btn-primary" data-toggle="modal" data-target="#formModal">Add New Special Salary </button></Link> 

            <table className="table">
                <thead>
                    <tr>
                        <th>
                            No
                        </th>  
                        <th>
                            Name
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Salary
                        </th>
                        <th>
                           No of Leaving Days
                        </th>
                        <th>
                            Special Leaving Net Salary
                        </th>
                        
                         <th>
                            Action
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    {
                       filteredSpecialLeavingSalaries.map((specialLeavingSalaries, index) => (
                           <tr key ={index} >
                                 <th>{index+1}</th> 
                                <td>
                                    {/* <Link to = {'/get/:id'} style ={{textDecoration:'none'}}> */}
                                    {specialLeavingSalaries.name}
                                    {/* </Link> */}
                                    
                                </td>
                                <td>{specialLeavingSalaries.position}</td>
                                <td>{specialLeavingSalaries.email}</td>
                                <td>{specialLeavingSalaries.salary}</td>
                                <td>{specialLeavingSalaries.noOFleavingdates}</td>
                                <td>{specialLeavingSalaries.leavingNetnetSalary}</td>

                             <td>
                              <Link to = {`/updateSpecial/${specialLeavingSalaries._id}`}><button className="btn btn-warning" style={{marginLeft: '5px'}}> Update</button></Link> 
                             <button className="btn btn-danger" style={{marginLeft: '5px'}} onClick={() => handleDelete(specialLeavingSalaries._id)}>Delete</button>
                             
                             <Link to = {`/getSpecial/${specialLeavingSalaries._id}`}><button className="btn btn-success" style={{marginLeft: '5px'}} > View</button></Link>
                             {/* <button>OThours</button> */}
                              </td>

                             
                            </tr>
                        ))
                    }
                   
                </tbody>
            </table>

             
             <button onClick={generatePDF} className="btn btn-info">Generate Report</button>

        </div>
    )
}
