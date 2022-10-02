function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    //document.write('RESULT', reader.result)


    proImage = new Image();
    proImage.src = reader.result;
    document.body.appendChild(proImage);

    proImage.style.position = "absolute";
    proImage.style.top = "1.5rem";
    proImage.style.left = "5px";
    proImage.style.height = "22rem";
    proImage.style.width = "23rem";
    proImage.style.display = "block";
  }
  reader.readAsDataURL(file);

}



function editImg() {

  let blurVal = document.getElementById("blurValue").value
  let grayVal = document.getElementById("grayValue").value
  let invertVal = document.getElementById("invertValue").value
  let sepiaVal = document.getElementById("sepiaValue").value
  let contVal = document.getElementById("contValue").value
  let opacityVal = document.getElementById("opacityValue").value
  let brightVal = document.getElementById("brightValue").value
  let saturateVal = document.getElementById("saturateValue").value
  let hueVal = document.getElementById("hueValue").value

  document.getElementById("bVal").innerHTML = blurVal;
  document.getElementById("gVal").innerHTML = grayVal;
  document.getElementById("iVal").innerHTML = invertVal;
  document.getElementById("sVal").innerHTML = sepiaVal;
  document.getElementById("cVal").innerHTML = contVal;
  document.getElementById("oVal").innerHTML = opacityVal;
  document.getElementById("brVal").innerHTML = brightVal
  document.getElementById("satVal").innerHTML = saturateVal;
  document.getElementById("hueVal").innerHTML = hueVal;

  proImage.style.filter = "sepia(" + sepiaVal + "%) invert(" + invertVal + "%) grayscale(" + grayVal + "%) blur(" + blurVal + "px) contrast(" + contVal + "%) opacity(" + opacityVal + "%) brightness(" + brightVal + "%) saturate(" + saturateVal + "%) hue-rotate(" + hueVal + "deg)";


}
