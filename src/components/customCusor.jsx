import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './styles/cursor.css'
const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="fixed z-[9999] pointer-events-none"
      animate={{ x: pos.x + 30, y: pos.y + 10 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      <div className="bg-[#50FFB1] label-cursor text-black text-sm font-semibold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
        You
      </div>
    </motion.div>
  );
};

export default CustomCursor;  