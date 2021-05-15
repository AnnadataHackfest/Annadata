import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
class Soil extends Component {
  state = {
    selectedFile: null,
  };

  fileSelectedHandler = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('file', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://localhost:5000/api/upload', fd, {}).then((res) => {
      console.log(res);
    });
  };

  render() {
    return (
      <div className="about_us">
        <h2>KNOW YOUR SOIL</h2>
        <div className="mission">
          <span>MISSION</span>
          <p>
            We use artificial intelligence to suggest most effective crops for
            the farmers.
          </p>
          <input type="file" onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>upload</button>
        </div>
      </div>
    );
  }
}
export default Soil;
