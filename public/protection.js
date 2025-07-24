// Website Protection Script
(function() {
    'use strict';
    
    // Disable right-click (context menu)
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable text selection (copy)
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable copy event
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable drag for images (prevents drag and drop)
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'img') {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable F12, Ctrl+Shift+I (Developer Tools)
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
    });
    
    // ...existing code...
    
})();