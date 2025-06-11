
// Enhanced interactive features for the website

// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    // Add loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: white;
            font-size: 1.5rem;
            transition: opacity 0.5s ease;
        ">
            <div class="loading"></div>
            <span style="margin-right: 1rem;">טוען...</span>
        </div>
    `;
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    });
});

// Add interactive cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: rgba(102, 126, 234, 0.6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${e.clientX - 3}px;
        top: ${e.clientY - 3}px;
        animation: fade-out 0.8s ease-out forwards;
    `;
    document.body.appendChild(cursor);
    
    setTimeout(() => cursor.remove(), 800);
});

// Add CSS for cursor animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fade-out {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
    }
`;
document.head.appendChild(style);

// Enhanced navigation with sound effects (optional)
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        // Add subtle vibration effect if supported
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    });
});

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    z-index: 9999;
    transition: width 0.1s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add easter egg - konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.toString() === konami.toString()) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add CSS for rainbow effect
const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);
