import { signInWithGooglePopup , createUserDocumentFromAuth, } from "../../firebase/firebase.utils";

import SignUpForm from '../../Components/sing-up-formula/sing-up.component';

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
      };



    return(
        <div>
            <h1> Sing In </h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};
export default SignIn;