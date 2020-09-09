<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.1.3/firebase-auth.js"></script>
const firebaseConfig = {
    apiKey: "AIzaSyBrO_NFh0TwxB4n8BbKMWE7CzBjELy_y54",
    authDomain: "bakrabakri-b8a64.firebaseapp.com",
    databaseURL: "https://bakrabakri-b8a64.firebaseio.com",
    projectId: "bakrabakri-b8a64",
    storageBucket: "bakrabakri-b8a64.appspot.com",
    messagingSenderId: "936504716336",
    appId: "1:936504716336:web:9e6959ea7c459235cc91f5",
    measurementId: "G-F313FXGXKK"
  };

  const firebaseApp = 
    firebase.intitializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    
  
  export default db;