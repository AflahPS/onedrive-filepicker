import { AxiosError } from "axios";
import "./FP.css";
import React, { useState } from "react";

const FilePicker = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFilePicker = () => {
    window.OneDrive.open({
      clientId: process.env.OD_CLIENT_ID,
      action: "pick",
      multiSelect: false,
      openInNewWindow: true,
      advanced: {
        redirectUri: process.env.OD_REDIRECT_URI,
      },
      success: (files) => {
        setFile(files[0]);
      },
      cancel: () => {
        console.log("File picker cancelled");
      },
      error: (error) => {
        console.error("File picker error:", error);
        console.log(error.message[0]);
        setError(error.message[0]);
      },
    });
  };

  return (
    <>
      <div className="picker">
        <h3>File Picker</h3>

        <button className="picker-button" onClick={handleFilePicker}>
          Pick file
        </button>
        {file && <p>File name: {file.name}</p>}
        {error && <div>Error: {error.message}</div>}
        {error && error instanceof AxiosError && (
          <div>Error From Response: {error.response.data.error.message}</div>
        )}
      </div>
    </>
  );
};

export default FilePicker;
