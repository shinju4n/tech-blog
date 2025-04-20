import { motion } from 'framer-motion';

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export function Message({ role, content }: MessageProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: role === 'user' ? 100 : -100,
        scale: 0.8
      }}
      animate={{ 
        opacity: 1, 
        x: 0,
        scale: 1
      }}
      exit={{ 
        opacity: 0,
        x: role === 'user' ? 100 : -100,
        scale: 0.8
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className={`flex ${
        role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <motion.div
        className={`max-w-[80%] p-3 rounded-lg ${
          role === 'user'
            ? 'bg-blue-600/80 text-white'
            : 'bg-gray-700/80 text-white'
        }`}
      >
        {content}
      </motion.div>
    </motion.div>
  );
} 