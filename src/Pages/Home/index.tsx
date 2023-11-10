
import CardContent from "../../Components/CardContenet/CardContent"
import "./style.css"
import Api from "../../Uteis/Api"
import { useEffect, useState } from "react"
import { HomeProps } from "./types";

function Home() {
    //renomear a props depois
    const [resultData, setResultData] = useState<HomeProps[]>([]);

    async function HandleData() {
        try {
            const response = await Api.get("everything",
                {
                    params: {
                        q: "tesla",
                        from: "2023-11-07",
                        apiKey: "ceab2c91614d4c74a1121bb3d01a2437"
                    }
                }
            )
            console.log(response);
            setResultData(response.data.articles)


        } catch {
            console.log("erro ao buscar notícias")
        }
    }

    useEffect(() => {
        HandleData()

        console.log(resultData, "oi")

    }, [])


    return (
        <div className="container">
            {resultData?.map((item) => (
                <CardContent titulo={item.title} subititulo="oi" paragrafo="tdvsfywegfyeeeeeeeeeeee" />

            ))}
        </div>

    )

}
export default Home