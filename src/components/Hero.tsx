import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Star } from 'lucide-react';
import FloatingProfile from './FloatingProfile';

const Hero: React.FC = () => {
  const scrollToLectures = () => {
    const element = document.getElementById('lectures');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      {/* Floating Profile Component */}
      <FloatingProfile />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="w-8 h-8 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 gradient-text"
          >
            ברוכים הבאים
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed"
          >
            <p className="text-xl md:text-2xl mb-8">
              אני מציע שלוש הרצאות וסדנאות מרכזיות, המבוססות על ניסיון אישי רב שנים וידע מעמיק בתחומים שונים.
            </p>
            
            <p className="text-lg md:text-xl mb-8 text-gray-600">
              המטרה היא להעניק למשתתפים כלים מעשיים, ידע יישומי ותובנות שיסייעו להם בעסק ובחיים המקצועיים. 
              ההרצאות מועברות מתוך תשוקה אמיתית לתחומים, ובמטרה לתרום מהידע שצברתי.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <motion.button
              onClick={scrollToLectures}
              className="btn-primary inline-flex items-center gap-2 text-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span>גלה את ההרצאות</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;