// Dynamic routing frame navigation workflow pathways handler engine
function navigateTo(screenId) {
    // Collect all template structures viewport screens array list
    const screens = document.querySelectorAll('.mobile-frame');
    
    // Remove running visibility configuration class token from everywhere
    screens.forEach(screen => {
        screen.classList.remove('active');
    });

    // Directly bind active hook element onto selected destination node container 
    const activeTarget = document.getElementById(screenId);
    if(activeTarget) {
        activeTarget.classList.add('active');
    }
}