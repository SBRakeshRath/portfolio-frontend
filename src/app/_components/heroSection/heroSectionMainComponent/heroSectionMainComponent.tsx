import PhotoComponent from "./photoComponent/photoComponent";
import TextComponent from "./textComponent/textComponent";
import "./heroSectionMainComponent.scss"
export default function HeroSectionMainComponent() {





    return(
        <div className="heroSectionMainComponent">
            <TextComponent />
            <PhotoComponent />
        </div>
    )
}