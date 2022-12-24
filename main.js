var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("plane").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    if(event =="take my selfie")
    {
        console.log("taking selfie ---");
        speak();
    }
    var content=event.results[0][0].transcript;
    document.getElementById("plane").innerHTML=content;
    speak();
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data="taking selfi in 5 second";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach('#camera');
    setTimeout(function()
    {
      take_snapshot();
      save();

    },5000
    
    );

}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
       document.getElementById("picture").innerHTML = '<img id="selfine_image" src="'+data_uri+'">'; 
    });
}
function save()
{
    var link=document.getElementById("minecraft");
    var img=document.getElementById("selfine_image").src;
    link.href=img;
    link.click();
}
