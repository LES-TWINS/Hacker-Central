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





let course = document.querySelector("#course_box");
let hcou = document.querySelector("#first_cou");
let ret = document.querySelector("#return_course");
let join = document.querySelector("#join");
let icbox = document.querySelector("#icon_box");
let regbox = document.querySelector(".registration_card");
let syl = document.querySelector("#syllabus");
let close_reg =document.querySelector("#close_reg")
const nav = document.querySelector(".nav-links");


join?.addEventListener("click", () => {
  icbox.style.display = "none";
  gsap.fromTo(".registration_card", {y:-100, opacity: 0 }, { y:150, opacity: 1,  });
  regbox.style.display = "flex";
  document.body.style.backgroundColor="grey";
// if(nav.style.backgroundColor == "#0f1d22"){
//   join.classList.toggle("nav-active");
// }
 
});

hcou?.addEventListener("click", () => {
  syl.style.display = "block";
  gsap.fromTo("#syllabus", { opacity: 0 }, { opacity: 1, duration: 1 });
  course.style.display = "none";
});

ret?.addEventListener("click", () => {
  gsap.fromTo("#course_box", { opacity: 0 }, { opacity: 1, duration: 1 });
  course.style.display = "block";
  syl.style.display = "none";
});



const navSlide = () => {
  const main = document.querySelector(".main");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");


  burger?.addEventListener("click", () => {
    // Toggle Nav
    if(main.style.display=="none"){
      main.style.display="block";
    } else{
      main.style.display="none"
    }
  
     nav.classList.toggle("nav-active");
     gsap.fromTo(".nav-links", {opacity:0}, {opacity:1});

   
 
    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    // Burger Animation
     burger.classList.toggle('toggle')
  });

};

navSlide();


function close(){
  regbox.style.display = 'none'
  document.body.style.backgroundColor= "#fff";
}


document.addEventListener('click', function(e){
  if(e.target.classList[0] == 'form_row' || e.target.classList[0] == 'mask' ){
   close() 
  }
})


close_reg.addEventListener("click",  () => {
  close()
})


// function join1(){
//   join?.addEventListener('click',function(){
//     regbox.classList.toggle("registration_card");
//   })
 
// }
// join1()