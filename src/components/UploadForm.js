import React, { useState } from 'react';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setUploadSuccess(false); // Reset upload success state
        setUploadError(null); // Reset upload error state
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (file) {
            const requestData = {
                pdfFilePath: file.name // Assuming you want to send the file name
            };

            try {
                const response = await fetch('http://127.0.0.1:3001/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });

                if (response.ok) {
                    console.log('File uploaded successfully');
                    setUploadSuccess(true); // Set upload success state
                } else {
                    console.error('Failed to upload file');
                    setUploadError('Failed to upload file'); // Set upload error state
                }
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadError('Error uploading file: ' + error.message); // Set upload error state
            }
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} />
                <button type="submit">Upload</button>
            </form>
            {uploadSuccess && <p>File uploaded successfully</p>}
            {uploadError && <p>{uploadError}</p>}
        </div>
    );
};

export default UploadForm;
