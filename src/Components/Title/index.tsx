import { TitleProps } from "./types"
import "./style.css"

function Title (props: TitleProps){
    return(
            <h1 className="titulo">{props.titulo}</h1>

    )
}

export default Title