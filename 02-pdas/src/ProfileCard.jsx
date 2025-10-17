

function ProfileCard({image , name , handle , title}) {
    return (
       <div className="card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo"/>
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">Hello my name is {name}</p>
                <p className="subtitle is-6">Handle is {handle}</p>
                <p className="subtitle is-6">Title is {title}</p>
            </div>
        </div>
       </div>
    )
}

export default ProfileCard;