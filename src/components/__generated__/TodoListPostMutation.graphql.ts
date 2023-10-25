/**
 * @generated SignedSource<<f4c55b971e0d08aa38c1236c1624debe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoInput = {
  completed?: boolean | null;
  description?: string | null;
  name: string;
};
export type TodoListPostMutation$variables = {
  input: CreateTodoInput;
};
export type TodoListPostMutation$data = {
  readonly createTodo: {
    readonly completed: boolean;
    readonly description: string | null;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type TodoListPostMutation = {
  response: TodoListPostMutation$data;
  variables: TodoListPostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListPostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListPostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "19a2f6d85edab114359f4b15411b16fc",
    "id": null,
    "metadata": {},
    "name": "TodoListPostMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListPostMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    name\n    description\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "fda61c3130215b4dc2f2205c829fee3b";

export default node;
