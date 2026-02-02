<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Valentine Quiz</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
  font-family: Arial, sans-serif;
  background: pink;
  padding: 20px;
}
.container {
  max-width: 500px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin: auto;
}
h2 { color: #e60073; }
button {
  padding: 10px;
  width: 100%;
  background: #e60073;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
}
input[type="file"] {
  width: 100%;
}
.question {
  margin-bottom: 15px;
}
</style>
</head>
<body>

<div class="container">
<h2>❤️ Valentine Quiz ❤️</h2>

<div id="quiz1">
<p class="question">1. What will you give your girlfriend?</p>
<input type="radio" name="q1"> Chocolate<br>
<input type="radio" name="q1"> Flower<br>
<input type="radio" name="q1"> Ring<br>
<input type="radio" name="q1"> Surprise gift<br>

<button onclick="nextStep()">Next</button>
</div>

<div id="upload" style="display:none;">
<h3>Upload Your Couple Photo</h3>
<input type="file" id="photo"><br><br>
<button onclick="showFinal()">Continue</button>
</div>

<div id="final" style="display:none;">
<h3>Answer More Questions</h3>
<p>How much do you love her?</p>
<select>
<option>❤️</option>
<option>❤️❤️</option>
<option>❤️❤️❤️</option>
<option>Infinite ❤️</option>
</select>
<button onclick="submitQuiz()">Submit</button>
</div>

<p id="result"></p>
</div>

<script>
function nextStep(){
  document.getElementById("quiz1").style.display="none";
  document.getElementById("upload").style.display="block";
}

function showFinal(){
  document.getElementById("upload").style.display="none";
  document.getElementById("final").style.display="block";
}

function submitQuiz(){
  document.getElementById("result").innerHTML =
  "Thank you ❤️ Your answers have been sent!";
}
</script>

</body>
</html>
