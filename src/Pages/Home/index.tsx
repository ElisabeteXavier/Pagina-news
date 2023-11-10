import Button from "../../Components/Button"
import Paragraph from "../../Components/Paragraph"
import Subtitle from "../../Components/Subtitle"
import Title from "../../Components/Title"
import "./style.css"

function Home (){

    return(

        <div className="container">

        <Title titulo=" Heading SM"/>
        <Subtitle subtitulo="Subititle SM"/>
        <Paragraph body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. E
        os praesentium architecto voluptate odit assumenda quam id eaque nulla consequuntur. Odio
         sapiente, nobis blanditiis corporis omnis necessitatibus fugiat incidunt in dolor.e
        "/>
        <Button nome ="Button Label"/>   
        </div>
           )


}
export default Home