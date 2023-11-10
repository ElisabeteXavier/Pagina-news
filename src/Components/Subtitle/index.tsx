import { SubtitleProps } from "./types"
import "./style.css"

function Subtitle (props: SubtitleProps){
    return(
        <div>
            <h2 className="subtitle">{props.subtitulo}</h2>

        </div>
    )
}

export default Subtitle