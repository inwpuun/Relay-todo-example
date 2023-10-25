import { useState } from 'react'
import TextComposer from './TextComposer'
import { graphql, useMutation } from 'react-relay';

type Props = {reFresh: () => void}


const TodoAddBarPostMutation = graphql`
  mutation TodoAddBarPostMutation(
    $input: CreateTodoInput!,
  ) {
    createTodo(input: $input) {
      id
      name
      description
      completed
    }
  }
`;

export default function TodoAddBar({ reFresh }: Props) {

  const [text, setText] = useState('')
  const [commitMutation] = useMutation(TodoAddBarPostMutation);

  function onPost() {
    console.log("onPost");
    setText(''); // Reset the UI
    commitMutation({
      variables: {
        input: { "name": text, "completed": false }
      },
    })
    reFresh();
  }
  return (
    <form>
        <div className="circle" />
        <TextComposer text={text} onChange={setText} onReturn={onPost} />
    </form>
  )
}