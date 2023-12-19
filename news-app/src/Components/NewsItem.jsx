import PropTypes from 'prop-types';
import Image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 pyx-2" style={{maxWidth: "360px"}}>
      <img src={src ? src : Image} style={{height: "200px", width:"345px", alignItems:"center"}} className="card-img-top" alt="..." />
      <div className="card-body mr-3">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ? description.slice(0,90) : "News is a current event. It is information about something that just happened."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  src: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default NewsItem;
