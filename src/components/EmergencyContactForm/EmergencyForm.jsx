import React from 'react';

import EmergencyContactContainer from './EmergencyContactContainer';
import EmergencyContact from './EmergencyContact';

const EmergencyForm = () => (
    <>
        <EmergencyContactContainer
            initialValues={{
                firstname: '',
                lastname: '',
                address: '',
                phonenumber: '',
                relationship: '',
            }}>
            <EmergencyContact />
        </EmergencyContactContainer>
    </>
);

export default EmergencyForm;
