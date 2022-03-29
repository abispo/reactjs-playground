import { ContainerClient, BlobItem } from "@azure/storage-blob"
import { useEffect, useState } from "react"

function ListFiles() {

    const [blobsList, setBlobsList] = useState<BlobItem[]>([])
    
    useEffect(() => {
        const containerClient = new ContainerClient("http://localhost:10000/devstoreaccount1/files?sv=2018-03-28&st=2022-03-29T00%3A22%3A01Z&se=2022-03-30T00%3A22%3A01Z&sr=c&sp=racwdl&sig=84DLRJZQoeRbkOby6lGbjIAUzDwbnFfiww23wj%2BqM0U%3D")

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