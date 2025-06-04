const pointer = document.createElement('img');
pointer.src = 'https://img.icons8.com/?size=100&id=oI67QbuKf2Tv&format=png&color=daa520'; // Changed color to goldenrod (hex: #daa520)
pointer.style.position = 'fixed';
pointer.style.top = '0';
pointer.style.left = '0';
pointer.style.width = '22px';
pointer.style.height = '22px';
pointer.style.pointerEvents = 'none';
pointer.style.zIndex = '9999';
pointer.style.transition = 'filter 0.2s';
// Updated drop-shadow to goldenrod color
pointer.style.borderColor = 'drop-shadow(0 0 8px #daa52080)';
document.body.appendChild(pointer);

// Hide the default cursor
document.body.style.cursor = 'none';
// Smooth pointer movement
let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
    targetX = e.clientX - 16;
    targetY = e.clientY - 16;
});

function animatePointer() {
    currentX += (targetX - currentX) * 0.2;
    currentY += (targetY - currentY) * 0.2;
    pointer.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(animatePointer);
}

animatePointer();
