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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // 사용자 메시지 추가
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages,
            { role: 'user', content: input }
          ]
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'API 요청 실패');
      }

      if (!data.content || !data.content[0]?.text) {
        throw new Error('잘못된 응답 형식입니다.');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content[0].text
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      // 에러 메시지 추가
      const errorMessage: Message = {
        role: 'assistant',
        content: error instanceof Error 
          ? `죄송합니다. 오류가 발생했습니다: ${error.message}`
          : '죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
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
        isLoading={isLoading}
      />
    </div>
  );
} 