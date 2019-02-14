const container = document.querySelector('.container');
const navLinks = Array.from(document.getElementsByClassName('nav-link'));
const funBus = document.querySelector('.intro img');
const midImgs = document.querySelectorAll('.img-content img');
const destImg = document.querySelector('.content-destination img')
const buttons = document.getElementsByClassName('btn');
const logo = document.querySelector('.logo-heading');
const text = document.querySelector('p');

container.addEventListener('dblclick', event => {
    if (container.style.background === "yellow"){
        container.style.background = "white";
    } else {
        container.style.background = "yellow";
    }
});

navLinks.forEach( link => {
    link.addEventListener('click', event => {
        event.stopPropagation();
        event.preventDefault();
        alert("Where do you think you're going?");
    })
})

text.addEventListener('mousedown', event => {
    text.style.fontWeight = "bold"
})

funBus.addEventListener('mouseover', event => {
    funBus.style.filter = "invert(100%)";
})

funBus.addEventListener('mouseout', event =>{
    funBus.style.filter = "invert(0%)";
})

window.addEventListener('scroll', event => {
    logo.style.fontSize = `100px`;
})

window.addEventListener('keypress', event => {
    if (event.key === "2") {
        midImgs.forEach(img => {
            img.style.width = "20%";
        })
    } else if (event.key === "3") {
        midImgs.forEach(img => {
            img.style.width = "30%";
        })
    } else if (event.key === "4") {
        midImgs.forEach(img => {
            img.style.width = "40%";
        })
    } else if (event.key === "5") {
        midImgs.forEach(img => {
            img.style.width = "50%";
        })
    } else if (event.key === "6") {
        midImgs.forEach(img => {
            img.style.width = "60%";
        })
    } else if (event.key === "7") {
        midImgs.forEach(img => {
            img.style.width = "70%";
        })
    } else if (event.key === "8") {
        midImgs.forEach(img => {
            img.style.width = "80%";
        })
    } else if (event.key === "9") {
        midImgs.forEach(img => {
            img.style.width = "90%";
        })
    } else if (event.key === "0") {
        midImgs.forEach(img => {
            img.style.width = "100%";
        })
    } else if (event.key === "1") {
        midImgs.forEach(img => {
            img.style.width = "10%";
        })
    }
})

window.addEventListener('load', event => {
    alert('Welcome to my house.')
})

destImg.addEventListener('mousedown', event => {
    let shiftX = event.clientX - destImg.getBoundingClientRect().left;
    let shiftY = event.clientY - destImg.getBoundingClientRect().top;

    destImg.style.position = "absolute";
    destImg.style.zIndex = 1000;
    document.body.append(destImg);

    function moveAt(pageX, pageY) {
        destImg.style.left = pageX - shiftX + 'px';
        destImg.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    destImg.addEventListener('mouseup', event => {
        document.removeEventListener('mousemove', onMouseMove);
        destImg.removeEventListener('mouseup', null);
    })

    destImg.addEventListener('dragstart', event => {
        return false;
    })
})