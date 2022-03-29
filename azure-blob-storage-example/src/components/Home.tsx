import { Link } from "react-router-dom"

function Home() {
    return (
        <>
        <main>
            <nav>
                <Link to="upload-file">Upload a File</Link>
                <Link to="list-files">List files</Link>
            </nav>
        </main>
        </>
    )
}

export default Home