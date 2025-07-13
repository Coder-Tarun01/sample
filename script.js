function validateForm()
{   
    document.querySelectorAll(".warning").forEach(el => el.remove());// this line of code removes the multiple validation messages when you click multiple times submit
    function Error(element,message){
        // element.style.border="2px red solid";
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




    //validation for date of birth
const dobField = document.getElementById("dob");
  const dobValue = dobField.value;

  if (dobValue === "") {
    Error(dobField, "Please enter your date of birth & age must be 18 or above/ignore if you enter correctly");
  } else {
    const today = new Date();
    const dob = new Date(dobValue);
    const age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    // Adjust if birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (dob > today) {
      Error(dobField, "Future dates are not allowed");
    } else if (age < 18) {
      Error(dobField, "You must be at least 18 years old to apply");
    } else if (age > 120) {
      Error(dobField, "Please enter a valid date of birth");
    }
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


    //validation for nationality
const nationalityField = document.getElementById("nationality");
const nationalityValue = nationalityField.value.trim();

if (nationalityValue === "") {
  Error(nationalityField, "Please enter your nationality");
} else if (!/^[A-Za-z\s]{2,40}$/.test(nationalityValue)) {
  Error(nationalityField, "Nationality must only contain letters and be 2–40 characters long");
}


    //validation for profession

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
  Error(emailField, "Please enter a valid email address(e.g., john.doe@example.com)");
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
const nomineeNameField = document.getElementById("nomineeName");
const nomineeNameValue = nomineeNameField.value.trim();

if (nomineeNameValue === "") {
  Error(nomineeNameField, "Please enter the nominee's name");
} else if (!/^[A-Za-z\s]{3,50}$/.test(nomineeNameValue)) {
  Error(nomineeNameField, "Name must contain only letters and be 3–50 characters long");
}


   //validation for NomineeRelation
const relationField = document.getElementById("nomineeRelation");
const relationValue = relationField.value;

if (relationValue === "") {
  Error(relationField, "Please select a relationship with the nominee");
}




//check all checkboxes selected or not
const declarationCheckbox = document.getElementById("declaration");
const termsCheckbox = document.getElementById("terms");

// Validate Declaration
if (!declarationCheckbox.checked) {
  Error(declarationCheckbox, "You must confirm the declaration");
}

// Validate Terms Agreement
if (!termsCheckbox.checked) {
  Error(termsCheckbox, "You must agree to the terms and conditions");
}


}








// Real-time error removal when input becomes valid
function removeErrorIfValid(field) {
  const value = field.value.trim();
  const id = field.id;
  let isValid = true;

  switch (id) {
    case "fullName":
    case "fmName":
      isValid = /^[A-Za-z\s]{3,50}$/.test(value);
      break;
    case "dob":
      const today = new Date();
      const dob = new Date(value);
      const age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
      isValid = value !== "" && age >= 18 && age <= 120 && dob <= today;
      break;
    case "email":
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      break;
    case "mobile":
      isValid = /^\d{10}$/.test(value);
      break;
    case "aadhaar":
      isValid = /^\d{12}$/.test(value);
      break;
    case "pan":
      isValid = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value.toUpperCase());
      break;
    case "nationality":
    case "Profession":
    case "permanentAddress":
    case "currentAddress":
    case "INR":
    case "nomineeName":
    case "nomineeRelation":
      isValid = value.length > 0;
      break;
    default:
      isValid = true;
  }

  if (isValid) {
    const next = field.nextElementSibling;
    if (next && next.classList.contains("warning")) {
      next.remove();
      field.style.border = "";
    }
  }
}


  // Gender radio group error removal
  document.querySelectorAll("input[name='gender']").forEach(radio => {
    radio.addEventListener("change", () => {
      const existingError = document.querySelector(".radio-group + .warning");
      if (existingError) existingError.remove();
    });
  });

  // Checkbox error removal
  const declaration = document.getElementById("declaration");
  const terms = document.getElementById("terms");

  [declaration, terms].forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      const next = checkbox.nextElementSibling;
      if (next && next.classList.contains("warning")) next.remove();
    });
  });


    
  // Enable live validation after DOM loads
function enableLiveValidation() {
  const fields = document.querySelectorAll("input, select, textarea");

  fields.forEach(field => {
    field.addEventListener("input", () => {
      removeErrorIfValid(field);
    });
    field.addEventListener("change", () => {
      removeErrorIfValid(field);
    });
  });

}

// Run on page load
window.onload = function () {
  enableLiveValidation();

  // Prevent future DOB selection
  const dob = document.getElementById("dob");
  dob.max = new Date().toISOString().split("T")[0];
};

// //// Function to clear error messages when user interacts with the form

// function clearErrorsOnInput() {
//   const fields = document.querySelectorAll("input, select, textarea, .radio-group");

//   fields.forEach(field => {
//     field.addEventListener("input", () => {
//       removeError(field);
//     });

//     // for select or radio buttons (detect value change)
//     field.addEventListener("change", () => {
//       removeError(field);
//     });
//   });
// }

// function removeError(element) {
//   const next = element.nextElementSibling;
//   if (next && next.classList.contains("warning")) {
//     next.remove();
//     element.style.border = ""; // Optional: reset border
//   }
// }



// // This function is called when the form is submitted
// window.onload = function() {
//   clearErrorsOnInput();
// };
