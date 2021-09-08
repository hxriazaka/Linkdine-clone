import './feedOp.css'

const FeedOp = ({Icon, title, color}) => {
    return ( 
        <div className="feedop">
            < Icon style={{ color :color }}/>
            <h4>{title}</h4>
        </div>
     );
}
 
export default FeedOp;