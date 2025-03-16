import React, {useState } from  "react";
import { Link } from "react-router-dom";
import { Button, TextField,Card } from "@mui/material";
import "./App.css";

const inviteCodes = ["austin234", "alvin145", "karthik321"];

function WaitlistForm({ addUser}) {
    const [name, setName] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidCode = inviteCodes.includes(inviteCode.trim());
        addUser(name, isValidCode);
        setMessage(
            isValidCode
            ? "✅ You have been placed in the priority queue."
            : "❌ Invalid invite code. You have been placed at the back of the general waitlist."
        );
        setName("");
        setInviteCode("");
        };
        return(
            <Card className="form-card">
                 <h2>Join the Waitlist</h2>
                     <form onSubmit={handleSubmit}>
                       <TextField
                         label="Name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                       />
                       <TextField
                         label="Invite Code (if any)"
                         value={inviteCode}
                         onChange={(e) => setInviteCode(e.target.value)}
                       />
                       <Button type="submit" variant="contained" color="primary">
                         Join
                       </Button>
                     </form>
                     {message && <p className="message">{message}</p>}
                     <Link to="/waitlist" className="link">View Waitlist</Link>

               </Card>
        );
    }

export default WaitlistForm;