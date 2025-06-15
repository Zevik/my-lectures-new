import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X } from 'lucide-react';

const FloatingProfile: React.FC = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const wisdomQuotes = [
    "הידע הוא כוח, אבל היישום שלו הוא הכוח האמיתי",
    "בעולם הטכנולוגיה, מי שלא מתקדם - נשאר מאחור",
    "הבינה המלאכותית לא באה להחליף אותנו, אלא לשדרג אותנו",
    "כל בעיה היא הזדמנות להתחכם",
    "הכלי הטוב ביותר הוא זה שאתה יודע להשתמש בו",
    "הצלחה היא פגישה בין הכנה להזדמנות",
    "בעסק, הפרטים הקטנים עושים את ההבדל הגדול",
    "למידה מתמשכת היא המפתח להישרדות בעידן הדיגיטלי",
    "אל תפחד מטכנולוגיה חדשה, תפחד מלהישאר מאחור",
    "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו",
    "כל מומחה היה פעם מתחיל",
    "הטעויות הן המורים הטובים ביותר",
    "בעולם הדיגיטלי, המהירות חשובה יותר מהשלמות",
    "הרשת היא הכלי, החכמה היא איך להשתמש בה",
    "עסק מצליח מתחיל ברעיון טוב ומסתיים בביצוע מעולה",
    "הנתונים מספרים סיפור, אבל אתה צריך לדעת לקרוא אותו",
    "בעידן הבינה המלאכותית, היצירתיות היא היתרון התחרותי",
    "כל בעיה טכנית יש לה פתרון, צריך רק לדעת איפה לחפש",
    "הזמן הטוב ביותר להתחיל היה אתמול, הזמן השני הטוב ביותר הוא עכשיו",
    "בעסק, הלקוח תמיד צודק - עד שהוא לא",
    "הטכנולוגיה משנה, העקרונות נשארים",
    "מי שמפסיק ללמוד מפסיק להתקדם",
    "בעולם הדיגיטלי, הסבלנות היא מידה נדירה ויקרה",
    "הכלים משתנים, החכמה נשארת",
    "עסק טוב מתחיל בשירות טוב",
    "הבינה המלאכותית חכמה, אבל החכמה האנושית בלתי תחליפית",
    "כל יום הוא הזדמנות ללמוד משהו חדש",
    "בעסק, התזמון הוא הכל",
    "הטכנולוגיה היא כלי, החזון הוא המנוע",
    "מי שלא מסתכן לא שותה שמפניה",
    "בעולם המהיר, מי שחושב מהר מנצח",
    "הפשטות היא התחכום האולטימטיבי",
    "כל מגבלה היא הזדמנות ליצירתיות",
    "בעסק, המוניטין נבנה בשנים ונהרס בדקות",
    "הטכנולוגיה טובה כמו האנשים שמשתמשים בها",
    "הלמידה מהטעויות חשובה יותר מהימנעות מהן",
    "בעידן הדיגיטלי, הסתגלות היא כישור הישרדות",
    "כל רעיון טוב מתחיל בשאלה טובה",
    "הזמן הוא המשאב היקר ביותר, השתמש בו בחכמה",
    "בעסק, הקשרים חשובים יותר מהידע",
    "הטכנולוגיה מאפשרת, החכמה מכוונת",
    "מי שלא מתכנן מתכנן להיכשל",
    "בעולם הבינה המלאכותית, השאלות חשובות יותר מהתשובות",
    "הצלחה היא לא יעד, היא מסע",
    "כל בעיה מורכבת מורכבת מבעיות פשוטות",
    "בעסק, האמת תמיד עולה לפני השטח",
    "הטכנולוגיה משרתת את מי שיודע לשלוט בה",
    "החכמה היא לדעת מה לא לעשות",
    "בעידן המידע, הסינון חשוב יותר מהאיסוף",
    "הדרך הארוכה לפעמים היא הקצרה ביותר"
  ];

  // Initialize random position
  useEffect(() => {
    const updatePosition = () => {
      const maxX = window.innerWidth - 120;
      const maxY = window.innerHeight - 120;
      setPosition({
        x: Math.random() * Math.max(maxX, 0),
        y: Math.random() * Math.max(maxY, 0)
      });
    };

    updatePosition();
    const interval = setInterval(updatePosition, 8000); // Change position every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setCurrentQuote(Math.floor(Math.random() * wisdomQuotes.length));
    setShowQuote(true);
  };

  const closeQuote = () => {
    setShowQuote(false);
  };

  return (
    <>
      {/* Floating Profile Image */}
      <motion.div
        className="fixed z-30 cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          x: position.x,
          y: position.y
        }}
        transition={{ 
          scale: { duration: 0.5, delay: 2 },
          opacity: { duration: 0.5, delay: 2 },
          x: { duration: 4, ease: "easeInOut" },
          y: { duration: 4, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-60 animate-pulse" />
          
          {/* Profile image container */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-500 to-purple-500">
            <img 
              src="/my-image.jpg" 
              alt="זאב אבינר" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center text-white text-2xl font-bold">ז</div>';
                }
              }}
            />
          </div>

          {/* Click indicator */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <img 
              src="/click-on-me.png" 
              alt="לחץ עלי" 
              className="w-4 h-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<Quote size={12} className="text-white" />';
                }
              }}
            />
          </motion.div>

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full"
              animate={{
                y: [-20, -40, -20],
                x: [0, Math.sin(i) * 10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: '-10px'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeQuote}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl border-4 border-gradient-to-r from-blue-500 to-purple-500 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeQuote}
                className="absolute top-4 left-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={16} className="text-gray-600" />
              </button>

              {/* Quote icon */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                  <Quote size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">משפט חכמה</h3>
              </div>

              {/* Quote text */}
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed mb-6 font-medium"
                >
                  "{wisdomQuotes[currentQuote]}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-gray-500"
                >
                  - זאב אבינר
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-3xl" />
              
              {/* Sparkle effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingProfile;