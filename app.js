
var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {

    $scope.semesters = [1, 2, 3, 4, 5, 6, 7, 8];

    // Example records to demonstrate the table
    $scope.students = [
        {
            enrollment: "101",
            name: "Shaily",
            course: "B.Tech",
            semester: "5"
        },
        {
            enrollment: "102",
            name: "Rahul",
            course: "BCA",
            semester: "3"
        }
    ];

    $scope.student = {};
    $scope.successMessage = "";
    $scope.registeredStudent = null;

    $scope.registerStudent = function () {

        if (!$scope.studentForm.$valid) {
            $scope.successMessage = "";
            return;
        }

        // Prevent duplicate enrollment numbers
        var duplicate = $scope.students.some(function (s) {
            return String(s.enrollment).trim() ===
                String($scope.student.enrollment).trim();
        });

        if (duplicate) {
            $scope.successMessage =
                "This enrollment number is already registered.";
            return;
        }

        var newStudent = angular.copy($scope.student);

        newStudent.name = newStudent.name.trim();
        newStudent.enrollment = newStudent.enrollment.trim();

        $scope.students.push(newStudent);
        $scope.registeredStudent = angular.copy(newStudent);

        $scope.successMessage = "Student registered successfully!";

        // Reset form fields and validation state
        $scope.student = {};
        $scope.studentForm.$setPristine();
        $scope.studentForm.$setUntouched();
    };
});
