//check if there's local storage color option 
let mainColors =localStorage.getItem('color-option');
if (mainColors !== null){
     document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));
      //Remove Active Class From all colors listitem
      document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove('active');
   // Add active class on element if data-color == local storage 
   if(element.dataset.color == mainColors){
       element.classList.add("active");
   }

    });
  
}
// Random Background option
let backgroundOption =true;
//Variable to contarol the interval 
let backgroundIn;
//check if there's local storage Rondom Background 
let backgroundLocalItem = localStorage.getItem("background-option");
//check if random background loacl storage is not empty
if (backgroundLocalItem != null){
if(backgroundLocalItem === 'true'){
    backgroundOption =true;
}else{
    backgroundOption =false;
}
  //Remove Active Class From all childrens
  document.querySelectorAll(".random-ba span").forEach(element => {
    element.classList.remove('active');
});
if(backgroundLocalItem === 'true'){
    document.querySelector('.random-ba .yes ').classList.add("active");
}else{
    document.querySelector('.random-ba .no').classList.add("active");
}
}
// Toggle Spin Class On Icon 
document.querySelector(".toggle-setting .icon").onclick= function(){
    // Toggle class fa-spin for Rotation on self 
    this.classList.toggle("fa-spin");
    //Toggle.class open on main Seeting box
    document.querySelector(".setting-box").classList.toggle("open");
};
//switch colors 
const colorsli = document.querySelectorAll(".colors-list li");
//loop on all list items
colorsli.forEach(li => {
    //click on every list item
    li.addEventListener('click' , (e) =>{
        // set color on root 
        document.documentElement.style.setProperty('--main-color' ,e.target.dataset.color);
        //set color on local storage 
        localStorage.setItem("color-option",e.target.dataset.color)

        RemoveActiveClass(e);
    });
    
});

//switch Background
const randomBak = document.querySelectorAll(".random-ba  span");
//loop on all list items
randomBak.forEach(span => {
    span.addEventListener('click',(e) =>{
        RemoveActiveClass(e);
        if(e.target.dataset.background === 'yes'){
            backgroundOption =true;
            randomize();
            localStorage.setItem('background-option',true);
        }else{
            backgroundOption =false;
            clearInterval(backgroundIn);
            localStorage.setItem('background-option',false);
        }
    });
    
});



// select langing page 
let langingPage = document.querySelector(".landing-page");
// get array of image 
let imgArray =["bg1.jpg" ,"bg2.jpg" ,"bg3.jpg" ,"bg4.jpg" ,"bg5.jpg"];
//Random Background option 

// Function To Randomize Imgs 
function randomize(){
    if(backgroundOption === true){
        backgroundIn =setInterval(()=>{
        //get Random Number 
        let randomNum = Math.floor(Math.random() * imgArray.length);
        //change background image url 
        langingPage.style.backgroundImage = 'url("images/' + imgArray[randomNum]+'")';
        },1000);
    }
} 

// start our skills
// select skills selector
let ourSkills =document.querySelector('.skills');
window.onscroll = function(){
    //skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;
    //skills outer height

    let skillsOuterHeight =ourSkills.offsetHeight;

     //window height
    let windowHeight =this.innerHeight;
  
    //window scroll top
    let windowScrollTop =this.pageYOffset;
 

    if(windowScrollTop >=(skillsOffsetTop + skillsOuterHeight - windowHeight)){
        let allSkills =document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill =>{
            skill.style.width=skill.dataset.progress;
        });
      
    }
};
// end  our skills

// create popupBox with images 

