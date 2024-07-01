import { getStorage } from 'firebase/storage';
import app from './index.js'

const storage = getStorage(app);
export default storage;