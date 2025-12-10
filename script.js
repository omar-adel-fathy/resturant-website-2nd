var menuItems = [
    {name: "LASAL CHEESE", price: "$18.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food1.png"},
    {name: "JUMBO CRAB SHRIMP", price: "$24.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food2.png"},
    {name: "KOKTAIL JUICE", price: "$12.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food3.png"},
    {name: "CAPO STEAK", price: "$60.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food4.png"},
    {name: "ORGANIC FRUIT SALAD", price: "$8.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food5.png"},
    {name: "CHEESE PIZZA", price: "$18.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food6.png"},
    {name: "KOFTA MEAT", price: "$40.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food7.jpeg"},
    {name: "SPANISH PIES", price: "$14.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food8.jpeg"},
    {name: "CHEESE TOST", price: "$6.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food9.jpeg"},
    {name: "FRUIT SALAD", price: "$14.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food10.jpeg"},
    {name: "CHICKEN SHAWARMA", price: "$20.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food11.jpeg"},
    {name: "MEGA CHEESE PIZZA", price: "$30.00", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.", image: "./New folder/food12.jpeg"}
];
var offers = document.querySelector('.dishes');
var index = 0;
function slide(direction){
var total = offers.children.length;
index = (index + direction + total) % total;
console.log("current index: " + index);
offers.style.transform = 'translateX(-' + index * 100 + '%)';
}
document.querySelector('.prev').onclick = function(){
slide(-1);
}
document.querySelector('.next').onclick = function(){
slide(1);
}
setInterval(function(){
slide(1);
}, 5000);
var galleryImages = document.querySelectorAll('.fgg img');
var currentImage = 0;
let lightbox = document.createElement('div');
lightbox.style.display = 'none';
lightbox.style.position = "fixed";
lightbox.style.top = '0';
lightbox.style.left = "0"
lightbox.style.width = "100%";
lightbox.style.height = '100%'
lightbox.style.background = 'rgba(0,0,0,0.9)';
lightbox.style.zIndex = '1000'
document.body.appendChild(lightbox);
var lightboxImg = document.createElement("img");
lightboxImg.style.maxWidth = '95%'
lightboxImg.style.maxHeight = "95%";
lightboxImg.style.position = 'absolute'
lightboxImg.style.top = "50%";
lightboxImg.style.left = '50%';
lightboxImg.style.transform = "translate(-50%, -50%)";
lightbox.appendChild(lightboxImg);
const closeBtn = document.createElement('button');
closeBtn.innerHTML = "X";
closeBtn.style.position = 'absolute'
closeBtn.style.top = '20px'
closeBtn.style.right = "30px";
closeBtn.style.background = 'none';
closeBtn.style.border = "none"
closeBtn.style.color = 'white';
closeBtn.style.fontSize = '40px'
closeBtn.style.cursor = "pointer"
lightbox.appendChild(closeBtn);
var prevBtn = document.createElement('button')
prevBtn.innerHTML = '&#10094;';
prevBtn.style.position = "absolute";
prevBtn.style.left = "20px"
prevBtn.style.top = '50%';
prevBtn.style.background = "rgba(0,0,0,0.5)"
prevBtn.style.border = 'none';
prevBtn.style.color = "white";
prevBtn.style.fontSize = '30px';
prevBtn.style.padding = "10px"
prevBtn.style.cursor = 'pointer';
lightbox.appendChild(prevBtn)
let nextBtn = document.createElement('button');
nextBtn.innerHTML = "&#10095;"
nextBtn.style.position = 'absolute';
nextBtn.style.right = '20px';
nextBtn.style.top = "50%"
nextBtn.style.background = 'rgba(0,0,0,0.5)';
nextBtn.style.border = "none";
nextBtn.style.color = 'white'
nextBtn.style.fontSize = "30px";
nextBtn.style.padding = '10px'
nextBtn.style.cursor = "pointer";
lightbox.appendChild(nextBtn);
for(var i = 0; i < galleryImages.length; i++){
galleryImages[i].onclick = function(){
console.log('image clicked!');
lightbox.style.display = 'block';
var clickedImg = this;
for(var j = 0; j < galleryImages.length; j++){
if(galleryImages[j] === clickedImg){
currentImage = j;
console.log("showing image number: " + j)
}
}
lightboxImg.src = clickedImg.src;
}
}
closeBtn.onclick = function(){
lightbox.style.display = 'none';
console.log('lightbox closed')
}
nextBtn.onclick = function(){
currentImage = currentImage + 1;
if(currentImage >= galleryImages.length){
currentImage = 0;
}
console.log('next image: ' + currentImage);
lightboxImg.src = galleryImages[currentImage].src;
}
prevBtn.onclick = function(){
currentImage = currentImage - 1
if(currentImage < 0){
currentImage = galleryImages.length - 1
}
console.log("prev image: " + currentImage)
lightboxImg.src = galleryImages[currentImage].src
}
lightbox.onclick = function(event){
if(event.target === lightbox){
lightbox.style.display = 'none'
}
}
const contactForm = document.querySelector('.contact-form');
var errorDiv = document.createElement("div")
errorDiv.style.color = 'red';
errorDiv.style.marginBottom = "10px"
errorDiv.style.fontSize = '14px'
errorDiv.style.fontWeight = "bold";
contactForm.insertBefore(errorDiv, contactForm.firstChild)
contactForm.onsubmit = function(event){
event.preventDefault();
errorDiv.innerHTML = '';
let name = document.querySelector('input[name="name"]').value.trim();
var email = document.querySelector('input[name="email"]').value.trim()
let subject = document.querySelector('input[name="subject"]').value.trim();
const message = document.querySelector('textarea[name="message"]').value.trim();
console.log('Form values:', name, email, subject, message);
var name_length = name.length;
if(name_length < 3){
errorDiv.innerHTML = 'name is 3-15 letters';
return;
}
if(name_length > 15){
errorDiv.innerHTML = 'name is 3-15 letters'
return
}
var has_at = false;
for(var i = 0; i < email.length; i++){
if(email[i] === '@'){
has_at = true;
}
}
if(has_at === false){
errorDiv.innerHTML = 'enter a working email';
return;
}
if(subject !== ''){
if(subject.length < 3){
errorDiv.innerHTML = 'su'
return
}
}
errorDiv.innerHTML = "<span style='color: green'>submitted successfully</span>";
console.log('form valid!')
setTimeout(function(){
contactForm.reset();
errorDiv.innerHTML = ''
}, 2000)
}