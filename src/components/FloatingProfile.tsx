import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingProfile: React.FC = () => {
  const [showQuote, setShowQuote] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ x: 1, y: 1 });

  const wisdomQuotes = [
    "החכמה היא לדעת מה לעשות הבא. המיומנות היא לדעת איך לעשות זאת. והסגולה היא לעשות זאת.",
    "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו.",
    "השקעה בידע משלמת את הרבית הטובה ביותר.",
    "לא הכישלון הוא הבעיה, אלא השאיפה הנמוכה.",
    "החינוך הוא הנשק החזק ביותר שאתה יכול להשתמש בו כדי לשנות את העולם.",
    "הדרך היחידה לעשות עבודה נהדרת היא לאהוב את מה שאתה עושה.",
    "התחל איפה שאתה, השתמש במה שיש לך, עשה מה שאתה יכול.",
    "הצלחה היא לילך מכישלון לכישלון מבלי לאבד את החידוד.",
    "אל תבזבז את זמנך לחיות את החיים של מישהו אחר.",
    "החיים הם 10% מה שקורה לך ו-90% איך אתה מגיב לזה.",
    "אם אתה רוצה משהו שמעולם לא היה לך, אתה חייב לעשות משהו שמעולם לא עשית.",
    "הדמיון חשוב יותר מהידע.",
    "אל תחכה להזדמנות - צור אותה.",
    "הפחד הגדול ביותר שלנו אינו שאנחנו לא מסוגלים, הפחד הגדול ביותר שלנו הוא שאנחנו עוצמתיים מעבר למידה.",
    "הדרך להתחיל היא להפסיק לדבר ולהתחיל לעשות.",
    "אין דרך לשלום, השלום הוא הדרך.",
    "תמיד נראה בלתי אפשרי עד שזה נעשה.",
    "אל תספר לאנשים את החלומות שלך, הראה להם.",
    "הזמן הטוב ביותר לשתול עץ היה לפני 20 שנה. הזמן השני הטוב ביותר הוא עכשיו.",
    "אם אתה לא יכול לעשות דברים גדולים, עשה דברים קטנים בדרך גדולה.",
    "המונע היחיד לעושר הוא החשיבה שלך.",
    "אתה צריך להיות השינוי שאתה רוצה לראות בעולם.",
    "החיים קצרים מדי להיות קטנים.",
    "הצלחה היא הולכת מכישלון לכישלון מבלי לאבד התלהבות.",
    "אל תשפוט כל יום לפי הקציר שאתה קוצר אלא לפי הזרעים שאתה זורע.",
    "הבעיה היא לא שיש לנו מעט זמן, הבעיה היא שאנחנו מבזבזים הרבה מזה.",
    "לא תוכל לחצות את הים רק על ידי הסתכלות על המים.",
    "הכל נראה בלתי אפשרי עד שזה נעשה.",
    "אל תלמד להצליח, למד ליצור ערך.",
    "מנהיג גדול לוקח אנשים למקום שהם לא בהכרח רוצים ללכת, אבל צריכים להיות.",
    "השקעה בעצמך היא השקעה הטובה ביותר שתוכל לעשות.",
    "אל תחכה לרגע המושלם, קח את הרגע ועשה אותו מושלם.",
    "אין דבר כזה כישלון, יש רק משוב.",
    "הדרך להצליח היא להתחיל.",
    "חזון בלי פעולה הוא חלום. פעולה בלי חזון היא סיוט.",
    "אם אתה עובד על משהו שאתה מתלהב ממנו, אתה לא צריך להיות מונע.",
    "הפסד קטן עדיף על ניצחון מביש.",
    "הדרך הטובה ביותר למצוא את עצמך היא לאבד את עצמך בשירות לאחרים.",
    "אתה לא יכול לשנות את כיוון הרוח, אבל תוכל להתאים את המפרש.",
    "החיים מתחילים בסוף אזור הנוחות שלך.",
    "הבעיה היא לא בבעיה, הבעיה היא ביחס שלך לבעיה.",
    "אם אתה חושב שאתה יכול או שאתה לא יכול, כנראה שאתה צודק.",
    "הדרך היחידה לגלות את גבולות האפשר היא להרחיק לכת מעבר להם אל הבלתי אפשר.",
    "תתן לכישלון שלך ללמד אותך, לא להשתיק אותך.",
    "אל תשווה את התחלה שלך לאמצע של מישהו אחר.",
    "כל מומחה היה פעם מתחיל.",
    "ההבדל בין הרגיל לחריג הוא אותה מילה קטנה - 'אקסטרה'.",
    "מי שלא מעז, לא זוכה.",
    "דרך אלף קילומטר מתחילה בצעד אחד.",
    "בלתי אפשרי זה רק דעה.",
    "הצלחה היא לא סופית, כישלון הוא לא קטלני, האומץ להמשיך הוא מה שחשוב.",
    "אל תיתן לאתמול לתפוס יותר מדי ממחר.",
    "החלום הוא נקודת התחלה של כל הישג.",
    "אתה גדול מכל האתגרים שלך.",
    "עושר אמיתי הוא להיות מרוצה עם מה שיש לך.",
    "הכוח האמיתי הוא בדברים הקטנים שאתה עושה כל יום.",
    "הבה נפסיק לומר 'אם רק' ונתחיל לומר 'מהיום'.",
    "זמן הוא הנכס היקר ביותר שלנו - השתמש בו בחכמה.",
    "האושר הוא לא יעד, זה דרך חיים.",
    "המטרה של החיים היא לחיות, ולחיות פירושו להיות מודע, בשמחה, בחגיגה.",
    "כל יום הוא הזדמנות חדשה. אתה לא יכול לשנות את העבר, אבל יכול לשנות את העתיד.",
    "הבן כי כל דבר קשה הוא הזדמנות להתחזק.",
    "אמונה בעצמך היא הסוד הראשון להצלחה.",
    "הדרך להגיע למקום שאליו אתה רוצה ללכת מתחילה במקום שבו אתה נמצא עכשיו.",
    "מנהיגות היא לא על כך שאתה מושלם, אלא על כך שאתה אותנטי.",
    "אל תפחד לוותר על הטוב כדי ללכת אחרי הנהדר.",
    "המילה 'בלתי אפשרי' לא צרפתית.",
    "אתה לא צריך להיות גדול כדי להתחיל, אבל אתה צריך להתחיל כדי להיות גדול.",
    "העתיד שייך לאלה שמאמינים ביופי של החלומות שלהם.",
    "אל תמתין לנסיבות המושלמות, כי הן לעולם לא יגיעו.",
    "הצלחה היא שנה אחר שנה של מאמץ מתמיד בכיוון הנכון.",
    "אין דרכים קלות מכאן לשם שמאיפה שהוא שווה ללכת.",
    "החיים הם מסע, לא יעד. תהנה מהדרך.",
    "אתה יכול להיות כל מה שאתה רוצה להיות אם אתה מוכן לעבוד עבור זה.",
    "הבעיות הן מתנות, הן מעירות אותנו לחיים.",
    "אל תהיה עובד בחלומות של אחרים, תהיה הבוס של החלומות שלך.",
    "הדרך להפוך לחזק היא להתמודד עם הדברים שמפחידים אותך.",
    "אתה לא צריך להיות גאון כדי להצליח, אתה צריך להיות עקבי.",
    "אל תיתן לאחרים להחליט בשבילך מה אתה יכול ומה אתה לא יכול.",
    "הבה נזכור: ספר אחד, עט אחד, ילד אחד ומורה אחד יכולים לשנות את העולם.",
    "אתה לא יכול לחבר את הנקודות להסתכל קדימה, אתה יכול רק לחבר אותן בהסתכלות אחורה.",
    "אל תשפוט את הצלחתך בהשוואה לאחרים. שפוט אותו בהשוואה למה שהיית מסוגל להשיג.",
    "אם אתה חושב קטן, התוצאות שלך יהיו קטנות. אם אתה חושב גדול, התוצאות יהיו גדולות.",
    "אל תהיה נר שמאיר לאחרים ושורף את עצמו, למד להיות שמש שמאירה ומחממת את כולם.",
    "הדרך להיות מאושר היא לעשות מישהו אחר מאושר.",
    "אתה לא יכול לשלוט על מה שקורה לך, אבל אתה יכול לשלוט על איך אתה מגיב לזה.",
    "אל תיתן לאתמול לקחת יותר מדי ממחר.",
    "אמונה היא לעשות את הצעד הראשון גם כשאתה לא רואה את כל המדרגות.",
    "הקושי הוא מה שעושה אותנו חזקים. הקלות הוא מה שעושה אותנו חלשים.",
    "אל תמתין לדרך המושלמת, תפוס את הדרך ועשה אותה מושלמת.",
    "החלום הגדול ביותר שלך צריך להפחיד אותך ולעורר אותך בו זמנית.",
    "אתה יותר חזק ממה שאתה חושב ויותר מוכשר ממה שאתה מאמין.",
    "הדרך הטובה ביותר להתגבר על הפחד היא לעמוד מולו.",
    "אל תיתן לאף אחד להגיד לך שאתה לא יכול לעשות משהו.",
    "התשוקה היא האנרגיה שמניעה אותנו להשיג את החלומות שלנו.",
    "כל מה שאתה צריך זה תכנית, כביש ואומץ לעצור על הגז.",
    "אתה לא צריך להיות מושלם כדי להיות מדהים.",
    "הדרך להצליח היא להתחיל. הדרך להתחיל היא לחלק את המשימות המורכבות למשימות קטנות וניתנות לביצוע ואז להתחיל עם הראשונה."
  ];

  // Snake-like continuous movement
  useEffect(() => {
    const moveSnake = () => {
      setPosition(prevPos => {
        const speed = 1.5; // מהירות התנועה
        const imageSize = 80; // גודל התמונה
        const maxX = window.innerWidth - imageSize;
        const maxY = window.innerHeight - imageSize;
        
        let newX = prevPos.x + (direction.x * speed);
        let newY = prevPos.y + (direction.y * speed);
        let newDirectionX = direction.x;
        let newDirectionY = direction.y;

        // בדיקת גבולות ושינוי כיוון
        if (newX <= 0 || newX >= maxX) {
          newDirectionX = -direction.x;
          newX = Math.max(0, Math.min(maxX, newX));
        }
        
        if (newY <= 0 || newY >= maxY) {
          newDirectionY = -direction.y;
          newY = Math.max(0, Math.min(maxY, newY));
        }

        // עדכון כיוון אם השתנה
        if (newDirectionX !== direction.x || newDirectionY !== direction.y) {
          setDirection({ x: newDirectionX, y: newDirectionY });
        }

        return { x: newX, y: newY };
      });
    };

    const interval = setInterval(moveSnake, 30); // עדכון כל 30ms לתנועה חלקה יותר
    return () => clearInterval(interval);
  }, [direction]);

  // Initialize random direction
  useEffect(() => {
    setDirection({
      x: Math.random() > 0.5 ? 1 : -1,
      y: Math.random() > 0.5 ? 1 : -1
    });
  }, []);

  // Auto-hide quote after 2 seconds
  useEffect(() => {
    if (showQuote) {
      const timer = setTimeout(() => {
        setShowQuote(false);
      }, 2000); // 2 שניות

      return () => clearTimeout(timer);
    }
  }, [showQuote]);

  const handleClick = () => {
    setCurrentQuote(Math.floor(Math.random() * wisdomQuotes.length));
    setShowQuote(true);
  };

  return (
    <>
      {/* Floating Click-Me Image */}
      <motion.div
        className="fixed cursor-pointer z-50"
        style={{
          left: position.x,
          top: position.y,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1
        }}
        transition={{ 
          scale: { duration: 0.5, delay: 3 },
          opacity: { duration: 0.5, delay: 3 }
        }}
        whileHover={{ 
          scale: 1.2,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-lg opacity-60 animate-pulse" />
          
          {/* Click-me image container */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
            <img 
              src="/image.png" 
              alt="לחץ עלי" 
              className="w-16 h-16 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-pink-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">👆</div>';
                }
              }}
            />
          </div>

          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 0, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Floating sparkles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"
              animate={{
                y: [-25, -45, -25],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: '-15px'
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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60] flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                exit: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl relative pointer-events-auto"
            >
              {/* Quote text */}
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-gray-700 leading-relaxed font-medium"
                >
                  {wisdomQuotes[currentQuote]}
                </motion.p>
              </div>

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