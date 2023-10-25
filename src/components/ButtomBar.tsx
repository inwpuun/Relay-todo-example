import { useMutation } from 'react-relay';
import { graphql } from 'relay-runtime';

type Props = {todoids: (string | JSX.Element)[],todoCount: number, onLoadNext: () => void, hasNext: boolean, reFresh: () => void}

const ButtomBarDeleteMutation = graphql`
  mutation ButtomBarDeleteMutation(
    $id: ID!,
  ) {
    deleteTodo(id: $id) 
  }
`;

export default function ButtomBar({todoids, todoCount, onLoadNext, hasNext, reFresh}: Props) {
  const [commitDeleteMutation] = useMutation(ButtomBarDeleteMutation);

  function onDelete() {
    console.log("deleteTodo");
    for (const element of todoids) {
      if (element !== <div></div>) {
        commitDeleteMutation({
          variables: {
            id: element
          },
        })
      }
    }
    reFresh();
  }

  return (
    <div className='buttom-bar'>
        <div className="items-left">
            <p>{todoCount} items left</p>
        </div>
        {hasNext && <div className="next" onClick={() => onLoadNext()}>Next</div>}
        <div className="clear-completed" onClick={() => onDelete()} >Clear Completed</div>
    </div>
  )
}