import { AnimatePresence } from 'framer-motion';
import { Message } from './Message';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatContainerProps {
  messages: Message[];
}

export function ChatContainer({ messages }: ChatContainerProps) {
  return (
    <div className="backdrop-blur-sm bg-gray-800/50 rounded-lg shadow-lg p-4 mb-4 flex-1 overflow-y-auto">
      <div className="space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 