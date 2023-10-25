/**
 * @generated SignedSource<<828b19c2eeec117d497ce005178a97ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoItemDeleteMutation$variables = {
  id: string;
};
export type TodoItemDeleteMutation$data = {
  readonly deleteTodo: boolean;
};
export type TodoItemDeleteMutation = {
  response: TodoItemDeleteMutation$data;
  variables: TodoItemDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
      }
    ],
    "kind": "ScalarField",
    "name": "deleteTodo",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c6591c76632806f38420b3a7c33b5239",
    "id": null,
    "metadata": {},
    "name": "TodoItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoItemDeleteMutation(\n  $id: ID!\n) {\n  deleteTodo(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "a42d49591ce07de3b42ebf61ac977dfe";

export default node;
