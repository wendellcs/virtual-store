import { tags } from "../../services/tags-data";

export default function Tags(){
    return (
       <div className="container-tags">
            <h3 className="title small">Tags</h3>
            <ul>
                { Object.values(tags).map(tag => {
                    return <li className="tag" key={tag}>{tag}</li>
                })}
            </ul>
            <button className="btn see-more">Ver mais</button>
        </div>
    )
}