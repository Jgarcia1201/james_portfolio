import Contact from "../Contact/Contact"
import HomePage from "../Home/Home"
import Resume from "../Resume/Resume"
import Projects from "../Projects/Projects"

export default function renderPage(page: String) {
    switch (page) {
        case 'home':
            return (<HomePage />)
        case 'contact':
            return (<Contact />)
        case 'resume':
            return (<Resume />)
        case 'projects':
            return (<Projects />)

    }
}