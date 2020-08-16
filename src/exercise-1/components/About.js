import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const About = () => {
    return (<div className={'section'}>
        <p>Company: ThoughtWorks</p>
        <p>Local Location: Xi'an</p>
        <p>For more information, please</p>
        <p>
            <span>view our </span>
            <Link to='/'>website</Link>
        </p>
    </div>);
}

export default About;