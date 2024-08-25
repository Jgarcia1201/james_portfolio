import { InfoSectionContainer, InfoPageContainer, InfoSection, ScrollContainer } from '@/components/shared/styled-components'
import { ResumeLink } from './styled-components'
import { resumeData } from './resumeData'
import ResumeEntry from './WorkExpEntry'
import EduExpEntry from './EduExpEntry'


const Resume: React.FC = () => {
    return (
        <InfoPageContainer>
            <ScrollContainer>
                <InfoSectionContainer>
                    <h1>Professional Experience</h1>
                    <InfoSection>
                        {resumeData.workExp.map((exp) => {
                            return (
                                <ResumeEntry key={exp.company} expEntry={exp} />
                            )
                        })}
                    </InfoSection>
                </InfoSectionContainer>
                <InfoSectionContainer>
                    <h1>Education</h1>
                    {resumeData.education.map((exp) => {
                        return (
                            <EduExpEntry key={exp.graduationDate} expEntry={exp} />
                        )
                    })}

                </InfoSectionContainer>
            </ScrollContainer>
            <ResumeLink href="RES.pdf" target="_blank">View PDF</ResumeLink>
        </InfoPageContainer>
    )
}

export default Resume