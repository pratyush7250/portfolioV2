import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import ReactMarkdown from 'react-markdown'; // Import the markdown component
import './ChatBot.css';

import { RiRobot3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Loading state tracker
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi 👋 I am Pratyush's AI assistant. Ask me anything.",
        },
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isLoading]); // Scroll when loading state fires as well

    const sendMessage = async () => {
        if (!message.trim() || isLoading) return;

        const userMessage = {
            sender: "user",
            text: message,
        };

        setMessages((prev) => [...prev, userMessage]);
        setMessage("");
        setIsLoading(true); // Turn on the waving dots loader

        try {
            const response = await axios.post(
                "https://chatboat-pxs8.onrender.com/api/chat",
                { message }
            );

            const botMessage = {
                sender: "bot",
                text: response.data.reply,
            };

            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {
            console.log(error);
            setMessages((prev) => [
                ...prev,
                {
                    sender: "bot",
                    text: "Something went wrong 🚨",
                },
            ]);
        } finally {
            setIsLoading(false); // Turn off the loader when done
        }
    };

    return (
        <div className="chatbot-container">

            {isOpen && (
                <div className="chat-window">

                    <div className="chat-header">
                        <span>AI Portfolio Assistant</span>
                        <RxCross2 onClick={() => setIsOpen(false)} className="chat-close-btn" />

                    </div>

                    <div className="chat-messages-area">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message-row ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                <div className="message-bubble">
                                    {/* ReactMarkdown converts your text symbols into real HTML elements */}
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {/* Render the structural loading bubble when server request is unresolved */}
                        {isLoading && (
                            <div className="message-row bot">
                                <div className="message-bubble">
                                    <div className="typing-loader">
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                        <span className="typing-dot"></span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-area">
                        <input
                            type="text"
                            placeholder={isLoading ? "Waiting for response..." : "Ask something..."}
                            className="chat-input-field"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            disabled={isLoading} // Disable input while loading
                        />
                        <button
                            onClick={sendMessage}
                            className="chat-send-btn"
                            disabled={isLoading}
                            style={{ opacity: isLoading ? 0.6 : 1 }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`chat-fab ${isOpen ? "opened" : "closed"}`}
            >
                {isOpen ? (
                    <RxCross2 className="fab-icon" />
                ) : (
                    <RiRobot3Fill className="fab-icon" />
                )}
            </button>

        </div>
    );
};

export default ChatBot;