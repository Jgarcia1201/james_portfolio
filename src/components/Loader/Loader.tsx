import styled from "styled-components"
import { useEffect, useRef } from "react"
import { fadeIn, fadeOut, loadInterval } from "@/helpers/animations"

const Loader: React.FC = () => {
    const loaderRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (loaderRef) {
            fadeIn(loaderRef)
            setTimeout(() => {
                fadeOut(loaderRef)
            }, loadInterval)
        }
    }, [])

    return (
        <LoaderContainer ref={loaderRef}>
            James Garcia | Full Stack Engineer
        </LoaderContainer>
    )
}

export default Loader

const LoaderContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99999999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: 1s;
`
