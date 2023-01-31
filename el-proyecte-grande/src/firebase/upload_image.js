import React, { useState, useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

async function UpdateFirebaseImage(isfileRecive){
    const url = ""

  const [userInfo, setuserInfo] = useState({
  });

//----------------------------------------------------------
  const [isfile, setFile] = useState(isfileRecive);
  console.log("restasddfas")

  console.log(isfile)

//   const handleImageAsFile = (e) => {
//     setFile(e.target.files[0]);
//   }
{/* Insert ------------------------------------------- */}
  const addlist = async() => {
    
    try {
    //   event.preventDefault();
      let file = isfile;

      const storage = getStorage();
      var storagePath = 'uploads/' + file.name;

      const storageRef = ref(storage, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on('state_changed', (snapshot) => {
        // progrss function ....
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => { 
        // error function ....
        console.log(error);
      }, 
      () => {
        // complete function ....
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          url = downloadURL;
          db.collection('users').add({
            images: downloadURL,
            datetime: firebase.firestore.FieldValue.serverTimestamp()
          })
          setuserInfo({
            ...userInfo,
          });
          setFile(null);
        });
      });
    } catch (error) { throw error;}  
  }

    await addlist()
    return url;
//   return (<>
//     <div className="App">
//       <h1> React Firebase storage Image Upload </h1>
//       <div className="wrapper">
//         {/* Insert users -------------------------------------------*/}
//         <form onSubmit={addlist}>
//           <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageAsFile}/>
//           <button type="submit" className="btn__default btn__add" > Upload </button>  
//         </form>
//       </div>
//       {/* Fetch users ------------------------------------------------*/}
      
//     </div>
//   </>)
}
export default UpdateFirebaseImage;