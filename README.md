ULEM-MSIMBO - MSB-FY23C1
Deliverable 11: JS Form Validation

Create a local+GitHub repo
Create a signup form (index.html)
Create an external js file (names val.js) to validate the inputs for email and password and let the user know what they are missing
The password has to be 8+ characters, with numbers, uppercase, lowercase, etc.
You will be using regular expression and if-else statements.
Only after getting the Javascript to works properly, use Tailwind to make it look "pretty"
Use Webstorm vs Visual Studio Code editor.
Submit your GitHub + Vercel + Playcode/Jsitor links
HINT

<input onfocus="show();" onblur="hide();" onkeyup="vali();"  type="password"

<script>

function vali() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(document.getElementById("psw").value.match(lowerCaseLetters)) {  
    document.getElementById("letter").classList.remove("invalid");
    document.getElementById("letter").classList.add("valid");
  } else {
    document................
 
  // Validate capital letters
  
  // Validate numbers
   
  // Validate length
