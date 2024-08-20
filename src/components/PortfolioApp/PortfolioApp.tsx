'use client'

import { MainContainer, Display, NameNavContainer, ContentContainer, NameContainer } from "./styled-components"
import { useRef, useState, useEffect } from "react"
import { fadeOut, fadeIn, pageChangeInterval } from "@/helpers/animations"
import renderPage from "./render"
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation"
import Nav from "../Nav/Nav"

const PortfolioApp = () => {
    const contentRef = useRef<HTMLDivElement>(null)
    const navOptionRef = useRef<HTMLDivElement>(null)

    const [ currentPage, setCurrentPage ] = useState<String>('home')
    // const [ showLoader, setShowLoader ] = useState<Boolean>(true) TODO: IMPLEMENT LOADER

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
            <MainContainer id='main-container'>
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