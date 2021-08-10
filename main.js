var names=[
    "2.My Father (Vishal Jaiswal)",
    "3.My Mother (Shikha Jaiswal)",
    "4.My Brother (Prakhar Jaiswal)",
    "5.Me (Shikhar Jaiswal)"
];
var images=[
    mumma.jpeg,
    papa.jpeg,
    bhai.jpeg,
    me.jpeg
];
var i=0;
 function family(){
   document.getElementById("one").innerHTML=names[i];
   document.getElementById("family_img").src=images[i];
   i++;
   if(i==4){
     i=0;
   }}