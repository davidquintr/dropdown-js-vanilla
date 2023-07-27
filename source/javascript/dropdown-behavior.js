let buttonDrop = document.querySelectorAll(".button-drop")
let dropDownElements = document.querySelectorAll(".dropdown-element")

if (buttonDrop.length > 0 && dropDownElements.length > 0) {
    window.addEventListener("DOMContentLoaded", function () {
        assignButton()
        dropSize()
    })
}

function assignButton() {
    try {
        buttonDrop.forEach((element, index) => {
            element.addEventListener('click', function () {
                dropDownElements[index].style.transition = ""
                dropDownElements[index].classList.toggle("dropdown-active")
                element.classList.toggle("dropIcon-active")
            })
        })
    } catch (error){}
}

window.addEventListener('resize', function () {
    dropSize()
})

function dropSize() {
    dropDownElements.forEach((element, index) => {
        let height = element.scrollHeight
        element.style.maxHeight = height + "px";
    })
}


// detect resize
(function () {
    let oldresize = window.onresize;
    window.onresize = function (e) {
        var event = window.event || e;
        if (typeof (oldresize) === 'function' && !oldresize.call(window, event)) {
            return false;
        }
        if (typeof (window.onzoom) === 'function') {
            return window.onzoom.call(window, event);
        }
    }
})();

