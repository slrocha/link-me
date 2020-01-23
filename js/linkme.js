var firebaseConfig = {
    apiKey: "AIzaSyDG_zcHkBgsKHHAaHxEqU3NZ48xZ6gJ3_M",
    authDomain: "link-me-d34a1.firebaseapp.com",
    databaseURL: "https://link-me-d34a1.firebaseio.com",
    projectId: "link-me-d34a1",
    storageBucket: "link-me-d34a1.appspot.com",
    messagingSenderId: "953083618137",
    appId: "1:953083618137:web:166e28c4c5474ab19d6248"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function myFunction() {
    var emailTxt = document.getElementById('inputEmail').value;
    var textArea = document.getElementById('inputTextarea').value;
    var database = firebase.database();
    var timestamp = new Date().getTime();
    
    database.ref(timestamp).set({
        email: emailTxt,
        text: textArea
    });

    $('#exampleModal').modal('toggle');

    document.getElementById('inputEmail').value = '';
    document.getElementById('inputTextarea').value = '';

    alert("Mensagem enviada com sucesso!");
}
