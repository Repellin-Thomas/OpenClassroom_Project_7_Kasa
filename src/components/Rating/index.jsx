import fullStar from '../../assets/fullstar.png'
import emptyStar from '../../assets/emptystar.png'
import './Rating.css'




function Rating(props) {

    const fullStars = parseInt(props.rating)
    const fullStarsArray = Array(fullStars).fill(<img src={fullStar} alt='Full star' />)
    const emptyStarsArray = Array(5 - fullStars).fill(<img src={emptyStar} alt='Empty star' />)

    return (
        <div className="rating-container">
            {fullStarsArray.map((fullStar, index) => {
                return (<div className="star-container" key={index}>{fullStar}</div>)
            })}
            {emptyStarsArray.map((emptyStar, index) => {
                return (<div className="star-container" key={index}>{emptyStar}</div>)
            })}

        </div>)
}





export default Rating;