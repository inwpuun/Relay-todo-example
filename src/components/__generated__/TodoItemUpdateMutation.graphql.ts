/**
 * @generated SignedSource<<e5ef4d23016cde68243be547f46eef07>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTodoInput = {
  clearDescription?: boolean | null;
  completed?: boolean | null;
  description?: string | null;
  name?: string | null;
};
export type TodoItemUpdateMutation$variables = {
  id: string;
  input: UpdateTodoInput;
};
export type TodoItemUpdateMutation$data = {
  readonly updateTodo: {
    readonly completed: boolean;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type TodoItemUpdateMutation = {
  response: TodoItemUpdateMutation$data;
  variables: TodoItemUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "updateTodo",
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
    "name": "TodoItemUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7d8b06347b4747fe9b8369e179aa910c",
    "id": null,
    "metadata": {},
    "name": "TodoItemUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemUpdateMutation(\n  $id: ID!\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input, id: $id) {\n    id\n    name\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "c8d61772b6fe471b80a7e303d55895b0";

export default node;
