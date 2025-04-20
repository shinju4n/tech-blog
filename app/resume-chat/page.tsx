'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { ChatInput } from '@/components/chat/ChatInput';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ResumeChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 사용자 메시지 추가
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // TODO: API 호출 구현
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl h-screen flex flex-col bg-gray-900">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4 text-white"
      >
        이력서 챗봇
      </motion.h1>
      
      <ChatContainer messages={messages} />
      
      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 