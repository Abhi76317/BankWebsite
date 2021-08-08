
let date = new Date();
let todayDate = document.getElementById('todayDate');
todayDate.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) +
    '-' + date.getDate().toString().padStart(2, 0);
let currentDate = todayDate.value;

function onInput(name) {
    let nameFormat = /^[A-Za-z .]{3,30}$/;
    let nam = name.value;
    if (nameFormat.test(nam)) {
        name.classList.remove("red");
        name.classList.add("green");
    }
    else {
        name.classList.remove("green");
        name.classList.add("red");
    }

}
function onInputMob(mob) {
    let num = mob.value;
    if (num.length != 10) {
        mob.classList.remove("green");
        mob.classList.add("red");
    }
    else {
        mob.classList.remove("red");
        mob.classList.add("green");
    }
}
function onInputAdd(address) {
    let addr = address.value;
    // console.log(addr.length);
    if (addr.length < 3) {
        address.classList.remove("green");
        address.classList.add("red");
    }
    else {
        address.classList.remove("red");
        address.classList.add("green");
    }
}
function onInputpass(name) {
    let nam = name.value;
    if (nam.length < 6 || nam.length > 15) {
        name.classList.remove("green");
        name.classList.add("red");
    }
    else {
        name.classList.remove("red");
        name.classList.add("green");
    }
}

function onSubmit() {
    let formData = new FormData()
    const form = document.querySelectorAll("form");
    const inputelement = form[1].querySelectorAll("input");
    const textareaelement = form[1].querySelectorAll("textarea");
    let employeeName = inputelement[1].value;
    let employeeFatherName = inputelement[2].value;
    let employeeMotherName = inputelement[3].value;

    let dob = inputelement[6].value;
    let IndStdDob = new Date(dob);
    let milliSecondDob = Date.now() - IndStdDob.getTime();
    let IndStdAge = new Date(milliSecondDob);
    let age = Math.abs(IndStdAge.getUTCFullYear() - 1970);

    let employeeEmail = inputelement[7].value;
    let mobileNumber = inputelement[8].value;
    let alternetMobileNumber = inputelement[9].value;
    let perAddress = textareaelement[0].value;
    let corAddress = textareaelement[1].value;
    let userName = inputelement[12].value;
    let password = inputelement[13].value;
    let confermPassword = inputelement[14].value;

    let nameFormat = /^[A-Za-z .]{3,30}$/;
    if (!nameFormat.test(employeeName)) {
        return false;
    }
    else if (!nameFormat.test(employeeFatherName)) {
        return false;
    }
    else if (!nameFormat.test(employeeMotherName)) {
        return false;
    }
    else if (age < 18) {
        // inputelement[6].classList.toggle("red");
        return false;
    }
    else if (mobileNumber.length != 10) {
        return false;
    }
    else if (alternetMobileNumber.length != 10) {
        return false;
    }
    else if (perAddress.length < 3) {
        return false;
    }
    else if (corAddress.length < 3) {
        return false;
    }
    else if (userName.length < 6 || userName.length > 15) {
        return false;
    }
    else if (password.length < 6 || password.length > 15) {
        return false;
    }
    else if (confermPassword != password) {
        alert("Passwoed does not match!")
        return false;
    }

    let gender;
    if (inputelement[4].checked) {
        gender = inputelement[4].value;
    }
    else if (inputelement[5].checked) {
        gender = inputelement[5].value;
    }
    else {
        alert("Please select your Gender !!");
        return false;
    }

    formData.append("currentDate", currentDate);
    formData.append("name", employeeName);
    formData.append("FatherName", employeeFatherName);
    formData.append("MotherName", employeeMotherName);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("email", employeeEmail);
    formData.append("mobile", mobileNumber);
    formData.append("alternet mobile", alternetMobileNumber);
    formData.append("address", perAddress);
    formData.append("corrospondense address", corAddress);
    formData.append("username", userName);
    formData.append("password", password);

    formData.forEach((value, key) => {
        console.log(key, value);
    })

    return true;
}