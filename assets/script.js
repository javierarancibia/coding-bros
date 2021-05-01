// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
// }

function openNavCell() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNavCell() {
document.getElementById("myNav").style.width = "0%";
}

  
  
  
let priceDivVar = document.getElementById('priceLink')
priceDivVar.addEventListener("click", precios)

let contactDivVar = document.getElementById('contactLink')
contactDivVar.addEventListener("click", contacto)

let portafolioDivVar = document.getElementById('portafolioLink')
portafolioDivVar.addEventListener("click", portafolio)

let priceDivVarCell = document.getElementById('priceLinkCell')
priceDivVarCell.addEventListener("click", precios)

let contactDivVarCell = document.getElementById('contactLinkCell')
contactDivVarCell.addEventListener("click", contacto)

let portafolioDivVarCell = document.getElementById('portafolioLinkCell')
portafolioDivVarCell.addEventListener("click", portafolio)
  
  
  
function precios() {
    closeNavCell()
    $('html, body').animate({
        scrollTop: $('#priceDiv').offset().top
    }, 10);
}


function contacto() {
    closeNavCell()
    $('html, body').animate({
        scrollTop: $('#form').offset().top
    }, 10);
}

function portafolio() {
    closeNavCell()
    $('html, body').animate({
        scrollTop: $('#portafolio').offset().top
    }, 10);
}

