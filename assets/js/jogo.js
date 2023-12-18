      
    const btn = document.querySelector('.takeImageBtn')
    const shirtImg = document.getElementById("top3");
    const shirt = document.getElementById("top6");
    const teste = document.getElementById("top4");
    const panstImg = document.getElementById("bottom7");
    const saia = document.getElementById("bottom3");
    const panst = document.getElementById("bottom1");
    const targets = document.querySelectorAll("input[name='colors']");
    let colorTarget = "shirt";
targets.forEach((target) => {
 target.addEventListener('change', () => {
     colorTarget = target.value;
 })
});

//SLIDER
var sliderPicker = new iro.ColorPicker('#sliderPicker', {
 width: 250,
 color: "{h: 35, s: 55, l: 91}",
 borderWidth: 1,
 borderColor: "#ccc",
 layout: [
     {
         component: iro.ui.Slider,
         options: {
             sliderType: "hue"
         }
     },
     {
         component: iro.ui.Slider,
         options: {
             sliderType: "saturation"
         }
     },
     {
         component: iro.ui.Slider,
         options: {
             sliderType: "value"
         }
     }
 ]
});
sliderPicker.on('color:change', (color) => {
 const hexString = color.hsl;
 let rotateH = 0;
 let rotateS = 50;
 let rotateL = 100;
 let cssString;
 switch (colorTarget) {
     case "shirt":
         rotateH = color.hsl.h - 35;
         rotateS = 100 + (color.hsl.s - 55);
         rotateL = 100 + (color.hsl.l - 91);
         cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%) 
             brightness(${rotateL}%)`;
         shirtImg.style.setProperty('filter', cssString);
         shirt.style.setProperty('filter', cssString);
         teste.style.setProperty('filter', cssString);
         break;
         case "pants":
         rotateH = color.hsl.h - 218; 9
         rotateS = 100 + (color.hsl.s - 37);
         rotateL = 100 + (color.hsl.l - 64);
         cssString = `hue-rotate(${rotateH}deg) saturate(${rotateS}%)
             brightness(${rotateL}%)`;
         panstImg.style.setProperty('filter', cssString);
         panst.style.setProperty('filter', cssString);
         saia.style.setProperty('filter', cssString);
         break;
 }
})

 $(document).ready(function(){

function ImageSwitcher(choices, i) {
 i = 0;
 
 this.Next = function() {
     hide_current_image();
     show_next_image();
 }
 
 var hide_current_image = function() {
     if(choices){
         choices[i].style.visibility = "hidden";
         i += 1;
     }
 }
 var show_next_image = function() {
     if(choices){
         if(i == (choices.length)) {
             i = 0;
         }
         choices[i].style.visibility = "visible";
     }
 }
}

 var pants = $(".pant");
 var shirts = $(".shirt");
 var backgrounds = $(".bg");

 var shirt_picker = new ImageSwitcher(shirts);
 document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
 
 var pants_picker = new ImageSwitcher(pants);
 document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
 
 var bg_picker = new ImageSwitcher(backgrounds);
 document.getElementById("bg_button").onclick = function() {bg_picker.Next(); };

});

$("#shirt_button").click(function(){
$("#shirt-menu").css("visibility", "visible"); });

//   button print
 btn.addEventListener('click', () => {
     window.print()
 });