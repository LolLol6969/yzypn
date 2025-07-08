function handleLinkClick(section, path) {
    console.log('Navigating to:', section, 'at path:', path);
    
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
    
    return false;
}

console.log('YEEZYPORN landing page initialized');

window.addEventListener('resize', function() {
    console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
});

window.addEventListener('beforeunload', function(e) {
    console.log('Page unload prevented');
});
