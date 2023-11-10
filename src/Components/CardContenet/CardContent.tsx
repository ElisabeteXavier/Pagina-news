import Button from "../Button"
import Paragraph from "../Paragraph"
import Subtitle from "../Subtitle"
import Title from "../Title"
import "./style.css"
import { CardContentProps } from "./types"

function CardContent(props: CardContentProps) {

    return (

        <div className="container-card">

            <Title titulo={props.titulo} />
            <Subtitle subtitulo={props.subititulo} />
            <Paragraph body={props.paragrafo} />
            <Button nome="Button Label" />
        </div>
    )


}
export default CardContent