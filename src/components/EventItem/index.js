// Write your code here

import './index.css'

const EventItem = props => {
  const {itemDetails, clickEventItem} = props
  const {imageUrl, id, name, location, registrationStatus} = itemDetails

  const changeStatus = () => {
    console.log(id)
    clickEventItem(id)
  }
  return (
    <button type="button" onClick={changeStatus}>
      <li className="event-item-con">
        <img src={imageUrl} className="item" alt="event" />
        <p className="para">{name}</p>
        <p className="para"> {location}</p>
      </li>
    </button>
  )
}

export default EventItem
