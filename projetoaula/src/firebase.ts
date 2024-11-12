import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyC-MYAjV4ModTngLtunlsVw3l9wl91MQlc",
    authDomain: "codespace-usabilidade.firebaseapp.com",
    projectId: "codespace-usabilidade",
    storageBucket: "codespace-usabilidade.firebasestorage.app",
    messagingSenderId: "79525096049",
    appId: "1:79525096049:web:212cc74183d97c313109d0",
    measurementId: "G-64HEFPN2D9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;