import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import './navBar.css';



export default function AdminNavbar() {
    const [employeeDropdownOpen, setEmployeeDropdownOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
    const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);
    const [inventoryDropdownOpen, setInventoryDropdownOpen] = useState(false);


    const toggleEmployeeDropdown = () => setEmployeeDropdownOpen(!employeeDropdownOpen);
    const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);
    const toggleServiceDropdown = () => setServiceDropdownOpen(!serviceDropdownOpen);
    const toggleBookingDropdown = () => setBookingDropdownOpen(!bookingDropdownOpen);
    const toggleInventoryDropdown = () => setInventoryDropdownOpen(!inventoryDropdownOpen);

    return (
        <div className="wrapper">
            <div className="sidebar" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}></div>
            <div className="sidebar" style={{ flex: 3 }}>
                <div className="profile">
                    <img className="logo-img" />
                    <h3>Hashani Thambugala</h3>
                    <p>Admin</p>
                </div>
                <ul>
                    <li>
                        <Link to="/" className="active">
                            <span className="icon"><i className="fas fa-home"></i></span>
                            <span className="item">Admin Home</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/" className={`sidebar-link has-dropdown ${serviceDropdownOpen ? 'active' : ''}`} onClick={toggleServiceDropdown}>
                            <span className="icon"><i className="fas fa-tools"></i></span>
                            <span className="item">Services</span>
                        </Link>
                        <ul className={`sidebar-dropdown list-unstyled collapse ${serviceDropdownOpen ? 'show' : ''}`}>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to="/viewser"><span className="icon"><i className="fas fa-users"></i></span>All Services</Link>
                            </li>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to="/addser"><span className="icon"><i className="fas fa-plus"></i></span>Add Services</Link>
                            </li>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to="/updateser"><span className="icon"><i className="fas fa-edit"></i></span>Update Services</Link>
                            </li>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to="/deleteser"><span className="icon"><i className="fas fa-trash"></i></span>Delete Services</Link>
                            </li>
                            
                        </ul>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/allSalary "className={`sidebar-link has-dropdown ${employeeDropdownOpen ? 'active' : ''}`} onClick={toggleEmployeeDropdown}>
                            <span className="icon"><i className="fas fa-address-card"></i></span>
                            <span className="item">Employees Salary</span>
                        </Link>
                        <ul className={`sidebar-dropdown list-unstyled collapse ${employeeDropdownOpen ? 'show' : ''}`}>
                            <li className="sidebar-link">
                                <Link  className="sidebar-link" to="/allSalary" ><span className="icon"><i className="fas fa-users"></i></span>All Employee Slary Detailes</Link>
                            </li>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to ="/addSalary"><span className="icon"><i className="fas fa-plus"></i></span>Add New Employee Salary Detailes</Link>
                            </li>
                             <li className="sidebar-link">
                                <Link className="sidebar-link" to ="/allOTsalaries"><span className="icon"><i className="fas fa-edit"></i></span>OT Salary</Link>
                            </li>
                            <li className="sidebar-link">
                                <Link className="sidebar-link" to ="/allSpecialsalaries"><span className="icon"><i className="fas fa-trash"></i></span>Special Leaves </Link>
                            </li> 
                        </ul>
                    </li>

                    <li className="sidebar-item">
                        <a href="#" className={`sidebar-link has-dropdown ${userDropdownOpen ? 'active' : ''}`} onClick={toggleUserDropdown}>
                            <span className="icon"><i className="fas fa-user"></i></span>
                            <span className="item">Users</span>
                        </a>
                        <ul className={`sidebar-dropdown list-unstyled collapse ${userDropdownOpen ? 'show' : ''}`}>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-users"></i></span>All Users</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-plus"></i></span>Add Users</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-edit"></i></span>Update Users</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-trash"></i></span>Delete Users</a>
                            </li>
                        </ul>
                    </li>

                    <li className="sidebar-item">
                        <a href="#" className={`sidebar-link has-dropdown ${bookingDropdownOpen ? 'active' : ''}`} onClick={toggleBookingDropdown}>
                            <span className="icon"><i className="fas fa-calendar"></i></span>
                            <span className="item">Bookings</span>
                        </a>
                        <ul className={`sidebar-dropdown list-unstyled collapse ${bookingDropdownOpen ? 'show' : ''}`}>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-users"></i></span>All Bookings</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-plus"></i></span>Add Bookings</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-edit"></i></span>Update Bookings</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-trash"></i></span>Delete Bookings</a>
                            </li>
                        </ul>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/inventory" className={`sidebar-link has-dropdown ${inventoryDropdownOpen ? 'active' : ''}`} onClick={toggleInventoryDropdown}>
                            <span className="icon"><i className="fas fa-box"></i></span>
                            <span className="item">Inventory</span>
                        </Link>
                        <ul className={`sidebar-dropdown list-unstyled collapse ${inventoryDropdownOpen ? 'show' : ''}`}>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-users"></i></span>All Inventory</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-plus"></i></span>Add Inventory</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-edit"></i></span>Update Inventory</a>
                            </li>
                            <li className="sidebar-link">
                                <a href="#" className="sidebar-link"><span className="icon"><i className="fas fa-trash"></i></span>Delete Inventory</a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>
            
        </div>

        </div>

        );
    
}
