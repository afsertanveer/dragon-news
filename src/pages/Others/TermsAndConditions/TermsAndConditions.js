import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <p>Go Back To Registration: <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndConditions;