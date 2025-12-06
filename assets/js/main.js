// Cargar contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar juegos destacados
    const juegosContainer = document.getElementById('juegos-container');
    if (juegosContainer && productosData.juegos) {
        juegosContainer.innerHTML = productosData.juegos.map(crearProductoHTML).join('');
    }
    
    // Cargar artículos especiales
    const articulosContainer = document.getElementById('articulos-container');
    if (articulosContainer && productosData.articulos) {
        articulosContainer.innerHTML = productosData.articulos.map(crearProductoHTML).join('');
    }
    
    // Cargar noticias
    const noticiasContainer = document.getElementById('noticias-container');
    if (noticiasContainer && noticiasData) {
        noticiasContainer.innerHTML = noticiasData.map(crearNoticiaHTML).join('');
    }
    
    // Funcionalidades de accesibilidad (copia tu código actual aquí)
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    const darkModeText = darkModeToggle.querySelector('span');
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.className = 'fa-solid fa-sun';
            darkModeText.textContent = 'Modo Claro';
        } else {
            darkModeIcon.className = 'fa-solid fa-moon';
            darkModeText.textContent = 'Modo Oscuro';
        }
    });
    
    // Lector de Texto
    const textReader = document.getElementById('textReader');
    let isReading = false;
    let speech = null;
    
    textReader.addEventListener('click', function() {
        if (!('speechSynthesis' in window)) {
            alert('Tu navegador no soporta la función de lectura de texto');
            return;
        }
        
        if (isReading) {
            speechSynthesis.cancel();
            isReading = false;
            textReader.innerHTML = '<i class="fa-solid fa-volume-up"></i><span>Lector</span>';
        } else {
            const mainText = document.querySelector('main').innerText;
            speech = new SpeechSynthesisUtterance(mainText);
            speech.lang = 'es-ES';
            speech.rate = 1;
            speech.pitch = 1;
            speech.volume = 1;
            
            speech.onend = function() {
                isReading = false;
                textReader.innerHTML = '<i class="fa-solid fa-volume-up"></i><span>Lector</span>';
            };
            
            speechSynthesis.speak(speech);
            isReading = true;
            textReader.innerHTML = '<i class="fa-solid fa-stop"></i><span>Detener</span>';
        }
    });
    
    // Aumentar Texto
    const increaseText = document.getElementById('increaseText');
    const decreaseText = document.getElementById('decreaseText');
    let textSize = 0;
    
    increaseText.addEventListener('click', function() {
        if (textSize < 2) {
            textSize++;
            document.documentElement.classList.remove('large-text', 'larger-text');
            if (textSize === 1) document.documentElement.classList.add('large-text');
            if (textSize === 2) document.documentElement.classList.add('larger-text');
        }
    });
    
    decreaseText.addEventListener('click', function() {
        if (textSize > 0) {
            textSize--;
            document.documentElement.classList.remove('large-text', 'larger-text');
            if (textSize === 1) document.documentElement.classList.add('large-text');
        }
    });
    
    // Alto Contraste
    const highContrast = document.getElementById('highContrast');
    
    highContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
        
        if (document.body.classList.contains('high-contrast')) {
            highContrast.innerHTML = '<i class="fa-solid fa-palette"></i><span>Normal</span>';
        } else {
            highContrast.innerHTML = '<i class="fa-solid fa-circle-half-stroke"></i><span>Contraste</span>';
        }
    });
    
    // Navegación fija al hacer scroll
    const navbar = document.querySelector('.container-navbar');
    const accessibilityBar = document.querySelector('.accessibility-bar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll) {
            navbar.classList.add('hidden-up');
            accessibilityBar.classList.add('hidden-up');
            navbar.classList.remove('visible');
            accessibilityBar.classList.remove('visible');
        } else {
            navbar.classList.remove('hidden-up');
            accessibilityBar.classList.remove('hidden-up');
            navbar.classList.add('visible');
            accessibilityBar.classList.add('visible');
        }
        lastScroll = currentScroll;
    });
});