
const registerForm =
    document.getElementById("registerForm");


if (registerForm) {
const jobOpportunity =
    document.getElementById("jobOpportunity");

const attendanceGroup =
    document.getElementById("attendanceGroup");


if (jobOpportunity && attendanceGroup) {

    jobOpportunity.addEventListener(
        "change",
        function () {

            if (jobOpportunity.checked) {

                attendanceGroup.style.display = "block";

            } else {

                attendanceGroup.style.display = "none";

                const attendanceOptions =
                    document.querySelectorAll(
                        'input[name="willAttend"]'
                    );

                attendanceOptions.forEach(
                    function (option) {
                        option.checked = false;
                    }
                );

            }

        }
    );

}
    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("registerEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const mobile =
                document
                    .getElementById("mobile")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("registerPassword")
                    .value;


            const confirmPassword =
                document
                    .getElementById("confirmPassword")
                    .value;
const innovation =
    document.getElementById("innovation").checked;

const jobOpportunity =
    document.getElementById("jobOpportunity").checked;

const attendance =
    document.querySelector(
        'input[name="willAttend"]:checked'
    );

const willAttend =
    attendance
        ? attendance.value === "yes"
        : false;

            const message =
                document.getElementById(
                    "registerMessage"
                );

            if (!/^[0-9]{10}$/.test(mobile)) {

                message.textContent =
                    "Mobile number must be exactly 10 digits.";

                message.style.color = "red";

                return;
            }

            const passwordCriteria =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


            if (!passwordCriteria.test(password)) {

                message.textContent =
                    "Password must be at least 8 characters and contain uppercase, lowercase, number and special character.";

                message.style.color = "red";

                return;
            }

            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                message.style.color = "red";

                return;
            }

            let users =
                JSON.parse(
                    localStorage.getItem(
                        "inovexaUsers"
                    )
                ) || [];

            const existingUser =
                users.find(
                    function (user) {

                        return user.email === email;

                    }
                );


            if (existingUser) {

                message.textContent =
                    "This email is already registered.";

                message.style.color = "red";

                return;
            }

   const innovation =
    document.getElementById("innovation").checked;


const jobApplicant =
    document.getElementById("jobOpportunity").checked;


const attendanceOption =
    document.querySelector(
        'input[name="willAttend"]:checked'
    );


let willAttend = false;


if (attendanceOption) {

    willAttend =
        attendanceOption.value === "yes";

}

if (jobApplicant && !attendanceOption) {

    message.textContent =
        "Please select whether you will attend the Job Drive.";

    message.style.color = "red";

    return;

}
const newUser = {

    name: name,

    email: email,

    mobile: mobile,

    password: password,

    innovationRegistered: innovation,

    jobApplicant: jobApplicant,

    willAttend: willAttend,

    selected: false

};


            users.push(newUser);


            /* SAVE USER */

            localStorage.setItem(
                "inovexaUsers",
                JSON.stringify(users)
            );


            message.textContent =
                "Registration successful! You can now login.";

            message.style.color = "green";


            registerForm.reset();

        }
    );

}

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("password")
                    .value;


            const message =
                document.getElementById(
                    "loginMessage"
                );


            const users =
                JSON.parse(
                    localStorage.getItem(
                        "inovexaUsers"
                    )
                ) || [];


            const user =
                users.find(
                    function (user) {

                        return user.email === email;

                    }
                );


            if (!user) {

                message.textContent =
                    "Email ID is not registered.";

                message.style.color = "red";

                return;
            }

            if (user.password !== password) {

                message.textContent =
                    "Password is incorrect.";

                message.style.color = "red";

                return;
            }

            message.textContent =
                "Login successful!";

            message.style.color = "green";


            localStorage.setItem(
                "loggedInUser",
                user.email
            );

            setTimeout(
                function () {

                    window.location.href =
                        "hr-dashboard.html";

                },
                1000
            );

        }
    );

}

const defaultCandidates = [

    {
        id: "STU001",

        name: "Aarav Sharma",

        email: "aarav@gmail.com",

        innovationRegistered: true,

        jobApplicant: true,

        willAttend: true,

        selected: true

    },


    {
        id: "STU002",

        name: "Priya Patil",

        email: "priya@gmail.com",

        innovationRegistered: true,

        jobApplicant: true,

        willAttend: true,

        selected: false

    },


    {
        id: "STU003",

        name: "Rahul Joshi",

        email: "rahul@gmail.com",

        innovationRegistered: true,

        jobApplicant: false,

        willAttend: false,

        selected: false

    },


    {
        id: "STU004",

        name: "Sneha Singh",

        email: "sneha@gmail.com",

        innovationRegistered: false,

        jobApplicant: true,

        willAttend: true,

        selected: false

    },


    {
        id: "STU005",

        name: "Aditya Kulkarni",

        email: "aditya@gmail.com",

        innovationRegistered: true,

        jobApplicant: true,

        willAttend: false,

        selected: false

    },


    {
        id: "STU006",

        name: "Neha Deshmukh",

        email: "neha@gmail.com",

        innovationRegistered: true,

        jobApplicant: true,

        willAttend: true,

        selected: true

    },


    {
        id: "STU007",

        name: "Rohan More",

        email: "rohan@gmail.com",

        innovationRegistered: false,

        jobApplicant: true,

        willAttend: true,

        selected: false

    },


    {
        id: "STU008",

        name: "Kavya Shah",

        email: "kavya@gmail.com",

        innovationRegistered: true,

        jobApplicant: false,

        willAttend: false,

        selected: false

    }

];


