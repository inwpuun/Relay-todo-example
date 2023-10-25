/**
 * @generated SignedSource<<815dc4e3e9d111b5bd0a8f247fe68758>>
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
export type TodoAddBarPostMutation$variables = {
  input: CreateTodoInput;
};
export type TodoAddBarPostMutation$data = {
  readonly createTodo: {
    readonly completed: boolean;
    readonly description: string | null;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type TodoAddBarPostMutation = {
  response: TodoAddBarPostMutation$data;
  variables: TodoAddBarPostMutation$variables;
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
    "name": "TodoAddBarPostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoAddBarPostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f8a3e75898e22f4716ee2a723aeaae9",
    "id": null,
    "metadata": {},
    "name": "TodoAddBarPostMutation",
    "operationKind": "mutation",
    "text": "mutation TodoAddBarPostMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    name\n    description\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "eabc6f53ae6b271f30d87e97eb0a394c";

export default node;
