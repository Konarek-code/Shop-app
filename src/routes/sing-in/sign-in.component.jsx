import { signInWithGooglePopup , createUserDocumentFromAuth } from "../../firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef)
      };

    return(
        <div>
            <h1> Sing In </h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    );
};
export default SignIn;