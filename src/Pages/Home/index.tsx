
import CardContent from "../../Components/CardContenet/CardContent"
import "./style.css"
import Api from "../../Uteis/Api"
import { useEffect, useState } from "react"
import { HomeProps } from "./types";

function Home() {
    //renomear a props depois
    const [resultData, setResultData] = useState<HomeProps[]>([]);
    const currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 1);

const formattedDateYesterday = currentDate.toISOString().split('T')[0];

    async function HandleData() {
        try {
            const response = await Api.get("everything",
                {
                    params: {
                        q: "tesla",
                        from: formattedDateYesterday,
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
                <CardContent  titulo={item.title} subititulo={item.author} paragrafo={item.description} url={item.url} />

            ))}
        </div>

    )

}
export default Home