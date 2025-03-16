import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WaitlistForm from "./validation";
import WaitlistStatus from "./list";
import "./App.css";
function App() {
    const [users, setUsers] = useState(() => {
     const savedUsers = localStorage.getItem("waitlist");
     return savedUsers ? JSON.parse(savedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem("waitlist", JSON.stringify(users));
    }, [users]);

    const addUser = (name, priority) => {
        setUsers((prev) => {
            const priorityUsers = prev.filter((u) => u.priority);
            const generalUsers = prev.filter((u) => !u.priority);
            return priority
            ? [...priorityUsers, { name, priority }, ...generalUsers]
            : [...priorityUsers, ...generalUsers, { name, priority }];
        });
    };
    return(
        <Router>
            <Routes>
                <Route path="/" element={<WaitlistForm addUser={addUser} /> } />
                <Route path="/Waitlist" element={<WaitlistStatus users={users}/>}/>
            </Routes>
        </Router>
    );
}

export default App;