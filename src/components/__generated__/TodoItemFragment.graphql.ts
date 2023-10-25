/**
 * @generated SignedSource<<bdb61a335495bfde797f2468d61d4b5f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItemFragment$data = {
  readonly completed: boolean;
  readonly id: string;
  readonly name: string;
  readonly " $fragmentType": "TodoItemFragment";
};
export type TodoItemFragment$key = {
  readonly " $data"?: TodoItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemFragment",
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
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "c774cca280d5540b297f4342896bee24";

export default node;
