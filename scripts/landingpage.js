$(document).ready(()=>{

    let mainNav = $('#js-menu');
    let navbarToggle = $('#js-navbar');
    
    navbarToggle.on('click', ()=>{
        mainNav.toggleClass('active')
    })
});

