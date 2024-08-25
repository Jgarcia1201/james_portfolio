import { InfoSectionContainer, InfoPageContainer, InfoSection, ScrollContainer } from '@/components/shared/styled-components'
import { projectData } from './projectData'
import { ProjectEntryLink } from './styled-components'


export interface Project {
    name: string,
    desc: string,
    tech: string,
    href: string
}


const Projects: React.FC = () => {
    return (
        <InfoPageContainer>
            <ScrollContainer>
                <InfoSectionContainer>
                    <InfoSection>
                        {projectData.map((project) => {
                            return (
                                <ProjectEntryLink key={project.name}  href={project.href}>
                                    <h1>{project.name}</h1>
                                    <p>{project.desc}</p>
                                    <p>{project.tech}</p>
                                </ProjectEntryLink>
                            )
                        })}
                    </InfoSection>
                </InfoSectionContainer>
            </ScrollContainer>
            <p>More coming soon...</p>
        </InfoPageContainer>
    )
}

export default Projects