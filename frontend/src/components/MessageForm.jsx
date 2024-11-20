import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = ({ onMessageSend }) => {
  const [staffName, setStaffName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!staffName || !message) {
      toast.error("Please fill in both fields.");
      return;
    }

    onMessageSend({ staffName, message, sentAt: new Date() });
    toast.success("Message sent successfully!");
    setStaffName("");
    setMessage("");
  };

  return (
    <div className="p-4 border rounded bg-light shadow">
      <h4 className="text-center mb-4">Send a Message to Staff</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="staffName" className="form-label">
            Select Staff
          </label>
          <select
            className="form-select"
            id="staffName"
            value={staffName}
            onChange={(e) => setStaffName(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose Staff Member
            </option>
            <option value="John Doe">John Doe</option>
            <option value="Jane Smith">Jane Smith</option>
            <option value="Mark Johnson">Mark Johnson</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
