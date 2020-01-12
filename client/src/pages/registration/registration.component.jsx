import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const Registration = () => {
    return(
        <section className="registration">
            <SignIn/>
            <SignUp/>
        </section>
    );
}

export default Registration;