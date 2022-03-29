import { ContainerClient } from "@azure/storage-blob";
import { ChangeEvent, useState } from "react";

function UploadFile() {

    const [selectedFile, setSelectedFile] = useState<File>();

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { target } = event;
        const { files } = target
        
        if (files) {
            const file = files[0]
            setSelectedFile(file);
        }
    }

    const onFileUpload = async () => {
        const formData = new FormData();
        const containerClient = new ContainerClient(`http://localhost:10000/devstoreaccount1/files?${process.env.REACT_APP_AZURE_CONTAINER_SHARED_ACCESS_SIGNATURE}`)

        if (selectedFile) {
            formData.append(
                selectedFile?.name || "myFile", selectedFile, selectedFile?.name
            )
        }

        console.log(selectedFile);
        
        for (const value of formData.entries()) {
            console.log(value)
        }

        const blobClient = containerClient.getBlockBlobClient(selectedFile?.name || "myFile")
        const options = { blobHTTPHeaders: { blobContentType: selectedFile?.type }}

        await blobClient.uploadData(selectedFile!, options)

    }

    return (
        <div>
            <h2>Upload a File</h2>

            <h3>
              File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={ onFileChange } />
                <button onClick={ onFileUpload }>
                  Upload!
                </button>
            </div>

        </div>
    )
}

export default UploadFile;