let ourGallery =document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
img.addEventListener("click",(e)=>{
//create overlay element 
let overLay =document.createElement('div');
// add class to overlay 
overLay.className="popup-overlay";
//Append overlay to body 
document.body.appendChild(overLay);

//create the popup
let popupBox =document.createElement("div");

//add class to the popupBox
popupBox.className="popup-box";

if(img.alt !==null){
    //create Heading 
    let imgHeading =document.createElement("h2");
    //create text for heading 
    let imgText =document.createTextNode(img.alt);
    //append the text to the heading 
    imgHeading.appendChild(imgText );
    ///append the heading to the popBox
    popupBox.appendChild(imgHeading);
   }
    
// create the image 
let popupImage =document.createElement("img");

//set image source 
popupImage.src=img.src;
//add image to popup box
popupBox.appendChild(popupImage);
//add popupBox to body 
document.body.appendChild(popupBox);

//create te close span 
let closeButton =document.createElement('span');
// add text to span 
let spanText =document.createTextNode("X");
// add textSpan to span 
closeButton.appendChild(spanText);
//add class to close button 
closeButton.className="close-button";

//add closeButton to popBox
popupBox.appendChild(closeButton);
   

});
});

//close popup
document.addEventListener("click",function(e){
    if(e.target.className == 'close-button'){
        e.target.parentElement.remove();
        document.querySelector('.popup-overlay').remove();
    }
  

});
//select all bullets 
const allBullets =document.querySelectorAll(".nav-bullests .bullet");
const allLinks =document.querySelectorAll(".links a");

 function SmoothScroll (element){
    element.forEach(ele =>{
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
               behavior :'smooth'
            });
    
        });
    });
 }
 SmoothScroll (allBullets);
 SmoothScroll (allLinks);

function RemoveActiveClass(ev){
       //Remove Active Class From all childrens
       ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove('active');


    });
    // Add Active Class On Self 
    ev.target.classList.add("active");
}

let bulletsSpan =document.querySelectorAll(".bullets-option span");

let bulletsContainer =document.querySelector(".nav-bullests");

let bullestsLocalStr = localStorage.getItem("bullets-option");

if(bullestsLocalStr !== null){

    bulletsSpan.forEach(span =>{

        span.classList.remove("active");
        

    });
    if(bullestsLocalStr === 'block'){

        
        bulletsContainer.style.display='block';

        document.querySelector(".bullets-option .yes").classList.add("active");
    }else{
        bulletsContainer.style.display='none';

        document.querySelector(".bullets-option .no").classList.add("active");

    }
}

bulletsSpan.forEach(span =>{

    span.addEventListener("click",(e)=>{

        if(span.dataset.display === 'show'){

            bulletsContainer.style.display='block';

            localStorage.setItem("bullets-option",'block');

        }else{

            bulletsContainer.style.display='none';
            localStorage.setItem("bullets-option",'none');
        }
        RemoveActiveClass(e);

    });

});

document.querySelector(".reset-option").onclick=function(){
    // localStorage.clear();
    localStorage.removeItem("color-option");

    localStorage.removeItem("background-option");

    localStorage.removeItem("bullets-option");

    window.location.reload();
};

// toggle menu 
let toogleBtn = document.querySelector(".toggle-menu");
let tlinks =document.querySelector(".links");

toogleBtn.onclick=function(e){
//stop progagation on menu 
    e.stopPropagation();

    //toggle class menu-active on button
    this.classList.toggle("menu-active");
    //toggle class open on links
    tlinks.classList.toggle("open");
}
//click anywhere outside menu and toggle button
document.addEventListener("click",(e)=>{

    if(e.target !== toogleBtn && e.target !==tlinks){
        //check if menu is open 
        if(tlinks.classList.contains("open")){
              //toggle class menu-active on button
                toogleBtn.classList.toggle("menu-active");
                //toggle class open on links
                tlinks.classList.toggle("open");
            }
        }
    });
//stop progagation on menu 

tlinks.onclick =function(e){
    e.stopPropagation();
}





















//Ibraiham//
// function PopUp(hideOrshow) {
//     if (hideOrshow == 'hide') document.getElementById('ac-wrapper').style.display = "none";
//     else document.getElementById('ac-wrapper').removeAttribute('style');

// }
// window.onload = function () {
//     setTimeout(function () {
//         PopUp('show');
//     }, 5000);
// }
// //close popup
// document.addEventListener("click",function(e){
//     if(e.target.className == 'close-pop'){
//         e.target.parentElement.remove();
//         document.querySelector('#ac-wrapper').remove();
//     }
  

// });



