

function ProfileCard({image , name ,  handle , title}) {
    return (
      <div className= "card">
        <div className="card-image">
            <figure className="image is-1by1">
                <img src={image} alt="pda logo"/>
            </figure>
        </div>

        <div className="card-content">
            <div className="media-content">
                <p className="subtitle is-5">{name}</p>
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
            </div>
        </div>
      </div>
    )
}

export default ProfileCard;