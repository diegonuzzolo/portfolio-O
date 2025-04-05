import photo from "../assets/profilePhotoMobile.jpg"
const ProfilePhoto = ()=>{
    return (
    <div
    style={{
        /* bg-2 */

        position: 'absolute',
        width: '256px',
        height: '256px',
        right: '0%',
        top: '94px',
        backgroundColor: 'transparent'

    }}
    >
    <div style={{

        position: 'absolute',
        width: '256px',
        height: '256px',
        right: '22%',
        top: '94px',
        backgroundImage: `url(${photo})`,
        borderRadius: '600px',
        backgroundRepeat: "no-repeat"
    }}/>
        
    
    </div>
    );
}

export default ProfilePhoto;