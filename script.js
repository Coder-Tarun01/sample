function validateForm()
{   
    document.querySelectorAll(".warning").forEach(el => el.remove());// this line of code removes the multiple validation messages when you click multiple times submit
    function Error(element,message){
        element.style.border="2px blue solid";
        var warning = document.createElement("p");
        warning.style.color="red";
        warning.className="warning";
        warning.innerText=message;
        element.insertAdjacentElement('afterEnd',warning);
    }

   var fname = document.getElementById("fullName");
   var a = document.getElementById("fmName");
   var b = document.getElementById("dob");
   var c = document.getElementById("nationality");
   var d = document.getElementById("Profession");
   var e = document.getElementById("permanentAddress");
   var f = document.getElementById("currentAddress");
   var g = document.getElementById("mobile");
   var h = document.getElementById("email");
   var i = document.getElementById("aadhaar");
   var j = document.getElementById("pan");
   var k = document.getElementById("photo");
   var l = document.getElementById("INR");
   var m = document.getElementById("Nominee");
   var n = document.getElementById("nomineeRelation");
   var o = document.querySelector('.radio-group');
   var p = document.getElementsByName('gender');

   if(fname.value==="")
    {
    Error(fullName,"name must be filled out");
   } 
   if(a.value==="")
    {
    Error(fmName,"name must be filled out");
   } 
   if(b.value==="")
    {
    Error(dob,"please enter your date of birth");
   } 
   //validation for gender selection
  var selected = false;
   for(var i=0; i<p.length; i++){
    if(p[i].checked){
        selected = true;
        break;
    }
   }
   if(!selected){
        Error(o, "please select your gender");
    }
   if(c.value==="")
    {
    Error(nationality,"please enter your nationality");
   } 
   if(d.value==="")
    {
    Error(Profession,"please enter your profession");
   } 
   if(e.value==="")
    {
    Error(permanentAddress,"enter your permanent address");
   } 
   if(f.value==="")
    {
    Error(currentAddress,"enter your current address");
   } 
   //validation for mobile number
   const mobileField = document.getElementById("mobile");
   const mobileValue = mobileField.value;

if (mobileValue === "") {
  Error(mobileField, "Please enter your mobile number");
} else if (!/^\d{10}$/.test(mobileValue)) {
  Error(mobileField, "Mobile number must be 10 digits");
}
    //validation for email
  const emailField = document.getElementById("email");
  const emailValue = emailField.value;

if (emailValue === "") {
  Error(emailField, "Please enter your email address");
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
  Error(emailField, "Please enter a valid email address");
}
    //validation for aadhar number
const aadhaarField = document.getElementById("aadhaar");
const aadhaarValue = aadhaarField.value;

if (aadhaarValue === "") {
  Error(aadhaarField, "Please enter your Aadhaar number");
} else if (!/^\d{12}$/.test(aadhaarValue)) {
  Error(aadhaarField, "Aadhaar number must be exactly 12 digits");
}

    //validation for pan card number
    const panField = document.getElementById("pan");
const panValue = panField.value.toUpperCase(); // Convert to uppercase for consistency

if (panValue === "") {
  Error(panField, "Please enter your PAN number");
} else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panValue)) {
  Error(panField, "PAN must be in format: 5 letters, 4 numbers, 1 letter (e.g., ABCDE1234F)");
}
    //validation for uploading an image
 const photoField = document.getElementById("photo");
const photoFile = photoField.files[0]; // Get the selected file

if (!photoFile) {
  Error(photoField, "Please upload your photo");
  isValid = false;
} else {
  // Optional: Check if it's an image
  const validTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!validTypes.includes(photoFile.type)) {
    Error(photoField, "Only JPG and PNG images are allowed");
    isValid = false;
  }
}
    //validation for Inr amount
   if(l.value==="")
    {
    Error(INR,"please enter valid amount");
   } 
   //validation for Nominee
   if(m.value==="")
    {
    Error(Nominee,"enter your name");
   } 
   //validation for NomineeRelation
   if(n.value==="")
    {
    Error(nomineeRelation,"enter your relationship with nominee");
   } 
   

}

