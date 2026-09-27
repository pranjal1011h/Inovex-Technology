/* =========================================================
   INOVEXA TECHNOLOGY
   HR DASHBOARD JAVASCRIPT
   ========================================================= */


/* =========================================================
   EMPLOYEE STORAGE
   ========================================================= */

function getEmployees() {

    return JSON.parse(
        localStorage.getItem("inovexaEmployees")
    ) || [];

}


function saveEmployees(employees) {

    localStorage.setItem(
        "inovexaEmployees",
        JSON.stringify(employees)
    );

}


/* =========================================================
   ADD EMPLOYEE FORM
   ========================================================= */

const employeeForm =
    document.getElementById("employeeForm");


if (employeeForm) {

    employeeForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("employeeName")
                    .value
                    .trim();


            const department =
                document
                    .getElementById("department")
                    .value;


            const role =
                document
                    .getElementById("employeeRole")
                    .value
                    .trim();


            const status =
                document
                    .getElementById("employeeStatus")
                    .value;


            const message =
                document.getElementById(
                    "employeeMessage"
                );


            /* Generate Employee ID */

            const employees =
                getEmployees();


            const employeeNumber =
                employees.length + 1;


            const employeeId =
                "EMP" +
                String(employeeNumber).padStart(
                    3,
                    "0"
                );


            /* Create employee */

            const newEmployee = {

                id: employeeId,

                name: name,

                department: department,

                role: role,

                status: status

            };


            /* Add employee */

            employees.push(newEmployee);


            /* Save */

            saveEmployees(employees);


            /* Success message */

            message.textContent =
                "Employee added successfully!";

            message.style.color =
                "green";


            /* Clear form */

            employeeForm.reset();


            /* Go back to dashboard */

            setTimeout(
                function () {

                    window.location.href =
                        "hr-dashboard.html";

                },
                800
            );

        }
    );

}


/* =========================================================
   DISPLAY EMPLOYEES
   ========================================================= */

function displayEmployees() {

    const tableBody =
        document.getElementById(
            "employeeTableBody"
        );


    if (!tableBody) {

        return;

    }


    const employees =
        getEmployees();


    tableBody.innerHTML = "";


    /* No employees */

    if (employees.length === 0) {

        tableBody.innerHTML = `

            <tr>

                <td
                    colspan="6"
                    style="text-align:center;"
                >

                    No employees added yet.

                </td>

            </tr>

        `;

        return;

    }


    /* Display employees */

    employees.forEach(
        function (employee, index) {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${employee.id}
                </td>


                <td>
                    ${employee.name}
                </td>


                <td>
                    ${employee.department}
                </td>


                <td>
                    ${employee.role}
                </td>


                <td>

                    <span class="status ${
                        employee.status === "Active"
                            ? "active"
                            : "leave"
                    }">

                        ${employee.status}

                    </span>

                </td>


                <td>

                    <button
                        type="button"
                        class="delete-employee"
                        data-index="${index}"
                    >
                        Delete
                    </button>

                </td>

            `;


            tableBody.appendChild(row);

        }
    );


    /* Delete buttons */

    const deleteButtons =
        document.querySelectorAll(
            ".delete-employee"
        );


    deleteButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    const employees =
                        getEmployees();


                    const employee =
                        employees[index];


                    const confirmDelete =
                        confirm(
                            "Delete " +
                            employee.name +
                            "?"
                        );


                    if (!confirmDelete) {

                        return;

                    }


                    employees.splice(
                        index,
                        1
                    );


                    saveEmployees(
                        employees
                    );


                    displayEmployees();

                    updateEmployeeStats();

                }
            );

        }
    );

}


/* =========================================================
   EMPLOYEE STATISTICS
   ========================================================= */

function updateEmployeeStats() {

    const employees =
        getEmployees();


    const totalEmployees =
        document.getElementById(
            "totalEmployees"
        );


    const totalLeave =
        document.getElementById(
            "totalLeave"
        );


    const newHires =
        document.getElementById(
            "newHires"
        );


    if (totalEmployees) {

        totalEmployees.textContent =
            employees.length;

    }


    if (totalLeave) {

        const leaveCount =
            employees.filter(
                function (employee) {

                    return employee.status ===
                        "On Leave";

                }
            ).length;


        totalLeave.textContent =
            leaveCount;

    }


    if (newHires) {

        newHires.textContent =
            employees.length;

    }

}


/* =========================================================
   STUDENT DATA
   ========================================================= */

function getStudents() {

    return JSON.parse(
        localStorage.getItem("inovexaUsers")
    ) || [];

}


/* =========================================================
   STUDENT DASHBOARD
   ========================================================= */

function displayStudents() {

    const tableBody =
        document.getElementById(
            "candidateTableBody"
        );


    if (!tableBody) {

        return;

    }


    const students =
        getStudents();


    tableBody.innerHTML = "";


    let innovationCount = 0;

    let jobApplicantCount = 0;

    let attendanceCount = 0;

    let selectedCount = 0;


    students.forEach(
        function (student, index) {


            if (student.innovationRegistered) {

                innovationCount++;

            }


            if (student.jobApplicant) {

                jobApplicantCount++;

            }


            if (
                student.jobApplicant &&
                student.willAttend
            ) {

                attendanceCount++;

            }


            if (student.selected) {

                selectedCount++;

            }


            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    STU${String(
                        index + 1
                    ).padStart(3, "0")}
                </td>


                <td>
                    ${student.name}
                </td>


                <td>
                    ${student.email}
                </td>


                <td>

                    ${
                        student.innovationRegistered
                            ? '<span class="status active">Registered</span>'
                            : '<span class="status leave">No</span>'
                    }

                </td>


                <td>

                    ${
                        student.jobApplicant
                            ? '<span class="status active">Yes</span>'
                            : '<span class="status leave">No</span>'
                    }

                </td>


                <td>

                    ${
                        student.jobApplicant
                            ? (
                                student.willAttend
                                    ? '<span class="status active">Yes</span>'
                                    : '<span class="status leave">No</span>'
                              )
                            : '<span class="status leave">N/A</span>'
                    }

                </td>


                <td>

                    ${
                        student.selected
                            ? '<span class="status active">Selected</span>'
                            : (
                                student.jobApplicant
                                    ? '<span class="status">Pending</span>'
                                    : '<span class="status leave">N/A</span>'
                              )
                    }

                </td>


                <td>

                    ${
                        student.jobApplicant
                            ? (
                                student.selected
                                    ? `<button
                                        type="button"
                                        class="select-student"
                                        data-index="${index}">
                                        Unselect
                                      </button>`
                                    : `<button
                                        type="button"
                                        class="select-student"
                                        data-index="${index}">
                                        Select
                                      </button>`
                              )
                            : "-"
                    }

                </td>

            `;


            tableBody.appendChild(row);

        }
    );


    /* Update dashboard numbers */

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


    /* Select / Unselect buttons */

    const selectButtons =
        document.querySelectorAll(
            ".select-student"
        );


    selectButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            button.dataset.index
                        );


                    const students =
                        getStudents();


                    students[index].selected =
                        !students[index].selected;


                    localStorage.setItem(
                        "inovexaUsers",
                        JSON.stringify(
                            students
                        )
                    );


                    displayStudents();

                }
            );

        }
    );

}


