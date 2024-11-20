import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ messages }) => {
  return (
    <div className="p-4 border rounded bg-light shadow mt-4">
      <h4>View Sent Messages</h4>
      <div className="message-list mt-3">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <MessageItem key={index} message={msg} />
          ))
        ) : (
          <p>No messages sent yet.</p>
        )}
      </div>
    </div>
  );
};

export default MessageList;
