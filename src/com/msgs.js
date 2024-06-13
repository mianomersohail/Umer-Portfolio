import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './msgs.css';

const socket = io('http://localhost:3000'); // Ensure the port matches the server

function Msgs() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('server-message', (data) => {
            const receivedMessages = data.map(msg => ({
                text: msg.message,
                sender: 'Server',
                timestamp: msg.timestamp
            }));
            setMessages(prevMessages => [
                ...prevMessages.filter((msg) => !receivedMessages.some(received => msg.text === received.text)),
                ...receivedMessages
            ]);
        });

        scrollToBottom();

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('server-message');
        };
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/mesg')
            .then(res => res.json())
            .then(meg => {
                const receivedMessages = meg.map(msg => ({
                    text: msg.message,
                    sender: 'Server',
                    timestamp: msg.timestamp
                }));
                setMessages(prevMessages => [...prevMessages, ...receivedMessages]);
                scrollToBottom();
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const isValidDate = (timestamp) => {
        return timestamp && !isNaN(new Date(timestamp).getTime());
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (input.trim()) {
            socket.emit('user-message', input);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: input, sender: 'You', timestamp: Date.now() }
            ]);
            setInput('');
            scrollToBottom();
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    return (
        <form onSubmit={handleSend}>
            <div className="messenger-app">
                <h1 className="messenger-msg">Please Leave Your Message</h1>
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            <span className="sender">{message.sender}</span>:
                            <div>{message.text}</div>
                            {isValidDate(message.timestamp) && (
                                <div className="timestamp">
                                    <br />
                                    {new Date(message.timestamp).toLocaleTimeString()}
                                </div>
                            )}
                            <br />
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                <div className="input-container">
                    <input
                        name="message"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button type="submit">Send</button>
                </div>
            </div>
        </form>
    );
}

export default Msgs;
