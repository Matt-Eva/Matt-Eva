function reveal(){
    
}


function introSize() {
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

introSize();

function labelSize() {
    /*if (window.innerWidth > 1206) {
        let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 100px 10px 100px';
        }
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }
    else if(window.innerWidth <= 1206 && window.innerWidth > 1082) {
        let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 80px 10px 80px';
        }
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }
    else if(window.innerWidth <= 1082 && window.innerWidth > 905) {
        let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 50px 10px 50px';
        }
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }
    else if(window.innerWidth <= 905 && window.innerWidth > 722) {
        let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 20px 10px 20px';
        }
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }
    else if(window.innerWidth <= 722 && window.innerWidth > 602) {
        let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 0px 10px 0px';
        }
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }*/
    /*else*/ if(window.innerWidth <= 602) {
       /* let x = document.getElementsByClassName('label');
        for(const element of x) {
            element.style.margin = '10px 0px 10px 0px';
        }*/
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '16px';
        }
    } else if(window.innerWidth > 602){
        let y = document.getElementsByClassName('label');
        for(const element of y) {
            element.style.fontSize = '20px';
        }
    }
}

// Commented out section to be used with commented out <div> html

labelSize();

window.addEventListener('resize', function() {
    /*document.getElementById('width').innerText = window.innerWidth;
    document.getElementById('height').innerText = window.innerHeight;*/
    introSize();
    labelSize();
})