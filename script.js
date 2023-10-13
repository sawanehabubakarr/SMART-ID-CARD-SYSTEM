function toggleDepartmentField() {
            var programField = document.getElementById('program');
            var departmentField = document.getElementById('departmentField');
            var departmentField2 = document.getElementById('departmentField2');
            var departmentField3 = document.getElementById('departmentField3');
            var departmentField4 = document.getElementById('departmentField4');
            

            if (programField.value === 'Masters') {
                departmentField.style.display = 'block';
            } else {
                departmentField.style.display = 'none';
            }

            if (programField.value === 'Degree') {
                departmentField2.style.display = 'block';
            } else {
                departmentField2.style.display = 'none';
            }

            if (programField.value === 'Diploma') {
                departmentField3.style.display = 'block';
            } else {
                departmentField3.style.display = 'none';
            }

            if (programField.value === 'Certificate') {
                departmentField4.style.display = 'block';
            } else {
                departmentField4.style.display = 'none';
            }
        }


// Add an event listener to the form for the submit event
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form fields
    const fullName = document.getElementById("fullName").value;
    const faculty = document.getElementById("faculty").value;
    const program = document.getElementById("program").value;
    let department;

    // Determine the department based on the selected program
    if (program === "Masters") {
        department = document.getElementById("department").value;
    } else if (program === "Degree") {
        department = document.getElementById("department2").value;
    } else if (program === "Diploma") {
        department = document.getElementById("department3").value;
    } else if (program === "Certificate") {
        department = document.getElementById("department4").value;
    }

    const idNumber = document.getElementById("idNumber").value;
    const campus = document.querySelector('input[name="campus"]:checked').value; // Get the selected campus

    // Update the ID card elements with the collected values
    document.getElementById("cname").innerHTML = fullName;
    document.getElementById("cfaculty").innerHTML = faculty;
    document.getElementById("ccourse").innerHTML = department;
    document.getElementById("cid-num").innerHTML = idNumber;

    // Update the campus
    document.getElementById("ccampus").innerHTML = campus;

    // Change the image on the ID card
    const photoInput = document.getElementById("photo");
    if (photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const imageUrl = URL.createObjectURL(file);
        document.querySelector(".student-photo").style.backgroundImage = `url(${imageUrl})`;
    }
});

// Add an event listener to the screenshot button
document.getElementById("screenshotButton").addEventListener("click", function () {
    // Get the target element to capture (your ID card div)
    const targetElement = document.querySelector(".id-card");

    // Use HTML2Canvas to capture a screenshot of the target element
    html2canvas(targetElement).then(function (canvas) {
        // Convert the canvas to a data URL
        const screenshotDataUrl = canvas.toDataURL("image/png");

        // Create a new window to display the screenshot
        const screenshotWindow = window.open();
        screenshotWindow.document.write('<img src="' + screenshotDataUrl + '" />');
    });
});
