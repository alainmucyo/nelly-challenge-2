import './App.css';
import {AlbumList} from "./components/album/album-list/album-list";
import {AlbumSearch} from "./components/album/album-search/album-search";
import {useEffect, useState} from "react";
import {Loader} from "./components/shared/loader/loader";

function App() {
    const [data, setData] = useState({albums: []});
    const [albumId, setAlbumId] = useState(1);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            if (albumId.toString().trim() === "")
                return;
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`).then(res => res.json());
            setLoading(false)
            setData({albums: res})
        }

        fetchData()
    }, [albumId])

    function searchAlbum(search) {
        setAlbumId(search)
    }

    return (<div className="App">
            <AlbumSearch onSearch={searchAlbum}/>{!loading ?
            <AlbumList albums={data.albums}/> :
            <Loader/>}
        </div>
    );
}

export default App;
