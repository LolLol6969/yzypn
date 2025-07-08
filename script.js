// JavaScript vanilla per gestire i click sui link
function handleLinkClick(section, path) {
    console.log('Navigating to:', section, 'at path:', path);
    
    // Simulazione di navigazione - in un'app reale questi potrebbero essere link a pagine diverse
    switch(section) {
        case 'YZYPRN 1':
            console.log('Loading video content 1...');
            break;
        case 'YZYPRN 2':
            console.log('Loading video content 2...');
            break;
        case 'YZYPRN 3':
            console.log('Loading video content 3...');
            break;
        case 'YZYPRN 4':
            console.log('Loading video content 4...');
            break;
        case 'YZYPRN 5':
            console.log('Loading video content 5...');
            break;
        default:
            console.log('Unknown section');
    }
    
    // Previeni il comportamento di default del link
    return false;
}

// Log di inizializzazione
console.log('YEEZYPORN landing page initialized');

// Funzione per gestire il resize della finestra (se necessario)
window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

// Prevenire il refresh accidentale della pagina
window.addEventListener('beforeunload', function(e) {
    console.log('Page unload prevented');
});