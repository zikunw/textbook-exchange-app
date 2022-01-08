import BookCardPreview from "./book-card-preview";
import CreateTemplateData from "../data";

export default function BookCardContainer(){

  const templateData = CreateTemplateData();

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      {templateData.map((book) => {
        return <BookCardPreview 
          subject={book.subject} 
          classNumber={book.classNumber}
          title={book.title}
          date={book.date}
          description={book.description}
          condition={book.condition}
          />;
      })}
    </div>
  )
}