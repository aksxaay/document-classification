import React, { useState, useEffect } from "react";
import axios from "axios";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import jwt_decode from "jwt-decode";
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: false,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    // console.log('Dropped files', e.dataTransfer.files);
  },
};

function AddClient() {
  const [image, setImage] = useState("");
  const selectedFile = (e) => {
    setImage(e.target.files[0]);
  };
  // console.log(image)

    const submitForm = (e) => {
        e.preventDefault()
        console.log('dfghjkjhgfxhjkjhgffghjkjhgfxghj');
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const formData = new FormData()
        formData.append("userID",userId)
        formData.append("image", image)
        axios.post('http://127.0.0.1:5000/postimage', formData)
            .then(res => console.log(res))
    }

  return (
    <div>
      <form
        class="w-full max-w-lg"
        onSubmit={submitForm}
        
      >
        <div class="-mx-3 mb-6 flex flex-wrap">
          <input type="file" filename="articleimage" onChange={selectedFile} />
        </div>
        <button
          type="submit"
          class="mb-2 rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Submit
        </button>{" "}
      </form>

      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}

export default AddClient;
