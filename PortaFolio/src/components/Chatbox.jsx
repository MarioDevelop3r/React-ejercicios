import { useState, useEffect } from 'react';
import axios from 'axios';
import Mesage from './Message';
import './Chatbox.css';

const ChatBox = () => {
    const [message, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        // Aquí puedes cargar mensajes iniciales desde una API o una fuente de datos
        // Por ejemplo:
        // axios.get('/api/messages').then(response => setMessages(response.data));
    }, []);

    const sendMessage = async () => {
        if (input.trim() !== '') {
            const newMessage = {
                id: message.length + 1,
                text: input,
                sender: 'user', // Aquí puedes distinguir entre usuario y otros interlocutores
            };

            setMessages([...message, newMessage]);
            setInput('');

            console.log('Enviando mensaje...');
        }
    };

    return (
        <div className="chatbox">
            <div className="messages">
                {message.map(msg => (
                    <Mesage key={msg.id} text={msg.text} sender={msg.sender} />
                ))}
            </div>
            <div className="input-box">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
};

export default ChatBox;