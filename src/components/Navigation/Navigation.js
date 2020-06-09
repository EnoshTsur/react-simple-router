import React from 'react'
import { Router, Link, } from 'react-router-dom'

export default function Navigation({ history, }) {
    // const [isMobile, setMobile] = React.useState(false)

    // React.useEffect(() => {
    //     const mediaQuery = window.matchMedia('(max-width: 768px)');
    //     setMobile(mediaQuery.matches);
    //     mediaQuery.addListener((mq) => setMobile(mq.matches));
    // }, []);

    const home = "home"
    const about = "about"
    const contacts = "contacts"

    return (
        <div style={{
            display: 'flex'
        }}>
            <Router history={history}>
                <Link to={`/${home}`}>
                    <button>Homepage</button>
                </Link> 
            </Router>
            <Router history={history}>
                <Link to={`/${about}`}>
                    <button>About</button>
                </Link> 
            </Router>
            <Router history={history}>
                <Link to={`/${contacts}`}>
                    <button>Contacts</button>
                </Link> 
            </Router>
        </div>
    )
}
