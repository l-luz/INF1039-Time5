import * as firebaseui from 'firebaseui';
import {auth} from './auth';
import {
    EmailAuthProvider,
    GoogleAuthProvider
} from 'firebase/auth';
  

const authUi = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
        {
            provider: GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
            ],
            customParameters: {
                // Forces account selection even when one account
                // is available.
                prompt: 'select_account'
            }
        },
        {
            provider: EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
            signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,

        },
    ],
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // Handle sign-in.
            // Return false to avoid redirect.
            return false;
        },
    },
};

export {authUi, uiConfig};