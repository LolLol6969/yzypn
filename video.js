// Questo script viene eseguito quando la pagina video.html è caricata.
window.onload = function() {
    const videoPlayer = document.getElementById('video-player');
    
    // Crea un oggetto per analizzare i parametri dell'URL (la parte dopo '?')
    const urlParams = new URLSearchParams(window.location.search);
    
    // Ottiene il valore del parametro 'v' (es. '1', '2', etc.)
    const videoNumber = urlParams.get('v');

    // Se un numero di video è stato passato nell'URL...
    if (videoNumber) {
        // ...costruisce il percorso del file video.
        // Assumo che i video siano in formato .mp4. Se usi un altro formato (es. .webm), cambialo qui.
        const videoSource = `videos/video${videoNumber}.mp4`; 
        
        // Imposta la sorgente del player video
        videoPlayer.src = videoSource;
    } else {
        // Se non viene specificato nessun video, mostra un errore in console.
        console.error("Nessun video specificato nell'URL. Aggiungi ?v=NOMEVIDEO alla fine dell'URL.");
        // Potresti anche mostrare un messaggio di errore all'utente.
        const backButton = document.querySelector('.back-button');
        if(backButton) {
            backButton.innerText = "ERRORE - TORNA INDIETRO";
        }
    }

    // Aggiunge una funzione extra: clicca sul video per metterlo in pausa o riprenderlo.
    videoPlayer.addEventListener('click', () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });
};
