import './msgs.css'
import {useState,useEffect}from 'react'
import io from 'socket.io-client'
const socket = io('http://localhost:3000');

function Msgs() {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');


 
  useEffect(()=>{
    socket.on('connect',function(){
        console.log('Connected to server')
    })
    socket.on('disconnect',function(){
        console.log("Disconnect from server")
    })
    return ()=>{
        socket.off('connect')
        socket.off('disconnect')
    };
  } ,[])

  const handleSend = () => {
    if (input.trim()) {
      socket.emit('user-message',input)
      setMessages([...messages, { text: input, sender: 'You' }]);
      setInput('');
    }
  };

  socket.on('server-message',function(data){
    console.log(data)
  })
  return (

    <div className="messenger-app">
        <h1 className='messenger-msg'>PlZ Leave Your Message</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="sender">{message.sender}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}


   

export default Msgs;