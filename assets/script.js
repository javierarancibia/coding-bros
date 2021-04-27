// let we = document.getElementById('nosotros');
// we.addEventListener("click", nosotros)


// function nosotros() {
//     $('#montaje').fadeOut(1000)
//     $('#we').fadeIn(8500).css('left' ,'0');
// }

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  
  
let priceDivVar = document.getElementById('priceLink')
priceDivVar.addEventListener("click", precios)

let contactDivVar = document.getElementById('contactLink')
contactDivVar.addEventListener("click", contacto)

let portafolioDivVar = document.getElementById('portafolioLink')
portafolioDivVar.addEventListener("click", portafolio)
  
  
  
function precios() {
    $('html, body').animate({
        scrollTop: $('#priceDiv').offset().top
    }, 10);
}


function contacto() {
    $('html, body').animate({
        scrollTop: $('#form').offset().top
    }, 10);
}

function portafolio() {
    $('html, body').animate({
        scrollTop: $('#portafolio').offset().top
    }, 10);
}