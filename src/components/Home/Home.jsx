import { useEffect, useState } from "react";
import apiMarvel from "../../api/apiMarvel";
import style from "./home.module.css"
import img from "./marvel.jpg"

const Home = () => {

    const [data, setData] = useState([])
    const [optional, setOptional] = useState('comics')

    async function getData(){
        try{
            let res = await apiMarvel.get(`v1/public/${optional}?ts=1&apikey=b2d9ba9fafe4227c2cc8a808b7cc6797&hash=a4c1520f5835b6924da936263cdf56d8`)
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
                <h3>{item.name}</h3>

            </div>

            })}

        </div>
    </div>
}

export default Home;