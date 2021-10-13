import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';


initializeAuthentication()

const useFirebase = () => {
    const [user, setUsers] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth(); 

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUsers(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    // obseve user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUsers(user)
            } else {
                setUsers({})
            }
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
        .then(() => {
            console.log('log out success')
        })
        .catch(error => {
            setError(error.message)
        })
    }
    
    return {
        googleSignIn,
        logOut,
        users: user,
        error
    }
}
export default useFirebase