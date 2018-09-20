// koppla HTML till JS
var inputForm = document.getElementById('main-form');
// list of user registration numbers , names and  user passwords in 2-dimensional array
var nameList = [[111, 'Subarna', 'abc1'], [222, 'Shweta', 'cde2'], [333, 'Pratibha', 'fgh3'], [444, 'Amanpreet', 'ijk4'], [555, 'Max', 'lmn5'], [666, 'Garima', 'pqr6']];
var foundNumber = false; // boolean variable will check whether number is found in list, initially it is set to FALSE
var foundPassword = false;// boolean variable will check whether password matches, initially it is set to FALSE
inputForm.addEventListener("submit", function (a) {
    a.preventDefault();
    var inputNumber = document.getElementById('input-number').value;
    var inputPassword = document.getElementById('input-password').value;
    // check whether number is found in array
    for (var i = 0; i < nameList.length; i++) {
        if (inputNumber == nameList[i][0]) {
            foundNumber = true; // found is set to TRUE bcoz registration number match has been found
            // check whether password matches 
            if (inputPassword === nameList[i][2]) {
                // New page is loaded if user password matches
                foundPassword = true;
                var personName = nameList[i][1];
                swal({
                    title: 'Success!',
                    text: 'Welcome ' + personName ,
                    type: 'success',
                    confirmButtonText: 'Ok',
                    onClose: function () {
                        reload();
                    }
                })
                function reload() {
                    window.location.href = 'http://www.google.com';
                }
            }
            // if password does not match
            else {
                var personName = nameList[i][1];
                swal({
                    title: 'Password does not match !',
                    text: personName + ' please enter details again.',
                    type: 'error',
                    confirmButtonText: 'Ok',
                    onClose: function () {
                        reload();
                    }
                })
                function reload() {
                    window.location.reload();
                }
            }
        }
    }
// the person is not in list
    if (foundNumber === false && foundPassword === false) { 
        swal({
            title: 'User not found',
            text: 'Invalid registration number!',
            type: 'error',
            confirmButtonText: 'Ok',
            onClose: function () {
                reload();
            }
        })
        function reload() {
            window.location.reload();
        }
    }
});