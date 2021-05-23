function preload() {
}

function setup() {
    Canvas = createCanvas(250, 250);
    Canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eJhuSgk0S/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 250, 250);
    classifier.classify(video, gotResult)
}

function modelLoaded() {
    console.log("Model is loaded");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}