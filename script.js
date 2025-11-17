function createSnowflakes() {
    const body = document.body;
    
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 5 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 5;
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${left}%`;
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;
        
        body.appendChild(snowflake);
    }
}

document.addEventListener('DOMContentLoaded', createSnowflakes);
