function reveal(){
    
}


function windowSize() {
    if (window.innerWidth > 1042) {
        document.getElementById('head').style.fontSize = '40px';
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '30px';
        }
    }
   else if (window.innerWidth > 930 && window.innerWidth < 1042) {
        document.getElementById('head').style.fontSize = '40px';    
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '25px';
            }
    }
    else if (window.innerWidth < 932 && window.innerWidth > 645) {
        document.getElementById('head').style.fontSize = '40px';
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '20px';
            }
    }
    else if (window.innerWidth < 645 && window.innerWidth > 563) {
        document.getElementById('head').style.fontSize = '30px';
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '20px';
            }
    }
    else if (window.innerWidth < 563 && window.innerWidth > 530) {
        document.getElementById('head').style.fontSize = '25px';
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '20px';
            }
    }
    else if (window.innerWidth < 530) {
        document.getElementById('head').style.fontSize = '20px';
        let x = document.getElementsByClassName('description');
        for(const element of x) {
            element.style.fontSize = '18px';
            }
    }
}

windowSize();



window.addEventListener('resize', function() {
    document.getElementById('width').innerText = window.innerWidth;
    document.getElementById('height').innerText = window.innerHeight;
    windowSize();
})