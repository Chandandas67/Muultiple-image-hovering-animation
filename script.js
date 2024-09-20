var elem = document.querySelectorAll(".elem")
elem.forEach(function(val){
    console.log(val.childNodes[3])

val.addEventListener("mouseenter",function(){
    val.childNodes[3].Style.opacity = 1
 });
val.addEventListener("mouseleave",function(){
    val.childNodes[3].Style.opacity = 0
  });
  val.addEventListener("mouseleave",function(dets){
    val.childNodes[3].Style.left = dets.x+"px"
  });
});