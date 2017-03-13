
<html>
<body>

<h1> What Can JS Do?</h1>

<p> JS can change HTML attributes!</p>

<p>In this case JS changes the src attribute of an image.<p>

<button
onlclick="document.getElementById('myImage').src='
pic_bulbon.gif'">Turn on the light</button>

<img id="myImage src="pic_bulboff.gif"
style="width:100px">

<button
onlclick="document.getElementById('myImage').src='
pic_bulboff.gif'">Turn off the light</button>


</body>
</html>