/* =========================================================
   LOGOUT
   ========================================================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "loggedInUser"
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =========================================================
   CLEAR EMPLOYEE DATA
   ========================================================= */

const clearDataButton =
    document.getElementById(
        "clearDataButton"
    );


if (clearDataButton) {

    clearDataButton.addEventListener(
        "click",
        function () {

            const confirmClear =
                confirm(
                    "Are you sure you want to delete all employee data?"
                );


            if (!confirmClear) {

                return;

            }


            localStorage.removeItem(
                "inovexaEmployees"
            );


            displayEmployees();

            updateEmployeeStats();

        }
    );

}


/* =========================================================
   RUN DASHBOARD FUNCTIONS
   ========================================================= */

displayEmployees();

updateEmployeeStats();

displayStudents();
/* =========================================================
   STUDENT SEARCH AND FILTER
   ========================================================= */

const studentSearch =
    document.getElementById("studentSearch");

const studentFilter =
    document.getElementById("studentFilter");

if (studentSearch && studentFilter) {

    function filterStudents() {

        const searchText =
            studentSearch.value
                .toLowerCase()
                .trim();

        const filterValue =
            studentFilter.value;

        const students =
            getStudents();

        const tableBody =
            document.getElementById(
                "candidateTableBody"
            );

        tableBody.innerHTML = "";

        const filteredStudents =
            students.filter(function (student) {

                const matchesSearch =
                    student.name
                        .toLowerCase()
                        .includes(searchText) ||

                    student.email
                        .toLowerCase()
                        .includes(searchText);

                let matchesFilter = true;

                if (filterValue === "innovation") {
                    matchesFilter =
                        student.innovationRegistered;
                }

                if (filterValue === "job") {
                    matchesFilter =
                        student.jobApplicant;
                }

                if (filterValue === "selected") {
                    matchesFilter =
                        student.selected;
                }

                return matchesSearch && matchesFilter;
            });


        if (filteredStudents.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8"
                        style="text-align:center;">
                        No students found.
                    </td>
                </tr>
            `;

            return;
        }


        filteredStudents.forEach(
            function (student) {

                const originalIndex =
                    students.indexOf(student);

                const row =
                    document.createElement("tr");

                row.innerHTML = `
                    <td>
                        STU${String(
                            originalIndex + 1
                        ).padStart(3, "0")}
                    </td>

                    <td>${student.name}</td>

                    <td>${student.email}</td>

                    <td>
                        ${
                            student.innovationRegistered
                            ? "Registered"
                            : "No"
                        }
                    </td>

                    <td>
                        ${
                            student.jobApplicant
                            ? "Yes"
                            : "No"
                        }
                    </td>

                    <td>
                        ${
                            student.jobApplicant
                                ? (
                                    student.willAttend
                                    ? "Yes"
                                    : "No"
                                  )
                                : "N/A"
                        }
                    </td>

                    <td>
                        ${
                            student.selected
                            ? "Selected"
                            : (
                                student.jobApplicant
                                ? "Pending"
                                : "N/A"
                            )
                        }
                    </td>

                    <td>
                        ${
                            student.jobApplicant
                            ? `
                                <button
                                    type="button"
                                    class="select-student"
                                    data-index="${originalIndex}">
                                    ${
                                        student.selected
                                        ? "Unselect"
                                        : "Select"
                                    }
                                </button>
                              `
                            : "-"
                        }
                    </td>
                `;

                tableBody.appendChild(row);
            }
        );


        /* Reconnect Select buttons */

        document
            .querySelectorAll(".select-student")
            .forEach(function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        students[index].selected =
                            !students[index].selected;

                        localStorage.setItem(
                            "inovexaUsers",
                            JSON.stringify(students)
                        );

                        displayStudents();
                    }
                );

            });
    }


    studentSearch.addEventListener(
        "input",
        filterStudents
    );

    studentFilter.addEventListener(
        "change",
        filterStudents
    );
}