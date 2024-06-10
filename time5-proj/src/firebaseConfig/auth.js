import {getAuth} from 'firebase/auth';
import app from './index.js'
const auth = getAuth(app);

export default auth;