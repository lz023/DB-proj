import React from "react";

const MessageItem = ({ message }) => {
  return (
    <div className="message-item border rounded p-3 mb-3 shadow-sm">
      <h5>To: {message.staffName}</h5>
      <p>
        <strong>Message:</strong> {message.message}
      </p>
      <p>
        <small>Sent at: {new Date(message.sentAt).toLocaleString()}</small>
      </p>
    </div>
  );
};

export default MessageItem;
