import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, MessageCircle, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactItems = [
    {
      icon: User,
      title: 'זאב אבינר',
      subtitle: 'מרצה וכלכלן',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'אימייל',
      subtitle: 'zaviner@gmail.com',
      href: 'mailto:zaviner@gmail.com',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Phone,
      title: 'טלפון',
      subtitle: '052-541-0049',
      href: 'tel:052-541-0049',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: [null, '-100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6 shadow-2xl"
          >
            <MessageCircle size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            יצירת קשר
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            אשמח לענות על כל שאלה ולדון באפשרויות שיתוף פעולה
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const Component = item.href ? 'a' : 'div';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Component
                  {...(item.href ? { href: item.href } : {})}
                  className="block"
                >
                  <motion.div
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
                    whileHover={{ y: -8, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-full mb-6 shadow-lg group-hover:shadow-xl`}
                    >
                      <Icon size={28} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.subtitle}
                    </p>

                    {item.href && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="mt-4"
                      >
                        <Send size={16} className="mx-auto text-blue-300" />
                      </motion.div>
                    )}
                  </motion.div>
                </Component>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              מוכן להתחיל?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              בואו נדבר על איך אני יכול לעזור לכם להצליח
            </p>
            <motion.a
              href="mailto:zaviner@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>שלח הודעה</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-slate-50">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;