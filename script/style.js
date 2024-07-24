document.getElementById("focus-btn").classList.toggle('clicked');

// Select all buttons from the section 'mode'.
const buttons = document.querySelectorAll('.mode-btn');

// Add a listener for each button click.
buttons.forEach(button => {
    button.addEventListener('click', function(){
        
        // Verifies if the actual button is clicked.
        if (this.classList.contains('clicked')){
            return;
        }

        // Removes the class 'clicked' from all buttons.
        buttons.forEach(b => {
            if (b !== button){
                b.classList.remove('clicked');
            }
        });

        // Adds the class 'clicked' on the clicked button.
        this.classList.toggle('clicked');

        // Get the clicked button id.
        let clickedButtonId = this.id;
        let timerLbl = document.getElementById('timer-lbl');

        // Set the timer based on choosed mode.
        if(clickedButtonId == 'focus-btn'){
            timerLbl.innerHTML = '25:00';
            setFocusTheme();
            stopTimer();
        } else if (clickedButtonId == 'sbreak-btn'){
            timerLbl.innerHTML = '05:00';
            setSBreakTheme();
            stopTimer();
        } else if (clickedButtonId == 'lbreak-btn'){
            timerLbl.innerHTML = '15:00'
            setLBreakTheme();
            stopTimer();
        }
    });      
});

function setFocusTheme() {
    var root = document.documentElement;

    root.style.setProperty('--cor-primaria', '#C04B31');
    root.style.setProperty('--cor-secundaria', '#964F3F');
    root.style.setProperty('--cor-terciaria', '#6B473F');

    
}

function setSBreakTheme() {
    var root = document.documentElement;
    
    root.style.setProperty('--cor-primaria', '#3F62D5');
    root.style.setProperty('--cor-secundaria', '#41509B');
    root.style.setProperty('--cor-terciaria', '#424A70');
}

function setLBreakTheme() {
    var root = document.documentElement;
    
    root.style.setProperty('--cor-primaria', '#2B80FF');
    root.style.setProperty('--cor-secundaria', '#5677AA');
    root.style.setProperty('--cor-terciaria', '#556680');
}