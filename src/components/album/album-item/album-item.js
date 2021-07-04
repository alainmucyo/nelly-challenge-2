import "./album-item.css"
export function AlbumItem({title, thumbnailUrl}) {
    return (
        <div className="album-item">
            <img className="album-image" src={thumbnailUrl} alt={title}/>
            <div className="album-title">{title}</div>
        </div>

    )
}