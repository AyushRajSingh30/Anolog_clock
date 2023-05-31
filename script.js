setInterval(function(){
let date=new Date;
let h=date.getHours();
let m=date.getMinutes();
let s=date.getSeconds();

// console.log(date, h, m, s);
hrotated=30*h+m/2;
mrotated=6*m;
srotated=6*s;

hour.style.transform=`rotate(${hrotated}deg)`;
min.style.transform=`rotate(${mrotated}deg)`;
second.style.transform=`rotate(${srotated}deg)`;




},1000)