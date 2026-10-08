document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const nextBtn = document.getElementById('next-btn');
    const timerDisplay = document.getElementById('timer');
    
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    
    const heartsContainer = document.getElementById('hearts-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const hearts = ['❤️', ' 🩷','💓','💗','🌹','🌻'];
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's'; 
        heart.style.fontSize = Math.random() * 1.5 + 0.8 + 'rem'; 
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createHeart, 300);

startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none'; 
        let month = 1; 
        let day = 8; 
        const targetMonth = 10; 
        const targetDay = 8; 
        
        const interval = setInterval(() => {
            day++; 

            if (day > 31) {
                day = 1;
                month++;
            }

            const formattedMonth = month < 10 ? `0${month}` : month;
            const formattedDay = day < 10 ? `0${day}` : day;
            timerDisplay.innerText = `${formattedMonth}:${formattedDay}`;
         
            if (month === targetMonth && day === targetDay) {
                clearInterval(interval);
                setTimeout(triggerPanels, 1000); 
            }
        }, 10); 
    });
    function triggerPanels() {
        document.body.classList.add('panels-closed');

        page1.classList.remove('active');
        page1.classList.add('hidden');

        setTimeout(() => {
            page2.classList.remove('hidden');
            page2.classList.add('active');
        }, 1200); 
    }

    nextBtn.addEventListener('click', () => {
        page2.classList.remove('active');
        page2.classList.add('hidden');
        
        page3.classList.remove('hidden');
        page3.classList.add('active');
    });
});