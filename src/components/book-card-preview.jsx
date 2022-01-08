import BookCondition from "./book-condition";
import './book-card-preview.css';

export default function BookCardPreview(props) {
  const className = props.subject + " " + props.classNumber;

  return (
    <div className="card">
      <div className="img-container">
        <img src={require(`../images/${props.imageName}`)} alt={props.title}></img>
      </div>
      <div className="card-description">
        <div style={{clear: 'both'}}>
          <p className="text-classname">{className}</p>
          <p className="text-date">{props.date}</p>
        </div>
        <div style={{clear: 'both'}}></div>
        <p className="text-title">{props.title}</p>
        <p className="text-description">{props.description}</p>
      </div>
      <div className="condition-container">
        <BookCondition condition={props.condition} />
      </div>
    </div>
  )
}