import BookCardPreview from "./book-card-preview";
import CreateTemplateData from "../data";

import './book-card-container.css';

export default function BookCardContainer({direction}){

  const templateData = CreateTemplateData();
  const containerName = direction + '-container';

  return(
    <div className={containerName}>
      {templateData.map((book) => {
        return <BookCardPreview 
          subject={book.subject} 
          classNumber={book.classNumber}
          title={book.title}
          date={book.date}
          description={book.description}
          condition={book.condition}
          imageName={book.imageName}
          />;
      })}
    </div>
  )
}