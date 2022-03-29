import { ContainerClient, BlobItem } from "@azure/storage-blob"
import { useEffect, useState } from "react"

function ListFiles() {

    const [blobsList, setBlobsList] = useState<BlobItem[]>([])
    
    useEffect(() => {
        const containerClient = new ContainerClient(`http://localhost:10000/devstoreaccount1/files?${process.env.REACT_APP_AZURE_CONTAINER_SHARED_ACCESS_SIGNATURE}`)

        async function fetchBlobsList() {
            let _blobsList = []
            for await (const blob of containerClient.listBlobsFlat()) {
                _blobsList.push(blob)
            }
            setBlobsList(_blobsList);
        }

        fetchBlobsList();
        
    }, []);

    const filesList = blobsList.map((blob) => ( <li key={ blob.name }>{ blob.name }</li> ))
    
    return (
        <div>
            <h2>Files list</h2>
            <ul>{ filesList } </ul>
        </div>
    )
}

export default ListFiles