function initializeCandidates() {

    const savedCandidates =
        localStorage.getItem(
            "inovexaCandidates"
        );


    if (!savedCandidates) {

        localStorage.setItem(
            "inovexaCandidates",
            JSON.stringify(
                defaultCandidates
            )
        );

    }

}

function getCandidates() {

    return JSON.parse(
        localStorage.getItem(
            "inovexaCandidates"
        )
    ) || [];

}

function updateRecruitmentCounts() {

    const candidates =
        getCandidates();

    const innovationCount =
        candidates.filter(
            function (candidate) {

                return candidate.innovationRegistered === true;

            }
        ).length;
    const jobApplicantCount =
        candidates.filter(
            function (candidate) {

                return candidate.jobApplicant === true;

            }
        ).length;

    const attendanceCount =
        candidates.filter(
            function (candidate) {

                return (
                    candidate.jobApplicant === true &&
                    candidate.willAttend === true
                );

            }
        ).length;

    const selectedCount =
        candidates.filter(
            function (candidate) {

                return (
                    candidate.jobApplicant === true &&
                    candidate.selected === true
                );

            }
        ).length;

    const innovationElement =
        document.getElementById(
            "innovationCount"
        );


    const jobElement =
        document.getElementById(
            "jobApplicantCount"
        );


    const attendanceElement =
        document.getElementById(
            "attendanceCount"
        );


    const selectedElement =
        document.getElementById(
            "selectedCount"
        );



    if (innovationElement) {

        innovationElement.textContent =
            innovationCount;

    }


    if (jobElement) {

        jobElement.textContent =
            jobApplicantCount;

    }


    if (attendanceElement) {

        attendanceElement.textContent =
            attendanceCount;

    }


    if (selectedElement) {

        selectedElement.textContent =
            selectedCount;

    }

}
function displayCandidates() {

    const tableBody =
        document.getElementById(
            "candidateTableBody"
        );


    if (!tableBody) {

        return;

    }


    const candidates =
        getCandidates();


    tableBody.innerHTML = "";



    candidates.forEach(
        function (candidate) {

            const row =
                document.createElement("tr");

            const innovationStatus =
                candidate.innovationRegistered
                    ? '<span class="candidate-status status-yes">Registered</span>'
                    : '<span class="candidate-status status-no">No</span>';


            const jobStatus =
                candidate.jobApplicant
                    ? '<span class="candidate-status status-yes">Yes</span>'
                    : '<span class="candidate-status status-no">No</span>';


            const attendanceStatus =
                candidate.willAttend
                    ? '<span class="candidate-status status-yes">Yes</span>'
                    : '<span class="candidate-status status-no">No</span>';



            /* SELECTION STATUS */

            let selectionStatus;


            if (candidate.selected) {

                selectionStatus =
                    '<span class="candidate-status status-selected">Selected</span>';

            } else if (candidate.jobApplicant) {

                selectionStatus =
                    '<span class="candidate-status status-pending">Pending</span>';

            } else {

                selectionStatus =
                    '<span class="candidate-status status-no">N/A</span>';

            }



            row.innerHTML = `

                <td>
                    ${candidate.id}
                </td>

                <td>
                    ${candidate.name}
                </td>

                <td>
                    ${candidate.email}
                </td>

                <td>
                    ${innovationStatus}
                </td>

                <td>
                    ${jobStatus}
                </td>

                <td>
                    ${attendanceStatus}
                </td>

                <td>
                    ${selectionStatus}
                </td>

            `;


            tableBody.appendChild(row);

        }
    );

}

const logoutLink =
    document.getElementById(
        "logoutLink"
    );


if (logoutLink) {

    logoutLink.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "loggedInUser"
            );

        }
    );

}

initializeCandidates();

updateRecruitmentCounts();

displayCandidates();
const jobOpportunityCheckbox =
    document.getElementById("jobOpportunity");

const attendanceGroup =
    document.getElementById("attendanceGroup");


if (
    jobOpportunityCheckbox &&
    attendanceGroup
) {

    jobOpportunityCheckbox.addEventListener(
        "change",
        function () {

            if (this.checked) {

                attendanceGroup.style.display =
                    "block";

            } else {

                attendanceGroup.style.display =
                    "none";

                const selectedAttendance =
                    document.querySelector(
                        'input[name="willAttend"]:checked'
                    );

                if (selectedAttendance) {

                    selectedAttendance.checked =
                        false;

                }

            }

        }
    );

}