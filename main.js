// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0CmysjSDFEMKYeBIKFCd3sU-jCZjjU1U",
  authDomain: "daily-report-delete.firebaseapp.com",
  projectId: "daily-report-delete",
  storageBucket: "daily-report-delete.firebasestorage.app",
  messagingSenderId: "284631210854",
  appId: "1:284631210854:web:e4fe75885d39a228e846a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Cloud Firesoreの初期化
const db = getFirestore(app);

//Cloud Firestoreから取得データを表示する
const fetchHistoryData = async() =>{
    let tags ="";

    //reportsコレクションのデータを取得
    const querySnapshot = await getDocs(collection(db,"reports"));
    
    //データをテーブル表の形式に合わせてHTMLに挿入
    querySnapshot.forEach((doc)=>{
        console.log(`${doc.id}=>${doc.data()}`);
        tags += `<tr><td>${doc.data().date}</td>
                    <td>${doc.data().name}</td>
                    <td>${doc.data().work}</td>
                    <td>${doc.data().comment}</td></tr>`
    });
    document.getElementById("js-history").innerHTML = tags;
};

//Cloud Firestoreから取得したデータを表示する
if(document.getElementById("js-history")){
    fetchHistoryData();
}