'use client'

import { MainContainer, Display, NameNavContainer, ContentContainer, NameContainer } from "./styled-components"
import { useEffect, useRef, useState } from "react"
import { fadeOut, fadeIn, pageChangeInterval, loadInterval } from "@/helpers/animations"
import renderPage from "./render"
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation"
import Nav from "../Nav/Nav"
import Loader from "../Loader/Loader"

const PortfolioApp = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const navOptionRef = useRef<HTMLDivElement>(null)
    const mainDisplayRef = useRef<HTMLDivElement>(null)

    const [ currentPage, setCurrentPage ] = useState<String>('home')
    const [ showLoader, setShowLoader ] = useState<Boolean>(true)

    useEffect(() => {
        // Hide FOUC
        fadeIn(mainDisplayRef)
        setTimeout(() => {
            setShowLoader(false)
        }, loadInterval + 500)
    }, [])

    function handlePageNavigation(page: String) {
        if (contentRef && contentRef.current) {
            fadeOut(contentRef)
            fadeOut(navOptionRef)
            setTimeout(() => {
                setCurrentPage(page)
                fadeIn(contentRef)
                fadeIn(navOptionRef)
            }, pageChangeInterval)
        }
    }

    return (
        <>
            <MainContainer 
                id='main-container' 
                style={{ opacity: 0 }} // Hide FOUC
                ref={mainDisplayRef}
            >
                {showLoader  && <Loader />}
                <BackgroundAnimation currentPage={currentPage} />
                <Display>
                    <NameNavContainer>
                        <NameContainer>
                            <h2 id='title-name'>James Garcia</h2>
                            <p id='title-desc'>Full Stack Software Developer</p>
                        </NameContainer>
                        <Nav
                            currentPage={currentPage}
                            onNavigate={handlePageNavigation}
                        />
                    </NameNavContainer>
                    <ContentContainer ref={contentRef}>
                        {renderPage(currentPage)}
                    </ContentContainer>
                </Display>
            </MainContainer>
        </>
    )
}

export default PortfolioApp