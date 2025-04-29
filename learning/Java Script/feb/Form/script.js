const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const regNum = document.getElementById("regnum");
const pwd = document.getElementById("psw");
const confirmPwd = document.getElementById("cpwd");
const phNumber = document.getElementById("ph");
const dob = document.getElementById("birthday");
const age = document.getElementById("Age");
const adhar = document.getElementById("Adhar");
const gender = document.getElementsByName("gender")
const skills = document.getElementsByName("skills")
let file = document.getElementById("Certificate");



const nameErr = document.getElementById("firsterr");
const lastNameErr = document.getElementById("lasterr");
const emailErr = document.getElementById("emailerr");
const regErr = document.getElementById("regerr");
const pwdErr = document.getElementById("pwderr");
const confirmPwdErr = document.getElementById("cpswerr");
const phNumberErr = document.getElementById("pherr");
const dobErr = document.getElementById("birtherr");
const ageErr = document.getElementById("ageerr");
const adharErr = document.getElementById("adharerr");
const genderErr = document.getElementById("gendererr");
const skillErr = document.getElementById("skillerr");
const fileErr = document.getElementById("certificateerr");

function validateError(a, b) {
    a.style.border = "2px solid rgb(192, 48, 48)";
    b.classList.add("error");
}

function validateChanges(a, b) {
    a.style.border = "none";
    b.textContent = "";
    b.classList.remove("error");
}
let isValid = true;

//first Name
function handleFirstName() {
    if (firstName.value === "" || /\d/.test(firstName.value)) {
        validateError(firstName, nameErr);
        nameErr.textContent = "Please enter your firstName properly.";
        isValid = false;
    } else {
        validateChanges(firstName, nameErr)
        isValid = true;
    }
    return isValid;
}
firstName.addEventListener("input", handleFirstName);

//Last Name 
function handleLastName() {
    if (lastName.value === "" || /\d/.test(lastName.value)) {
        validateError(lastName, lastNameErr)
        lastNameErr.textContent = "Please enter your lastName properly.";
        isValid = false;
    } else {
        validateChanges(lastName, lastNameErr)
        isValid = true;

    }
    return isValid;
}
lastName.addEventListener("input", handleLastName);

//Email Id
function handleEmail() {
    if (email.value === "" || !email.value.includes("@") || !email.value.includes(".")) {
        validateError(email, emailErr)
        emailErr.textContent = "Please enter a valid email address.";
        isValid = false;
    } else {
        validateChanges(email, emailErr)
        isValid = true;

    }
    return isValid;
}
email.addEventListener("input", handleEmail);

//Register Number
function handleRegNum() {
    const regNumRegex = /^[0-9]{12}$/;
    if (regNum.value === "" || !regNumRegex.test(regNum.value)) {
        validateError(regNum, regErr)
        regErr.textContent = "Please enter a valid Register Number address.";
        isValid = false;
    } else {
        validateChanges(regNum, regErr)
        isValid = true;

    }
    return isValid;
}
regNum.addEventListener("input", handleRegNum);

//Password
function hadndlePsw() {
    if (pwd.value === "" || pwd.value.length < 6) {
        validateError(pwd, pwdErr)
        pwdErr.textContent = "Please enter a Password.";
        isValid = false;
    } else {
        validateChanges(pwd, pwdErr)
        isValid = true;
    }
    return isValid;
}
pwd.addEventListener("input", hadndlePsw);

//Confirm Password
function hadndleConfirmPsw() {
    if (confirmPwd.value != pwd.value || confirmPwd.value === "") {
        validateError(confirmPwd, confirmPwdErr);
        confirmPwdErr.textContent = "Please enter a valid Confirm Password.";
        isValid = false;
    } else {
        validateChanges(confirmPwd, confirmPwdErr);
        isValid = true;

    }
    return isValid;
}
confirmPwd.addEventListener("input", hadndleConfirmPsw);

//Phone Number
function handlePhoneNum() {
    const phoneRegex = /^[1-9]{1}[0-9]{9}$/;
    if (!phoneRegex.test(phNumber.value) || phNumber.value === "") {
        validateError(phNumber, phNumberErr)
        phNumberErr.textContent = "Please enter a valid Phone Number.";
        isValid = false;
    } else {
        validateChanges(phNumber, phNumberErr)
        isValid = true;

    }
    return isValid;
}
phNumber.addEventListener("input", handlePhoneNum);

//Birthday 
function handleDob() {
    if (dob.value === "") {
        validateError(dob, dobErr)
        dobErr.textContent = "Please enter a Date of Birth";
        isValid = false;
    } else {
        validateChanges(dob, dobErr)
        isValid = true;
    }
    return isValid;
}
dob.addEventListener("input", handleDob);

//Age
function handleAge() {
    if (age.value === "" || ((age.value > 0) && (age.value > 100))) {
        validateError(age, ageErr)
        ageErr.textContent = "Please enter valid Age";
        isValid = false;
    } else {
        validateChanges(age, ageErr)
        isValid = true;
    }
    return isValid;
}
age.addEventListener("input", handleAge);

//Adhar number
function handleAdhar() {
    const adharRegex = /^[1-9][0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/;
    if (!adharRegex.test(adhar.value) || adhar.value === "") {
        validateError(adhar, adharErr)
        adharErr.textContent = "Please enter a valid Adhar Number.";
        isValid = false;
    } else {
        validateChanges(adhar, adharErr)
        isValid = true;
    }
    return isValid;
}
adhar.addEventListener("input", handleAdhar);

//Select Gender
function handleGender() {
    if (!(gender[0].checked) && !(gender[1].checked)) {
        genderErr.textContent = "Please Select a Gender.";
        genderErr.classList.add("error");
        isValid = false;
    } else {
        genderErr.classList.remove("error")
        isValid = true;
    }
    return isValid;
}



//Select Skills
function handleSkills() {
    let marked_checkboxes = [];
    skills.forEach((check_box) => {
        if (check_box.checked) {
            marked_checkboxes.push(check_box);
        }
    });
    if (!(marked_checkboxes.length >= 2)) {
        skillErr.textContent = "Minimum 2 Skills Requirefd ";
        skillErr.classList.add("error");
        isValid = false;
    } else {
        skillErr.classList.remove("error");
        isValid = true;
    }
    return isValid;
}


//File
function handleFile() {
    const fileType = /(\.png|\.pdf|\.gif|\.jpg|\.jpeg)$/i
    if (file.value === "") {
        fileErr.textContent = "Upload your File ";
        fileErr.classList.add("error");
        isValid = false;

    } else if (!fileType.test(file.value)) {
        fileErr.textContent = "Invalid file type.";
        fileErr.classList.add("error");
        isValid = false;
    } else {
        fileErr.classList.remove("error");
        isValid = true;
    }
    return isValid;
}
file.addEventListener("input", handleFile);

const validateForm = (e) => {
    console.log(e)
    e.preventDefault();
    isValid = handleFirstName() &&
        handleLastName() &&
        handleEmail() &&
        handleRegNum() &&
        hadndlePsw() &&
        hadndleConfirmPsw() &&
        handlePhoneNum() &&
        handleDob() &&
        handleAge() &&
        handleAdhar() &&
        handleGender() &&
        handleSkills() &&
        handleFile()
    if (isValid) {
        alert("Form Submitted");
    }
}

const submit = document.querySelector("form");
console.log(submit)
submit.addEventListener("submit", validateForm);





const reset = document.getElementById("reset");
const resetPage = () => {
    location.reload();
}

reset.addEventListener('click', resetPage);
 
