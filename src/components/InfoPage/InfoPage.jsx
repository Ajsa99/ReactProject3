import { Link, useLocation } from "react-router-dom";
import style from "./info.module.css"

const InfoPage = () => {

    const location = useLocation();

    console.log(location)

    const item  = location.state.id;

    return <div>
    
    <div><Link to="/" className={style.link}>--Home</Link></div>
        <div className={style.infoBlock}>
            <h1>{item.title}</h1>
            <p>{item.name}</p>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="marvel" width={'400px'} />
        </div>

    </div>
}

export default InfoPage;