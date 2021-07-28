
var input = document.querySelector('.colorvalue');
var rval = document.querySelector(".r");
var gval = document.querySelector(".g");
var bval = document.querySelector(".b");

input.addEventListener('keyup',()=>{
  rval.innerHTML = "";
  var v = input.value;
  //#FF00FF
  //The hexadecimal number is divided into 3 parts, so we have divided 3 into regular expressions.
  // #FFAABB = FF->1st part, AA->2nd part, BB->3rd part
  var rex = /#([0-9A-F]{1,2})([0-9A-F]{1,2})([0-9A-F]{1,2})/i;
  // We can write hexadecimal numbers in two ways, with 3 or 6 numbers. So here we have figured out the length
  if(v.length === 4 || v.length === 7){
    var output  = rex.exec(v);
    if(output === null){
      rval.innerHTML = "Not a valid Color";
    }else {
      rval.innerHTML = `R: ${getColor(output[1])}`;
      gval.innerHTML = `G: ${getColor(output[2])}`;
      bval.innerHTML = `B: ${getColor(output[3])}`;
      document.body.style.backgroundColor = v;
    }
  }else{
    rval.innerHTML = "Not a valid Color"
  }
});

//This function is written to convert hexadecimal color code to decimal
function getColor(hex){
  if(hex.length === 1){
    hex = hex+hex;
  }
  return parseInt(hex,16);
}