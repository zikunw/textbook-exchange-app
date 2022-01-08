import BookCondition from "./book-condition"

export default function BookCardPreview(props) {
  const className = props.subject + " " + props.classNumber

  return (
    <div
      style={{
        border:'1px black solid',
        width:'30%',
        height: 'auto',
        padding: '10px',
        margin: '10px'
      }}
    >
      <h2>{className}: {props.title}</h2>
      <p>{props.date}</p>
      <p>{props.description}</p>
      <BookCondition condition={props.condition} />
    </div>
  )
}