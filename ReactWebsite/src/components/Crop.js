import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Crop = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('file', selectedFile, selectedFile.name);
    axios.post('http://localhost:8000/predict', fd, {}).then((res) => {
      console.log(res);
      const temp = {
        disease: res.data.disease,
        disease_name: res.data.disease_name,
        plant_name: res.data.plant_name,
      };
      setData(temp);
    });
  };

  return (
    <div className="about_us">
      <h2 style={{ color: 'black' }} className="text-center">
        KNOW YOUR CROP
      </h2>
      <div className="mission">
        <span>Doubt of Plant Disease?</span>
        <p>
          We use artificial intelligence to predict the crop disease that can
          degrade agricultural output. Upload the plant image to be scanned by
          our machine learning model and get information about plant disease and
          remedies.
        </p>
        <br />
        <label
          for="file-upload"
          class="custom-file-upload btn btn-primary rounded-button"
        >
          <i class="fa fa-cloud-upload"></i> Upload Plant Image
        </label>

        <input id="file-upload" type="file" onChange={fileSelectedHandler} />
        {selectedFile ? selectedFile.name : null}
        {/* <input type= "file" onChange= {fileSelectedHandler} /> */}
        {/* <button onClick= {fileUploadHandler}>upload</button> */}
        <br />
        <br />
        <div className="text-center">
          <Button variant="success" onClick={fileUploadHandler}>
            Submit
          </Button>
        </div>
      </div>
      {data && (
        <Card style={{ width: '25rem', margin: 'auto' }}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/annadata/image/upload/v1619869415/plantDiseaseDetected_juzeyf.png"
            height="200"
            width="200"
          />
          <Card.Body>
            <h2>Plant Name: {data.plant_name}</h2>
            <h2>Disease: {data.disease ? 'true' : 'false'}</h2>
            {data.disease_name && <h2>Disease Name: {data.disease_name}</h2>}
          </Card.Body>
        </Card>
      )}
      <br />
    </div>
  );
};
export default Crop;
