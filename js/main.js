var dates=new Date();
document.write("today date is"+dates.getDate())
document.write("<br>");
let time=dates.setTime(16);
if(time>0&&time<12){
  document.write("morning")
}
else if (time>=12&&time<16) {
  document.write("afternoon")
} 
else if(time>=16&&time<19){
  document.write("evening")
}
else(
  document.write("night")
)