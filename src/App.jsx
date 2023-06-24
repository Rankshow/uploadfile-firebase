import './App.css'
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

function App() {
  const [userImage, setUserImage] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageRef = ref(storage, "image/")
  // function which upload image to our firebase
  const uploadImage = () => {
     if (userImage == null) return;
     const ImageRef = ref(storage, `image/${userImage.name + v4()}`);
     uploadBytes(ImageRef, userImage).then((snaphsot) =>{
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev, url])
      })

     });
  }

  // useEfect hooks
  useEffect(() => {
     listAll(imageRef).then((response) => {
      response.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setImageList((prev) => [...prev, url])
      })
      })
     })
  }, [])

  // Rendering to the Dom........
  return (
    <>
   <div class="max-w-md mx-auto bg-white rounded-xl shadow-md shadow-blue-900 overflow-hidden text-2xl md:max-w-2xl h-full">
    <h1  className='text-blue-700 py-4 font-bold'>Upload files page</h1>
    
    {/* Display image ontop of the input field */}
    {
      imageList.map((url) => {
        return (
          <div className='mx-auto w-20 h-20'>
            <img className='rounded-full' src={url} />
          </div>
        )
      })
    }

    <input type="file" onChange={(e) => setUserImage(e.target.files[0])} /> <br />
    <button onClick={uploadImage} className='bg-red-600 p-2 rounded-md mt-2 hover:opacity-80 text-white'>Upload image</button>
</div>    
</>
  )
}

export default App
