interface ProfileProps {
    name: string;
    imgUrl: string;
}

const Profile = ({name, imgUrl}: ProfileProps) => {
    return (
        <div>
            <img src={imgUrl} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default Profile
