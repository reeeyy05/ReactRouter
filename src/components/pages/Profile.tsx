import { useBearStore } from "../../stores/store";
import ProfileInfo from "../profile/ProfileInfo";

const Profile = () => {
    const bears = useBearStore(state => state.bears)
    return (
        <div>
            <h1>Mi perfil</h1>
            <ProfileInfo />
            <p>Osos: {bears}</p>
        </div>
    );
};

export default Profile;