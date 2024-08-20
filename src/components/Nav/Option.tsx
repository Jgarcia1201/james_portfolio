import { useRef } from "react"
import { OptionContainer } from "./styled-components"
import { OptionProps } from "./types"
import { fadeIn, fadeOut, pageChangeInterval } from "@/helpers/animations"

const Option: React.FC<OptionProps> = ({ onNavigate, option, isSelected }) => {
    const navOptionRef = useRef<HTMLDivElement>(null)

    function handlePageNavigation(page: String) {
        fadeOut(navOptionRef)
        onNavigate(page)
        setTimeout(() => {
            fadeIn(navOptionRef)
        }, pageChangeInterval)
    }

    return (
        <OptionContainer ref={navOptionRef} onClick={() => handlePageNavigation(option.val)}>
           { isSelected ? '*' : option.label}
        </OptionContainer>

    )
}

export default Option