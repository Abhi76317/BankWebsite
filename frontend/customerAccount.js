// Auto fill Date
let date = new Date();
let todayDate = document.getElementById('todayDate');
todayDate.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);


// function to check input
function checkInput(name, input) {
    if (name.length > 2 && name.length <= 20) {
        // console.log(name);
        input.classList.remove("red");
        input.classList.add("green");
        if (!isNaN(name)) {
            input.classList.remove("green");
            input.classList.add("red");
            return false;
        }
        // return true;
    }
    else {
        input.classList.remove("green");
        input.classList.add("red");
        return false;
    }
}
function formValidation() {
    let formData = new FormData()
    const form = document.querySelectorAll("form");
    const inputelement = form[1].querySelectorAll("input");
    const inputtextarea = form[1].querySelectorAll("textarea");
    let customerName = inputelement[1].value;
    checkInput(customerName, inputelement[1]);
    let customerFatherName = inputelement[2].value;
    checkInput(customerFatherName, inputelement[2]);
    let customerMotherName = inputelement[3].value;
    checkInput(customerMotherName, inputelement[3]);

    let currentDate = todayDate.value;
    formData.append("currentDate", currentDate);
    formData.append("name", customerName);
    formData.append("FatherName", customerFatherName);
    formData.append("MotherName", customerMotherName);
    
    // check gender
    if (inputelement[4].checked) {
        let gender = inputelement[4].value;
        // console.log(gender);
        // return true;
        formData.append("gender",gender);
    }
    else if (inputelement[5].checked) {
        let gender = inputelement[5].value;
        // console.log(gender);
        // return true;
        formData.append("gender",gender);
    }
    else {
        alert("Please select your Gender !")
        return false;
    }
    // formData.append("gender",gender);

    // check Age
    let dob = inputelement[6].value;
    let IndStdDob = new Date(dob);
    let milliSecondDob = Date.now() - IndStdDob.getTime();
    let IndStdAge = new Date(milliSecondDob);
    let age = Math.abs(IndStdAge.getUTCFullYear() - 1970);
    if (age > 17) {
        // console.log(age);
        inputelement[6].classList.remove("red");
        inputelement[6].classList.add("green");
        // return true;
    }
    else {
        inputelement[6].classList.remove("green");
        inputelement[6].classList.add("red");
        return false;
    }
    formData.append("age",age);

    // Email
    let customerEmail = inputelement[7].value;
    // console.log(customerEmail);
    formData.append("email",customerEmail);

    // Mobile Number
    let permanentMobile = inputelement[8].value;
    if (permanentMobile.length == 10) {
        inputelement[8].classList.remove("red");
        inputelement[8].classList.add("green");
        // return true;
    }
    else {
        inputelement[8].classList.remove("green");
        inputelement[8].classList.add("red");
        return false;
    }
    formData.append("mobile",permanentMobile);

    let alternetMobile = inputelement[9].value;
    if (alternetMobile.length == 10) {
        inputelement[9].classList.remove("red");
        inputelement[9].classList.add("green");
        // return true;
    }
    else {
        inputelement[9].classList.remove("green");
        inputelement[9].classList.add("red");
        return false;
    }
    formData.append("alternet mobile",alternetMobile);

    // Address
    let permanentAddress = inputtextarea[0].value;
    if (permanentAddress.length > 2) {
        // console.log(permanentAddress.length);
        // console.log(permanentAddress);
        inputtextarea[0].classList.remove("red");
        inputtextarea[0].classList.add("green");
        // return true;
    }
    else {
        // console.log(permanentAddress.length);
        inputtextarea[0].classList.remove("green");
        inputtextarea[0].classList.add("red");
        return false;
    }
    formData.append("address",permanentAddress);

    let corrospondenceAddress = inputtextarea[1].value;
    if (corrospondenceAddress.length > 2) {
        // console.log(corrospondenceAddress.length);
        // console.log(corrospondenceAddress);
        inputtextarea[1].classList.remove("red");
        inputtextarea[1].classList.add("green");
        // return true;    
    }
    else {
        // console.log(corrospondenceAddress.length);
        inputtextarea[1].classList.remove("green");
        inputtextarea[1].classList.add("red");
        return false;
    }
    formData.append("corrospondence address",corrospondenceAddress);

    // Username
    let customerUsername = inputelement[12].value;
    checkInput(customerUsername, inputelement[12]);

    // // UPI ID
    let customerUPIID = inputelement[13].value;
    checkInput(customerUPIID, inputelement[13]);

    formData.append("username",customerUsername);
    formData.append("upiID",customerUPIID);

    // Password
    let password = inputelement[14].value;
    let confermPassword = inputelement[15].value;
    if (password.length > 5 && password.length <= 15) {
        inputelement[14].classList.remove("red");
        inputelement[14].classList.add("green");
        //  return true;
    }
    else {
        inputelement[14].classList.remove("green");
        inputelement[14].classList.add("red");
        return false;
    }
    if (password === confermPassword) {
        inputelement[15].classList.remove("red");
        inputelement[15].classList.add("green");
        //  return true;
    }
    else {
        inputelement[15].classList.remove("green");
        inputelement[15].classList.add("red");
        return false;
    }
    formData.append("password",password);

    formData.forEach((value, key) => {
        console.log(value, key);
    })
    
    return true;
}

function onSubmit() {
    return formValidation();
}