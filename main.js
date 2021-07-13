Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:100,
    constraints:{
        facingMode:"environment"
    }
});
var camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">';
    });
}
console.log("version", ml5.version);
var classifier=ml5.imageClassifier("MobileNet", model_loaded);
function model_loaded() {
    console.log("model_loaded");
}
function check(){
    var img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
    }
}