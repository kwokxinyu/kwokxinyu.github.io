document.querySelectorAll('.hover-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        document.getElementById('name-element').style.opacity = '0';
    });
    button.addEventListener('mouseout', () => {
        document.getElementById('name-element').style.opacity = '1';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var dailyTheTableButton = document.querySelector('.dailythetable');
    var firstElements = document.querySelectorAll('.first');

    if (dailyTheTableButton) {
        dailyTheTableButton.addEventListener('mouseover', function() {
            firstElements.forEach(function(element) {
                element.style.opacity = '1';
            });
        });

        dailyTheTableButton.addEventListener('mouseout', function() {
            firstElements.forEach(function(element) {
                element.style.opacity = '0';
            });
        });

    }
});


document.addEventListener('DOMContentLoaded', function() {
    var mapButton = document.querySelector('.map');
    var mapElements = document.querySelectorAll('.maps');

    if (mapButton) {
        mapButton.addEventListener('mouseover', function() {
            mapElements.forEach(function(element) {
                element.style.opacity = '1';
            });
        });

        mapButton.addEventListener('mouseout', function() {
           mapElements.forEach(function(element) {
                element.style.opacity = '0';
            });
        });

    }
});

     
document.addEventListener('DOMContentLoaded', function() {
    var mapButton = document.querySelector('.packaging');
    var mapElements = document.querySelectorAll('.theordinary');

    if (mapButton) {
        mapButton.addEventListener('mouseover', function() {
            mapElements.forEach(function(element) {
                element.style.opacity = '1';
            });
        });

        mapButton.addEventListener('mouseout', function() {
           mapElements.forEach(function(element) {
                element.style.opacity = '0';
            });
        });

    }
});

    

       
    