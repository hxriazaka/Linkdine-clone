import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {

    const newsArtc = (heading, subtitle) => (
        <div className="widgets-artc">
            <div className="widgets-left">
                < FiberManualRecordIcon />
            </div>
            <div className="widgets-right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return ( 
    <div className="widgets">
        <div className="widgets-head">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArtc('Elon Musk has create the dogecoin','Top News - 15788 readers')}
        {newsArtc('Windows 11 is available now !','Top News - 10788 readers')}
        {newsArtc('React is the most popular web framework','Programming News - 18398 readers')}
        {newsArtc('New Iphone 13 coming soon','Phones News - 23668 readers')}
        {newsArtc('League Of Legends is the most popular Esports game','Gaming News - 9772 readers')}
    </div> 
    );
}
 
export default Widgets;