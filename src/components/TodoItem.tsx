import { graphql } from 'relay-runtime';
import { useFragment, useMutation } from 'react-relay';
import type {TodoItemFragment$key} from './__generated__/TodoItemFragment.graphql';

type Props = {todo: TodoItemFragment$key, reFresh: () => void}

export const TodoItemFragment = graphql`
  fragment TodoItemFragment on Todo {
    id
    name
    completed
  }
`;

const TodoItemDeleteMutation = graphql`
  mutation TodoItemDeleteMutation(
    $id: ID!,
  ) {
    deleteTodo(id: $id) 
  }
`;

const TodoItemUpdateMutation = graphql`
  mutation TodoItemUpdateMutation(
    $id: ID!,
    $input: UpdateTodoInput!
  ) {
    updateTodo(input: $input, id: $id) {
      id
      name
      completed
    }
  }
`;

export default function TodoItem({ todo, reFresh }: Props) {
  const data = useFragment(TodoItemFragment, todo);
  const [commitDeleteMutation, isMutationDeleteInFlight] = useMutation(TodoItemDeleteMutation);
  const [commitUpdateMutation, isMutationUpdateInFlight] = useMutation(TodoItemUpdateMutation);

  function onDelete() {
    console.log("deleteTodo");
    commitDeleteMutation({
      variables: {
        id: data.id
      },
    })
    reFresh();
  }

  function onUpdate() {
    console.log("updateTodo");
    commitUpdateMutation({
      variables: {
        id: data.id,
        input: {
          name: data.name,
          completed: !data.completed
        }
      },
    })
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => onUpdate()}
        />
        <span className='checkbox' />
        <p>{data.name}</p>
      </label>
      <button onClick={() => onDelete()} className="btn-danger" />
    </li>
  )
}