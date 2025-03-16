import React from "react"; 
import { Link } from "react-router-dom";
import { Button, Card } from "@mui/material";
import "./App.css";

function WaitlistStatus({ users, clearWaitlist }) {
return (
   <Card className="list-card">
         <h2>📋 Waitlist Status</h2>
         <ul>
           {users.map((user, index) => (
             <li key={index} className={user.priority ? "priority" : "general"}>
               {user.name} - {user.priority ? "🚀 Priority" : "🕒 General"} - Position: {index + 1} -
               Estimated wait time: {index + 1} days
             </li>
           ))}
         </ul>
         <Button variant="contained" color="secondary" onClick={clearWaitlist}>Clear Waitlist</Button>
         <Link to="/" className="link">⬅ Back to Registration</Link>
       </Card>
);
}
export default WaitlistStatus;