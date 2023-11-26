import { useLoaderData, useParams } from "react-router-dom";

const ProfileDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const { id } = useParams()
    console.log(id);
    console.log(data);
    return (
        <div>

        </div>
    );
};

export default ProfileDetails;