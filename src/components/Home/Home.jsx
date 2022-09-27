import { useEffect, useState } from "react";
import apiMarvel from "../../api/apiMarvel";
import style from "./home.module.css"
import img from "./marvel.jpg"

const Home = () => {

    const [data, setData] = useState([])

    async function getData(){
        try{
            const res = await apiMarvel.get(`v1/public/characters?ts=1&apikey=e8e2e671094d1e473087ea047b74612c&hash=04aeaf9506246c75a13afaed55ee1d6d`)
            console.log(res.data.data.results)
            setData(res.data.data.results)
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getData()
    }, [])


    return <div>
        <div>
            <img src={img} alt="Marvel jpg" className={style.imgMarvel} />
        </div>
                {/* <button onClick={()=>getData()}>Fetch</button> */}

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