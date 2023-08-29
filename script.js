document.addEventListener('DOMContentLoaded', function(){
    const sig = document.getElementById('next');
    const ant = document.getElementById('previous');
    sig.addEventListener('click', function(){
        location.href= 'page2.html';
    })
})

document.addEventListener('DOMContentLoaded', function(){
    const ant = document.getElementById('previous');
    ant.addEventListener('click', function(){
        location.href= 'index.html';
    })
})