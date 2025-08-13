import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { Environments } from './environments/environment';

import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
  initializeFirestore,
  persistentMultipleTabManager,
  persistentLocalCache,
  CACHE_SIZE_UNLIMITED,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: Environments.firebaseConfig.apiKey,
  authDomain: Environments.firebaseConfig.authDomain,
  projectId: Environments.firebaseConfig.projectId,
  storageBucket: Environments.firebaseConfig.storageBucket,
  messagingSenderId: Environments.firebaseConfig.messagingSenderId,
  appId: Environments.firebaseConfig.appId,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// export const db = initializeFirestore(app, {
//   localCache:persistentLocalCache({
//     tabManager: persistentMultipleTabManager(),
//       cacheSizeBytes: CACHE_SIZE_UNLIMITED
//     })
//   });

//   await setDoc(doc(db, 'user'),{
//     firstName: '',
//     lastName: '',
//     email: 'userData.email',
//     phone: 'userData.phone'
//   })
