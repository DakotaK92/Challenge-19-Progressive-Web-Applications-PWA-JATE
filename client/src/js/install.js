const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log('event' + event)
    event.preventDefault();
    // Store triggered events
    window.defferedPrompt = event;
    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    
    // Rest the deffered prompt variable, it can only be used once
    window.defferedPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    console.log('install hit')
    window.defferedPrompt = null;
});
