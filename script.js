
// gsap.fromTo('.ang_icon',{opacity: 0 }, {opacity:1,duration:1.2},'<10%')
// gsap.fromTo('.html_icon',{opacity: 0 }, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.css_icon',{opacity: 0}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.js_icon',{opacity: 0}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.python_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.node_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.c_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.b_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')


// gsap.fromTo('.js_icon',{opacity: 0}, {opacity:1, duration:1.2},'<10%')
// gsap.fromTo('.css_icon',{opacity: 0}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.python_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.html_icon',{opacity: 0 }, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.node_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')
// gsap.fromTo('.ang_icon',{opacity: 0 }, {opacity:1,duration:1.2},'<15%')
// gsap.fromTo('.c_icon',{opacity: 0,}, {opacity:1, duration:1.2},'<15%')



// gsap.fromTo('.input-group',{x:-100, opacity: 0,}, {opacity:1,x:0, duration:1.5},)

let syl=document.querySelector('#syllabus');
let course=document.querySelector('#course_box');
let html=document.querySelector('#html');
let ret=document.querySelector('#return_course')
html.addEventListener('click',() => {
    syl.style.display="block"
    gsap.fromTo('#syllabus',{ opacity:0}, {opacity:1, duration:1},)
    course.style.display="none"
    
})
ret.addEventListener('click',() =>{
   gsap.fromTo('#course_box',{opacity:0}, {opacity:1, duration:1},)
    course.style.display="block";
    syl.style.display="none";

})

