import React from 'react'
import "./DashboardWidget.css"
import user from "./assets/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

const DashboardWidget = () => {
 return (
    <div className="dashboard-widgets">
      {/* Messages */}
      <div className="widget messages">
        <div className="widget-header">
          <h3>Messages</h3>
          <a href="#">Show All</a>
        </div>
        <div className="message-list">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="message-item">
              <img src={user} alt="User" />
              <div className="message-content">
                <strong>Peter Parker</strong>
                <p>Short message goes here...</p>
              </div>
              <span className="time">15 minutes ago</span>
            </div>
          ))}
        </div>
      </div>

      {/* Calendar */}
      <div className="widget calendar">
        <div className="widget-header">
          <h3>Calender</h3>
          <a href="#">Show All</a>
        </div>
        <div className="calendar-container">
          <div className="calendar-header">
            <button>{"<"}</button>
            <span>June 2025</span>
            <button>{">"}</button>
          </div>
          <div className="calendar-grid">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div key={d} className="day-name">{d}</div>
            ))}
            {Array.from({ length: 42 }, (_, i) => (
              <div
                key={i}
                className={`calendar-day ${i === 9 ? 'active-day' : ''}`}
              >
                {i < 1 || i > 30 ? '' : i}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* To Do List */}
      <div className="widget todo">
        <div className="widget-header">
          <h3>To Do List</h3>
          <a href="#">Show All</a>
        </div>
        <div className="todo-input">
          <input type="text" placeholder="Enter task" />
          <button className="add-btn">Add</button>
        </div>
        <ul className="todo-list">
          {[...Array(5)].map((_, i) => (
            <li key={i} className={`todo-item ${i === 2 ? 'completed' : ''}`}>
              <input type="checkbox" defaultChecked={i === 2} />
              <span>Short task goes here...</span>
              <FontAwesomeIcon icon={faDeleteLeft} className='delete-btn' />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DashboardWidget