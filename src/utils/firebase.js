import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBJ1Ewa9EGad_uvjEII4bYWG7vEUBSbkQ4',
  authDomain: 'netflixgpt-98085.firebaseapp.com',
  projectId: 'netflixgpt-98085',
  storageBucket: 'netflixgpt-98085.appspot.com',
  messagingSenderId: '2781229962',
  appId: '1:2781229962:web:3dfe7697d2ee0ae141ce73',
  measurementId: 'G-YGL865HPSY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth()
