import React, { useState, useEffect, useRef } from 'react';
import { chatData, KnowledgeBaseItem } from '../data/chatData';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
    suggestions?: string[];
    related?: number[];
}

interface ChatWidgetProps {
    onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
    
    const conversationStarters = [
        "How much is company registration?",
        "What is an ITF263?",
        "What's the difference between a PBC and PLC?",
        "How do I get a Vendor Number?"
    ];

    const initialMessage: Message = {
        id: Date.now(),
        text: "Hello! I'm the TECHLAUNCH assistant. How can I help you today? You can ask me a question or choose one of the options below.",
        sender: 'bot',
        suggestions: conversationStarters
    };

    const [messages, setMessages] = useState<Message[]>([initialMessage]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages, isTyping]);
    
    const getQuestionById = (id: number): KnowledgeBaseItem | undefined => {
        return chatData.find(item => item.id === id);
    };

    const findBestResponse = (userInput: string): { type: 'answer' | 'did_you_mean' | 'not_found', payload: any } => {
        const lowerInput = userInput.toLowerCase().trim();
        if (!lowerInput) return { type: 'not_found', payload: "Please ask a question."};

        let matches: { score: number; item: KnowledgeBaseItem }[] = [];

        chatData.forEach(item => {
            let score = 0;
            const uniqueInputWords = new Set(lowerInput.split(/\s+/));

            // Score based on keyword presence
            item.keywords.forEach(kw => {
                if (lowerInput.includes(kw)) {
                    score += 5; // Higher weight for keywords
                }
            });

            // Add score for aliases
            item.aliases?.forEach(alias => {
                if (lowerInput.includes(alias)) {
                    score += 5;
                }
            });

            // Add score for general word overlap in the question
            const questionWords = new Set(item.question.toLowerCase().split(/\s+/));
            uniqueInputWords.forEach(word => {
                if (questionWords.has(word)) {
                    score += 1;
                }
            });

            if (score > 0) {
                matches.push({ score, item });
            }
        });

        if (matches.length === 0) {
             return { type: 'not_found', payload: "I'm sorry, I couldn't find a direct answer for that. Could you please rephrase? For complex issues, our support team is always ready to help via the 'Contact Us' page." };
        }
        
        matches.sort((a, b) => b.score - a.score);

        const bestMatch = matches[0];
        const CONFIDENCE_THRESHOLD = 10;

        if (bestMatch.score >= CONFIDENCE_THRESHOLD && (matches.length === 1 || bestMatch.score > matches[1].score * 1.5)) {
            return { type: 'answer', payload: bestMatch.item };
        } else {
            return { type: 'did_you_mean', payload: bestMatch.item };
        }
    };


    const handleSendMessage = (text: string) => {
        if (!text.trim()) return;

        const newUserMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const response = findBestResponse(text);
            let newBotMessage: Message;

            if (response.type === 'answer') {
                const item = response.payload as KnowledgeBaseItem;
                newBotMessage = {
                    id: Date.now() + 1,
                    text: item.answer,
                    sender: 'bot',
                    related: item.related
                };
            } else if (response.type === 'did_you_mean') {
                const item = response.payload as KnowledgeBaseItem;
                newBotMessage = {
                    id: Date.now() + 1,
                    text: `I'm not certain, but did you mean: "<em>${item.question}</em>"?<br><br>${item.answer}`,
                    sender: 'bot',
                    related: item.related
                };
            }
            else { // not_found
                 newBotMessage = {
                    id: Date.now() + 1,
                    text: response.payload,
                    sender: 'bot',
                };
            }
            
            setMessages(prev => [...prev, newBotMessage]);
            setIsTyping(false);
        }, 1200);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(inputValue);
    };

    const handleSuggestionClick = (suggestion: string) => {
        handleSendMessage(suggestion);
    };
    
    const handleRelatedClick = (id: number) => {
        const questionItem = getQuestionById(id);
        if (questionItem) {
            handleSendMessage(questionItem.question);
        }
    };


    return (
        <div className="chat-widget-container fixed bottom-24 right-6 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white dark:bg-background-dark rounded-lg flex flex-col z-30 animate-chat-widget-enter">
            {/* Header */}
            <div className="flex items-center justify-between p-3 bg-primary text-white rounded-t-lg shadow-md">
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                       <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg"><path d="M15.1147 9L0.884705 17.6593L0.884705 0.340721L15.1147 9Z" fill="currentColor"></path></svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-base">TECHLAUNCH Support</h3>
                        <p className="text-xs text-blue-200">Online</p>
                    </div>
                </div>
                <button onClick={onClose} className="text-white hover:text-blue-200">
                    <span className="material-icons-outlined">close</span>
                </button>
            </div>

            {/* Messages */}
            <div className="chat-messages flex-grow p-4 overflow-y-auto">
                <div className="flex flex-col space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={`flex flex-col animate-message-enter ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                            <div className={`message-bubble ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text }}></p>
                                {(msg.suggestions || msg.related) && (
                                    <div className="mt-2 pt-2 border-t border-black/10 dark:border-white/10 space-y-1">
                                        {msg.suggestions?.map((s, i) => (
                                            <button key={i} onClick={() => handleSuggestionClick(s)} className="block w-full text-left text-xs text-accent dark:text-blue-400 font-semibold bg-accent/10 dark:bg-accent/20 px-2 py-1 rounded hover:bg-accent/20 dark:hover:bg-accent/30 transition-colors">
                                                {s}
                                            </button>
                                        ))}
                                        {msg.related && msg.related.length > 0 && <p className="text-xs font-bold pt-1 text-gray-600 dark:text-gray-400">Related:</p>}
                                        {msg.related?.map((id, i) => {
                                            const relatedQ = getQuestionById(id);
                                            if (!relatedQ) return null;
                                            return (
                                                <button key={i} onClick={() => handleRelatedClick(id)} className="block w-full text-left text-xs text-accent dark:text-blue-400 font-semibold bg-accent/10 dark:bg-accent/20 px-2 py-1 rounded hover:bg-accent/20 dark:hover:bg-accent/30 transition-colors">
                                                    {relatedQ.question}
                                                </button>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex">
                             <div className="message-bubble bot-message typing-indicator">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="chat-input p-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your question..."
                        className="flex-grow p-2 border-none rounded-full bg-white dark:bg-gray-800 focus:ring-2 focus:ring-accent outline-none text-sm"
                    />
                    <button type="submit" className="w-10 h-10 flex-shrink-0 bg-accent text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <span className="material-icons-outlined">send</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatWidget;