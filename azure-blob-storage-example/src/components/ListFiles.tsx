import { ContainerClient, BlobItem } from "@azure/storage-blob"
import { useEffect, useState } from "react"

function ListFiles() {

    const [blobsList, setBlobsList] = useState<BlobItem[]>([])
    
    useEffect(() => {
        const containerClient = new ContainerClient("http://localhost:10000/devstoreaccount1/files")

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