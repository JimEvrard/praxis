new Swiper(".mySwiper", {
    speed: 3000,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    }
});

/* -------------------------------- */
let start = false;

let op_title_element;
try {
    op_title_element = document.getElementById('op-title');
} catch (e) {}

let op_img_1_element;
try {
    op_img_1_element = document.getElementById('op-img-1');
} catch (e) {}

let op_img_2_element;
try {
    op_img_2_element = document.getElementById('op-img-2');
} catch (e) {}

let op_img_3_element;
try {
    op_img_3_element = document.getElementById('op-img-3');
} catch (e) {}

let aix_paris_block_element;
try {
    aix_paris_block_element = document.getElementById('aix-paris-block');
} catch (e) {}

let ref_title_element;
try {
    ref_title_element = document.getElementById('ref-title');
} catch (e) {}

let ref_row_1_element;
try {
    ref_row_1_element = document.getElementById('ref-row-1');
} catch (e) {}

let ref_row_2_element;
try {
    ref_row_2_element = document.getElementById('ref-row-2');
} catch (e) {}

let ref_row_3_element;
try {
    ref_row_3_element = document.getElementById('ref-row-3');
} catch (e) {}

let ref_row_4_element;
try {
    ref_row_4_element = document.getElementById('ref-row-4');
} catch (e) {}

let ref_row_5_element;
try {
    ref_row_5_element = document.getElementById('ref-row-5');
} catch (e) {}

let ref_row_6_element;
try {
    ref_row_6_element = document.getElementById('ref-row-6');
} catch (e) {}

let more_ref_title_element
try {
    more_ref_title_element = document.getElementById('more-ref-title');
} catch (e) {}

let more_ref_block_1_element;
try {
    more_ref_block_1_element = document.getElementById('more-ref-block-1');
} catch (e) {}

let more_ref_block_2_element;
try {
    more_ref_block_2_element = document.getElementById('more-ref-block-2');
} catch (e) {}

let numbers_element;
try {
    numbers_element = document.getElementById('numbers');
} catch (e) {}

let card_1_element;
try {
    card_1_element = document.getElementById('card-1');
} catch (e) {}

let card_2_element;
try {
    card_2_element = document.getElementById('card-2');
} catch (e) {}

let card_3_element;
try {
    card_3_element = document.getElementById('card-3');
} catch (e) {}

let img_1_vendez_element;
try {
    img_1_vendez_element = document.getElementById('img-1-vendez');
} catch (e) {}
let img_2_vendez_element;
try {
    img_2_vendez_element = document.getElementById('img-2-vendez');
} catch (e) {}
let img_3_vendez_element;
try {
    img_3_vendez_element = document.getElementById('img-3-vendez');
} catch (e) {}
let img_4_vendez_element;
try {
    img_4_vendez_element = document.getElementById('img-4-vendez');
} catch (e) {}

let img_5_vendez_element;
try {
    img_5_vendez_element = document.getElementById('img-5-vendez');

} catch (e) {}
let img_6_vendez_element;
try {
    img_6_vendez_element = document.getElementById('img-6-vendez');

} catch (e) {}
let text_1_vendez_element;
try {
    text_1_vendez_element = document.getElementById('text-1-vendez');
} catch (e) {}

document.querySelectorAll('.animate__animated').forEach(e => e.style.animationPlayState = 'paused');

document.querySelectorAll('.run').forEach(e => e.style.animationPlayState = 'running');



document.addEventListener('scroll', e => {
    try {
        animateScrollTiming(op_title_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(op_img_1_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(op_img_2_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(op_img_3_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(aix_paris_block_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_title_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_1_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_2_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_3_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(more_ref_title_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(more_ref_block_1_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(more_ref_block_2_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(numbers_element, 500);
    } catch (e) {}
    try {
        if (!start && window.scrollY > numbers_element.getBoundingClientRect().y - (window.innerHeight - window.scrollY)) {
            start = true;
            let n1 = 0;
            let n2 = 0;
            let n3 = 0;
            let n4 = 0;
            let n5 = 0;
            setTimeout(() => {
                setInterval(() => {
                    if (n1 < 30) {
                        n1++;
                        document.getElementById('n-1').innerText = n1.toString();
                    }
                }, 100);
                setInterval(() => {
                    if (n2 < 70) {
                        n2++;
                        document.getElementById('n-2').innerText = n2.toString();
                    }
                }, 50);
                setInterval(() => {
                    if (n3 < 947) {
                        n3++;
                        document.getElementById('n-3').innerText = n3.toString();
                    }
                }, 0);
                setInterval(() => {
                    if (n4 < 4) {
                        n4++;
                        document.getElementById('n-4').innerText = n4.toString();
                    }
                }, 700);
                setInterval(() => {
                    if (n5 < 1) {
                        n5++;
                        document.getElementById('n-5').innerText = n5.toString();
                    }
                }, 1000);
            }, 700);
        }
    } catch (e) {}
    try {
        animateScrollTiming(card_1_element, 100);
    } catch (e) {}
    try {
        animateScrollTiming(card_2_element, 200);
    } catch (e) {}
    try {
        animateScrollTiming(card_3_element, 100);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_4_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_5_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(ref_row_6_element, 0);
    } catch (e) {}
    try {
        animateScrollTiming(img_1_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(img_2_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(img_3_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(img_4_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(img_5_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(img_6_vendez_element, 500);
    } catch (e) {}
    try {
        animateScrollTiming(text_1_vendez_element, 500);
    } catch (e) {}
});

function animateScrollTiming(element, timing) {
    if (window.scrollY > element.getBoundingClientRect().y - (window.innerHeight - window.scrollY))
        setTimeout(() => element.style.animationPlayState = 'running', timing);
}