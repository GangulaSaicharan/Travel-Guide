import './index.css'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <li className="list-location">
      <div className="locationCardContainer">
        <img src={imageUrl} alt={name} className="location-image" />
        <div className="headingDescriptionContainer">
          <h1 className="heading">{name}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default LocationContainer
