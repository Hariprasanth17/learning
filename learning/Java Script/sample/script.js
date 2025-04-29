function valid(){
    document.getElementById('myImage').src='image123.png'
    document.getElementById("out1").innerHTML="Light on"
    document.getElementById('double').style.display='none'
    document.getElementById('out').style.display='block'
}
function dblclick(){
    document.getElementById('myImage').src='download.jpg'
    document.getElementById("out1").innerHTML="Light off"
    document.getElementById('out').style.display='none'
    document.getElementById('double').style.display='block'
}