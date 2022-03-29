import { ContainerClient } from "@azure/storage-blob";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface HTMLInputEvent extends ChangeEventHandler<HTMLInputElement> {
    target: HTMLInputElement & EventTarget
}

function UploadFile() {

    const [selectedFile, setSelectedFile] = useState<File>();

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { target } = event;
        const { files } = target
        if (files) {
            const file= files[0]
            setSelectedFile(file);
        }
    }

    const onFileUpload = async () => {
        const formData = new FormData();
        const containerClient = new ContainerClient("http://localhost:10000/devstoreaccount1/files?sv=2018-03-28&st=2022-03-29T00%3A22%3A01Z&se=2022-03-30T00%3A22%3A01Z&sr=c&sp=racwdl&sig=84DLRJZQoeRbkOby6lGbjIAUzDwbnFfiww23wj%2BqM0U%3D")

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
