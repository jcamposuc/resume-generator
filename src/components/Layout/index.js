import React from 'react';
import { Menu } from '../Menu';
import { FormWizard } from '../FormWizard';
import { Footer } from '../Common/Footer';

export const Layout = ({ children, showWizard = true }) => {
    return (
        <div className="App">
            <Menu />
            <div className='container mx-auto mb-10'>
                {showWizard && <FormWizard />}
                <div className='mt-10'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};