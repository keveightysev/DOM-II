const red = document.querySelector(".block--red");
const blue = document.querySelector(".block--blue");
const green = document.querySelector(".block--green");
const pink = document.querySelector(".block--pink");
const gray = document.querySelector(".block--gray");
const blocks = Array.from(document.querySelectorAll(".blocks"));

// blocks.forEach(block => {
//     block.addEventListener('click', e =>{
//         block.style.order = "5";
//     })
// })

const counter = () => {
    let count = 0;
    return function () {
        return count--;
    };
};

const countdown = counter();

red.addEventListener('click', e => {
    red.style.order = countdown();
    TweenMax.to(red, 3, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%", x:1000});
})

blue.addEventListener('click', e => {
    blue.style.order = countdown();
    TweenMax.to(blue, 3, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%", x:1000});
})

green.addEventListener('click', e => {
    green.style.order = countdown();
    TweenMax.to(green, 3, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%", x:1000});
})

pink.addEventListener('click', e => {
    pink.style.order = countdown();
    TweenMax.to(pink, 3, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%", x:1000});
})

gray.addEventListener('click', e => {
    gray.style.order = countdown();
    TweenMax.to(gray, 3, { rotation: "+=360", repeat:-1, ease: Linear.easeNone, transformOrigin:"50% 50%", x:1000});
})