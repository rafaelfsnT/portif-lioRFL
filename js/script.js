document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.getElementById('typewriter');
    const text = "< Desenvolvedor Front End />";
    let index = 0;
    let isAdding = true;
    let isWaiting = false;

    function type() {
        typewriter.innerHTML = text.substring(0, index);
        
        if (isAdding) {
            if (index < text.length) {
                index++;
                setTimeout(type, 75);
            } else {
                isAdding = false;
                isWaiting = true;
                setTimeout(() => {
                    isWaiting = false;
                    type();
                }, 1000); // Pausa antes de começar a apagar
            }
        } else {
            if (index > 0) {
                index--;
                setTimeout(type, 75);
            } else {
                isAdding = true;
                setTimeout(type, 1000); // Pausa antes de começar a digitar novamente
            }
        }
    }

    type();
});