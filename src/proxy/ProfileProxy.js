import { proxy } from "valtio";

const initialState = {
    profile: true,
    Webinars: false,
    Courses: false
}

const ProfileProxy = proxy(initialState);

export default ProfileProxy;
