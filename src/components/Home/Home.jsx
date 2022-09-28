import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiMarvel from "../../api/apiMarvel";
import style from "./home.module.css"
import img from "./marvel.jpg"

const Home = () => {

    const [data, setData] = useState([])
    const [optional, setOptional] = useState('characters')

    async function getData(){
        try{
            let res = await apiMarvel.get(`v1/public/${optional}?ts=1&apikey=1efdb67ed087307731a198e0d8e204c3&hash=7135468905306d60f24e582f8ac439ab`)
            console.log(res.data.data.results)
            setData(res.data.data.results)
            console.log(optional)
         
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const navigation = useNavigate();

     const sendId = (id) => {
         navigation("/infoPage", {state : { id }})
     }

    return <div>
        <div>
            <img src={img} alt="Marvel jpg" className={style.imgMarvel} />
        </div>
        <div className={style.nav}>
             <button onClick={()=>{setOptional('comics');getData()}}>Comics</button>
             <button  onClick={()=>{setOptional('characters');getData()}}>Characters</button>
             <button  onClick={()=>{setOptional('creators');getData()}}>Creators</button>
             <button  onClick={()=>{setOptional('events');getData()}}>Events</button>
             <button  onClick={()=>{setOptional('series');getData()}}>Series</button>
        </div>
               

            <div className={style.cards}>

    

            {data.map((item, index) => { return <div key={index} className={style.card}>
                
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" className={style.image} />
                <h3 style={{color:'white;'}}>{item.name}</h3>
                <button className={style.button} to="/infoPage" onClick={() => sendId(item)}>Open</button>

            </div>

            })}

        </div>
    </div>
}

export default Home;