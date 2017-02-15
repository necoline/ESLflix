import React from 'react'
import { Link }  from 'react-router'
const { string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
      poster: string.isRequired,
      title: string.isRequired,
      description: string.isRequired,
      vidID: string.isRequired
  },
  render() {
    const { poster, title, description, vidID } = this.props
    return (
      <Link to={`/details/${this.props.vidID}`}>
        <div  className='show-card'>
          <img src={`/public/img/posters/${poster}`} />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Link>
    )
  }
})

export default ShowCard
