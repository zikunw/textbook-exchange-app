/*
 * The book condition is rated on a scale from 1 to 5:
 * 1 - New
 * 2 - Half new
 * 3 - Used
 * 4 - Slightly damaged
 * 5 - Damaged
 */

const conditionChart = [
  'New',
  'Half New',
  'Used',
  'Slightly Damaged',
  'Damaged'
]

export default function BookCondition({condition}){
  const conditionDescription = conditionChart[condition - 1];
  return (
    //TODO: I want really fancy display of the condition,
    //      like a colored bar with different color showing the
    //      conditions.
    <p 
      style={{
        margin: '0', 
        padding: '2px', 
        textAlign: 'center',
        fontSize: '12px'
      }}
    >
      Condition: {conditionDescription}({condition})
    </p>
  )
}