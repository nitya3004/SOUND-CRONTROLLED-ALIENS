function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QEYfe8wzP/model.json',modelready);
}
function modelready(){
    classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
console.log(results);
r=Math.floor(Math.random()*255)+1;
g=Math.floor(Math.random()*255)+1;
b=Math.floor(Math.random()*255)+1;

document.getElementById("result-label").innerHTML="I Can Hear "+results[0].label;
document.getElementById("result-confidence").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
document.getElementById("result-label").style.color="rgb("+r+","+g+","+b+")";
document.getElementById("result-confidence").style.color="rgb("+r+","+g+","+b+")";

img_1=document.getElementById("alien_cute");
img_2=document.getElementById("alien_jimmy");
img_3=document.getElementById("alien_kookie");
img_4=document.getElementById("alien_suga");

if(results[0].label=="CLAP"){
    img_1.src="aliens-01.gif";
    img_2.src="aliens-02.png";
    img_3.src="aliens-03.png";
    img_4.src="aliens-04.png";
}else if(results[0].label=="BELL"){
    img_1.src="aliens-01.png";
    img_2.src="aliens-02.gif";
    img_3.src="aliens-03.png";
    img_4.src="aliens-04.png";
}else if(results[0].label=="SNAP"){
    img_1.src="aliens-01.png";
    img_2.src="aliens-02.png";
    img_3.src="aliens-03.gif";
    img_4.src="aliens-04.png";
}else{
    img_1.src="aliens-01.png";
    img_2.src="aliens-02.png";
    img_3.src="aliens-03.png";
    img_4.src="aliens-04.gif";
}
    }
}