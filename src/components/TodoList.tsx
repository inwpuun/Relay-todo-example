import TodoItem from './TodoItem'
import ButtomBar from './ButtomBar'
import { graphql } from 'relay-runtime';
import { usePaginationFragment } from "react-relay";
import type {TodoListFragment$key} from './__generated__/TodoListFragment.graphql';
import { useTransition } from 'react';
import TodoAddBar from './TodoAddBar';

type Props = {todos: TodoListFragment$key}

const TodoListFragment = graphql`
  fragment TodoListFragment on Query 
    @refetchable(queryName: "TodoListRefetchQuery")
    @argumentDefinitions(
      cursor: { type: "Cursor", defaultValue: null }
      count: { type: "Int", defaultValue: 7 }
    ) {
    todos(after: $cursor, first: $count)
      @connection(key: "TodoListFragment_todos") {
      edges {
        node {
          id
          completed
          ...TodoItemFragment
        }
      }
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
      }
    }
  }
`;

export default function TodoList({todos}: Props) {
  const {data, loadNext, refetch} = usePaginationFragment(TodoListFragment, todos);
  const [, startTransition] = useTransition();

  const onLoadNext = () => {
    loadNext(7);
  };

  if (data.todos == null || data.todos.edges == null) {
    console.log("data.todos is null");
    return (<>hello</>);
  }

  const todoEdges = data.todos.edges;
  
  function reFresh() {
    startTransition(() => {
      refetch({}, {fetchPolicy: 'network-only'});
    });
  }

  const todoids = todoEdges.reduce(function(filtered, todo) {
    if (todo == null || todo.node == null) {
      return filtered;
    }
    if (todo.node.completed) {
       filtered.push(todo.node.id);
    }
    return filtered;
  }, ['']);

  return (
    <>
      <TodoAddBar reFresh={reFresh} />
      <ul className="todo_list">
        {todoEdges.length === 0 && <></>}
        {todoEdges.map((todo) => {
          if (todo == null || todo.node == null) {
            return (<>hello</>);
          }
          return (
            <TodoItem
              todo={todo.node}
              key={todo.node.id}
              reFresh={reFresh}
            />
          )
        })}
        {todoEdges.length != 0 && <ButtomBar 
        todoids={todoids} 
        todoCount={data.todos.totalCount} 
        onLoadNext={onLoadNext}  
        hasNext={data.todos.pageInfo.hasNextPage} 
        reFresh={reFresh} />}
      </ul>
    </>
  )
}