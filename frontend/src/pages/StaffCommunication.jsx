import React, { useState, useEffect } from "react";
import MessageForm from "../components/MessageForm";
import MessageList from "../components/MessageList";
import { toast } from "react-toastify";

const StaffCommunication = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/sentMessages.json");
        const data = await response.json();
        setMessages(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Failed to load messages.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleMessageSend = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Staff Communication</h2>
      <MessageForm onMessageSend={handleMessageSend} />
      <MessageList messages={messages} />
    </div>
  );
};

export default StaffCommunication;
