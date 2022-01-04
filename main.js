Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90,
})

webcam = document.getElementById("webcam");
Webcam.attach(webcam);

function capture(){
    Webcam.snap(function(image_location){
        document.getElementById("result").innerHTML="<img id='img_result' src='"+image_location+"'>";

    })
}

console.log("ml5.version"+ml5.version);

 model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/E7kx7DZqA/model.json", modelLoaded);

function modelLoaded(){
    console.log("ModelLoaded !");
}

function check(){
    img = document.getElementById("img_result");
     model.classify(img ,  gotResult);
}

function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2)*100+"%";
}
}