import photo from "../assets/profilePhoto.jpg";

const ProfilePhoto = ()=>{
    return (
    <div
    style={{
        /* bg-2 */

        position: 'absolute',
        width: '524px',
        height: '524px',
        right: '0px',
        top: '94px',
        backgroundColor: 'transparent'

    }}
    >
    <div style={{

        position: 'absolute',
        width: '524px',
        height: '524px',
        right: '10%',
        top: '94px',
        backgroundImage: `url(${photo})`,
        borderRadius: '600px'

    }}/>
        
    
    </div>
    );
}

export default ProfilePhoto;