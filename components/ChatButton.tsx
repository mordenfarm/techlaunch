import React, { useState } from 'react';
import ChatWidget from './ChatWidget';

const ChatButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-900 transition-all duration-300 z-40 transform hover:scale-110"
                aria-label="Toggle chat"
            >
                <span className={`material-icons-outlined text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    {isOpen ? 'close' : 'chat_bubble_outline'}
                </span>
            </button>
            {isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}
        </>
    );
};

export default ChatButton;