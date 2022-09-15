import "./App.css";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

// import * as firebase from "firebase/app";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);

  // const imagesListRef = ref(storage, "images/");

  let json = { 
    "name": "John",
    "age": 30, 
    "car": "BMW" 
  }

    // convert your object into a JSON-string
  let jsonString = JSON.stringify(json);
  // create a Blob from the JSON-string
  let blob = new Blob([jsonString], {type: "application/json"})


  const uploadFile = () => {
    for (let file of imageUpload) {
      console.log(file)
      if (file === null) return;
      const v4_imagename = `images/${v4() +"_"+ file.name}`
      console.log("v4name ", v4_imagename)
      const imageRef = ref(storage, v4_imagename);
      uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url)=>console.log("url is",url))
    });
    }
    console.log("Images Upload")
    alert("Images Upload")
    // if (imageUpload == null) return;
    // const imageRef = ref(storage, `images/${v4() + imageUpload.name}`);
    // uploadBytes(imageRef, imageUpload).then(() => {
    //   alert("Image Upload")
    // });
  };



  const SubmitDataJson = () => {
    console.log(json);
    // create a reference to the storage
    // create a reference to the storage
    const storageRef = ref(storage, 'some-child.json');

    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });


    // var fileRef = storageRef
    // fileRef.put(blob).then(function(snapshot) {
    //   console.log('Uploaded a blob!')
    // });
  };

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);  

  return (
    <div className="App">
      <input
        type="file"
        // Add multiple
        multiple
        onChange={(event) => {
          setImageUpload(event.target.files);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <button onClick={SubmitDataJson}> Upload Json</button>
    </div>
  );
}

export default App;


//https://www.youtube.com/watch?v=YOAeBSCkArA