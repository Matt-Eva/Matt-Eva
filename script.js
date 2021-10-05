function reveal(){
    
}





window.addEventListener('resize', function() {
    document.getElementById('width').innerText = window.innerWidth;
    document.getElementById('height').innerText = window.innerHeight;
   if (window.innerWidth > 1042) {
        document.getElementById('description').style.fontSize = '30px';
    }
   else if (932 < window.innerWidth < 1042) {
        document.getElementById('description').style.fontSize = '25px';
    }
    else if (window.innerWidth < 932) {
        document.getElementById('description').style.fontSize = '10px';
    }
})