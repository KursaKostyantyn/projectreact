import {useEffect, useState} from "react";

import {getAllAlbums} from "../../services";
import AlbumComponent from "./AlbumComponent";

export default function AlbumsComponent() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAllAlbums.then(({data}) => setAlbums([...data]))
    }, [])

    return (

        <div>
            {albums.map((album, index)=><AlbumComponent album={album} key={index}/>)}
        </div>
    )
}