import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartArea, faChartLine, faChartPie, faChevronCircleDown, faMessage, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import user from "./assets/user.jpg"
import { faGauge } from "@fortawesome/free-solid-svg-icons/faGauge";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import DashboardWidget from "./DashboardWidget";

//
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area, ResponsiveContainer
} from "recharts";

export default function App() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => setSidebarVisible(vis => !vis);

  //Bar Data
  const barData = [
  { year: "2016", USA: 15, UK: 10, AU: 12 },
  { year: "2017", USA: 35, UK: 30, AU: 25 },
  { year: "2018", USA: 55, UK: 45, AU: 40 },
  { year: "2019", USA: 60, UK: 55, AU: 52 },
  { year: "2020", USA: 58, UK: 50, AU: 48 },
  { year: "2021", USA: 80, UK: 60, AU: 58 },
  { year: "2022", USA: 95, UK: 70, AU: 55 },
];

// Area Data
  const areaData = [
  { year: "2016", sales: 10, revenue: 100 },
  { year: "2017", sales: 30, revenue: 150 },
  { year: "2018", sales: 55, revenue: 180 },
  { year: "2019", sales: 45, revenue: 140 },
  { year: "2020", sales: 65, revenue: 190 },
  { year: "2021", sales: 60, revenue: 185 },
  { year: "2022", sales: 85, revenue: 270 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: "#191C24",
        padding: "10px",
        borderRadius: "3px",
        color: "#fff",
        fontSize: "13px"
      }}>
        <p>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

  //Sales Data
  const salesData = [
    { date: "01 Jan 2045", invoice: "INV-0123", customer: "Jhon Doe", amount: "$123", status: "Paid" },
    { date: "01 Jan 2045", invoice: "INV-0123", customer: "Jhon Doe", amount: "$123", status: "Paid" },
    { date: "01 Jan 2045", invoice: "INV-0123", customer: "Jhon Doe", amount: "$123", status: "Paid" },
    { date: "01 Jan 2045", invoice: "INV-0123", customer: "Jhon Doe", amount: "$123", status: "Paid" },
    { date: "01 Jan 2045", invoice: "INV-0123", customer: "Jhon Doe", amount: "$123", status: "Paid" },
  ];

  return (
    <div className="dashboard">
      {/* Side Bar Navigatoin */}
      <aside className={`sidebar ${sidebarVisible ? "show" : "hide"}`}>
        <nav>
          <a href="" className="logo"><FontAwesomeIcon icon={faUserSecret} /><span>Admin Panel</span></a>
          <div className="user">
            <div>
              <img src={user} alt="user" />
              <div className="user-active"></div>
            </div>
            <div>
              <h2>Peter Parker</h2>
              <span>Admin</span>
            </div>
          </div>
          <ul className="sidebar-list">
            <li className="active"><a href="#"><FontAwesomeIcon className="icon" icon={faGauge} /> <span>Dashboard</span></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faDatabase} /> <span>Widgets</span></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faKeyboard} /> <span>Forms</span></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faTable} /> <span>Tables</span></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faChartColumn} /> <span>Charts</span></a></li>
            <li><a href="#"><FontAwesomeIcon className="icon" icon={faFile} /> <span>Pages</span></a></li>
          </ul>
          <div className="switch-tab">
            
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${sidebarVisible ? "": "adjust"}`}>
        <div className="main-content-header">
          <div>
              <button className="hamburger" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
              </button>
              <input type="search" placeholder="Search" />
          </div>
          <div>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faMessage} />
              <span>Message</span>
              <FontAwesomeIcon className="arrow" icon={faChevronCircleDown} />
              <div className="info">
                <div>
                  <img src={user} alt="" />
                  <div>
                    <span>Parker sends you a message</span>
                    <span>15 minutes ago</span>
                  </div>
                </div>
                <div>
                  <img src={user} alt="" />
                  <div>
                    <span>Parker sends you a message</span>
                    <span>15 minutes ago</span>
                  </div>
                </div>
                <div>
                  <img src={user} alt="" />
                  <div>
                    <span>Parker sends you a message</span>
                    <span>15 minutes ago</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faBell} />
              <span>Notification</span>
              <FontAwesomeIcon className="arrow" icon={faChevronCircleDown} />
              <div className="info-2">
                <div>
                  <span>Profile updated</span>
                  <span>15 minutes ago</span>
                </div>
                <div>
                  <span>New user added</span>
                  <span>15 minutes ago</span>
                </div>
                <div>
                  <span>Password changed</span>
                  <span>15 minutes ago</span>
                </div>
              </div>
            </a>
            <a href="#">
              <img src={user} />
              <span>Peter Parker</span>
              <FontAwesomeIcon className="arrow" icon={faChevronCircleDown} />
              <div className="info-3">
                <p>My Profile</p>
                <p>Settings</p>
                <p>Log Out</p>
              </div>
            </a>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="dashboard-body">
          {/* Top Dashboard */}
          <div className="top-dashboard">
            <div>
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              <div>
                <span>Today Sale</span>
                <span>$1234</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faChartColumn} className="icon" />
              <div>
                <span>Today Sale</span>
                <span>$1234</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faChartArea} className="icon" />
              <div>
                <span>Today Sale</span>
                <span>$1234</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon icon={faChartPie} className="icon" />
              <div>
                <span>Today Sale</span>
                <span>$1234</span>
              </div>
            </div>
          </div>


        {/* Chart Grid */}
        <div className="chart-grid">

          {/* Worldwide Sales */}
          <div className="chart-card">
            <div className="chart-header">
              <h3>Worldwide Sales</h3>
              <a href="#">Show All</a>
              </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="year" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip content={<CustomTooltip />} />
              <Legend />
                <Bar dataKey="USA" stackId="a" fill="#eb1616" />
                <Bar dataKey="UK" stackId="a" fill="#800e12" />
                <Bar dataKey="AU" stackId="a" fill="#571419" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sales & Revenue */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Salse & Revenue</h3>
          <a href="#" className="show-all">Show All</a>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={areaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="year" stroke="#aaa" />
            <YAxis stroke="#aaa" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area type="monotone" dataKey="revenue" stroke="#cc4444" fill="#eb1616" />
            <Line type="monotone" dataKey="sales" stroke="#e63946" strokeWidth={2} dot />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>


          {/* Table Sales */}
          <div className="table-sales">
            <div className="table-title">
              <h3>Recent Sales</h3>
              <a href="#">Show All</a>
            </div>
            <table className="sales-table" border={1}>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>Date</th>
                  <th>Invoice</th>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((sale, idx) => (
                  <tr key={idx}>
                    <td><input type="checkbox" /></td>
                    <td>{sale.date}</td>
                    <td>{sale.invoice}</td>
                    <td>{sale.customer}</td>
                    <td>{sale.amount}</td>
                    <td>{sale.status}</td>
                    <td><button className="detail-btn">Detail</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* DashBoard Widget */}
          <DashboardWidget />

          {/* Footer Widget */}
          <footer>
            <p>&copy; <a href="#">U-GINE MEDIA</a>, All Rights Reserved</p>
              <p>Distributed With <a href="#">YouTube</a></p>
          </footer>
        </div>
      </main>
    </div>
  );
}
