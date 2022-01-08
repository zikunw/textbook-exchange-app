const templateData = [
  {
    college: 'CAS',
    subject: 'CS',
    classNumber: '111',
    title: 'Introduction to Computer Science',
    date: 'Jan 3, 2022',
    description: 'An introductory book for computer science entry level classes.',
    condition: 1, // A scale from 1 to 5, as 1 is the newest.
    imageName: 'image2.jpg'
  },
  {
    college: 'CAS',
    subject: 'CS',
    classNumber: '112',
    title: 'The Gifts of Imperfection',
    date: 'Jan 1, 2022',
    description: 'A book about the magic of pain enduring and self control.',
    condition: 5, // A scale from 1 to 5, as 1 is the newest.
    imageName: 'image1.jpg'
  },
  {
    college: 'CGS',
    subject: 'HU',
    classNumber: '103',
    title: 'Plato',
    date: 'Jan 1, 2022',
    description: 'Just like what the title said, a book about plato.',
    condition: 3, // A scale from 1 to 5, as 1 is the newest.
    imageName: 'image3.jpeg'
  },
]

export default function CreateTemplateData(){
  return templateData;
}