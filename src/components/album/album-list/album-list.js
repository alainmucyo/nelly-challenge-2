import {AlbumItem} from "../album-item/album-item";
import "./album-list.css";
import {Alert} from "../alert/alert";

export function AlbumList({albums}) {
    return (
        <>
            {albums.length>0 ? (
                <div className="album-list">
                    {albums.map(a => <AlbumItem key={a.id} title={a.title} thumbnailUrl={a.thumbnailUrl}/>)}
                </div>
            ) : <Alert text={"No albums found! Use the search box to find valid albums"}/>}
        </>
    )
}