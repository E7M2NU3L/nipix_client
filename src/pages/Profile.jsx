import React from 'react';
import Sidebar from '../components/Profile/Sidebar';
import ProfileC from '../components/Profile/ProfileC';
import { useSnapshot } from 'valtio';
import ProfileProxy from '../proxy/ProfileProxy';
import Courses from '../components/Profile/Courses';
import Webinars from '../components/Profile/Webinars';

const Profile = () => {
    const snapshot = useSnapshot(ProfileProxy);

    const ConditionalRender = () => {
        if (snapshot.profile) {
            return <ProfileC />;
        } else if (snapshot.Courses) {
            return <Courses />;
        } else if (snapshot.Webinars) {
            return <Webinars />;
        } else { 
            return null;
        }
    }

    return (
        <section>
            <div className='min-h-[90vh] flex'>
                <Sidebar />
                <React.Fragment>
                    {ConditionalRender()}
                </React.Fragment>
            </div>
        </section>
    );
}

export default Profile;
