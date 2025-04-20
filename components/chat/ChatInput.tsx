import { motion } from 'framer-motion';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function ChatInput({ value, onChange, onSubmit }: ChatInputProps) {
  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onSubmit={onSubmit} 
      className="flex gap-2"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="이력서에 대해 물어보세요..."
        className="flex-1 p-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="px-4 py-2 bg-blue-600/80 text-white rounded-md hover:bg-blue-700/80 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors"
      >
        전송
      </motion.button>
    </motion.form>
  );
} 