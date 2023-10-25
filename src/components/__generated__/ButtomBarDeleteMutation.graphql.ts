/**
 * @generated SignedSource<<c4ec5b010d2a2e977b4ddf96aa2159f9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ButtomBarDeleteMutation$variables = {
  id: string;
};
export type ButtomBarDeleteMutation$data = {
  readonly deleteTodo: boolean;
};
export type ButtomBarDeleteMutation = {
  response: ButtomBarDeleteMutation$data;
  variables: ButtomBarDeleteMutation$variables;
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
    "name": "ButtomBarDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ButtomBarDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e0c87a6afb45dba6ca3905af21777674",
    "id": null,
    "metadata": {},
    "name": "ButtomBarDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ButtomBarDeleteMutation(\n  $id: ID!\n) {\n  deleteTodo(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "b33d75a2480c03159f8a2edfb83227e0";

export default node;
