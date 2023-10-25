/**
 * @generated SignedSource<<b741e71c91149d0f1225cd8a72e89249>>
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
export type AppPostMutation$variables = {
  input: CreateTodoInput;
};
export type AppPostMutation$data = {
  readonly createTodo: {
    readonly completed: boolean;
    readonly description: string | null;
    readonly id: string;
    readonly name: string;
  } | null;
};
export type AppPostMutation = {
  response: AppPostMutation$data;
  variables: AppPostMutation$variables;
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
    "name": "AppPostMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppPostMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ac36ea4245c0aa145dcf44e44d3a3e09",
    "id": null,
    "metadata": {},
    "name": "AppPostMutation",
    "operationKind": "mutation",
    "text": "mutation AppPostMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    name\n    description\n    completed\n  }\n}\n"
  }
};
})();

(node as any).hash = "b20bd806504f7dce44c61ef500a0b4b2";

export default node;
