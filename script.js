document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    
    // Función para crear partículas en el header
    const createParticle = (x, y) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        header.appendChild(particle);

        const size = Math.random() * 5 + 2; // Tamaño aleatorio entre 2px y 7px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        const startX = x - header.getBoundingClientRect().left;
        const startY = y - header.getBoundingClientRect().top;
        
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        
        const endX = startX + (Math.random() - 0.5) * 200; // Se dispersa en X
        const endY = startY + (Math.random() - 0.5) * 200; // Se dispersa en Y
        
        const duration = Math.random() * 1.5 + 0.5; // Duración aleatoria entre 0.5s y 2s
        
        particle.style.transition = `transform ${duration}s ease-out, opacity ${duration}s ease-out`;
        particle.style.transform = `translate(${endX - startX}px, ${endY - startY}px) scale(0)`;
        particle.style.opacity = 0;
        
        // Eliminar la partícula después de la animación
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    };

    // Crear partículas al mover el ratón sobre el header
    header.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 2; i++) { // Crea 2 partículas por cada movimiento del ratón
            createParticle(e.clientX, e.clientY);
        }
    });

    // Agregar estilos CSS para las partículas dinámicamente
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        .particle {
            position: absolute;
            background-color: var(--color-secundario);
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 5px var(--color-secundario), 0 0 10px var(--color-principal);
            transform-origin: center;
            opacity: 1;
        }
    `;
    document.head.appendChild(particleStyles);
});