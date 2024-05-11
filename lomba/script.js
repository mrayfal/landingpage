// remove element 
var elemenToHide = document.getElementById('elemenToHide');
var parentElem = elemenToHide.parentNode;
var isRemoved = false;


function checkWidthAndToggleElement() {
    var lebarLayar = window.innerWidth;

    if (lebarLayar < 990 && !isRemoved) {
        parentElem.removeChild(elemenToHide);
        isRemoved = true;
    }
    else if (lebarLayar >= 990 && isRemoved) {
        parentElem.appendChild(elemenToHide);
        isRemoved = false;
    }
}


checkWidthAndToggleElement();


window.addEventListener('resize', function () {
    checkWidthAndToggleElement();
});