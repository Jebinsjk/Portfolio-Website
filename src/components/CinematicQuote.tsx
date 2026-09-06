import { motion } from 'framer-motion';

interface Props {
  quote: string;
}

const CinematicQuote = ({ quote }: Props) => (
  <motion.div
    className="cine-quote"
    key={quote}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 16 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="cine-quote__hand">{quote}</div>
  </motion.div>
);

export default CinematicQuote;
