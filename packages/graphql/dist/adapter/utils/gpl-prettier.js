"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-nocheck
const parser_mjs_1 = require("graphql/language/parser.mjs");
const printer_mjs_1 = require("graphql/language/printer.mjs");
const kinds_mjs_1 = require("graphql/language/kinds.mjs");
const isSelectionsEmpty = (node) => !node.selectionSet || !node.selectionSet.selections || node.selectionSet.selections.length === 0;
const removeDuplicatedLeafNodes = (sourceNode) => {
    if (isSelectionsEmpty(sourceNode)) {
        return sourceNode;
    }
    const newNode = { ...sourceNode };
    newNode.selectionSet.selections = newNode.selectionSet.selections
        .filter((selection, index, self) => selection.kind !== kinds_mjs_1.Kind.FIELD ||
        selection.selectionSet ||
        index ===
            self.findIndex((selection2) => selection2.kind === kinds_mjs_1.Kind.FIELD &&
                selection.name.value === selection2.name.value))
        .map(removeDuplicatedLeafNodes);
    return newNode;
};
const mergeDuplicatedNotLeafNodes = (sourceNode) => {
    if (isSelectionsEmpty(sourceNode)) {
        return sourceNode;
    }
    const newNode = { ...sourceNode };
    if (sourceNode.selectionSet.selections.length <= 2) {
        newNode.selectionSet.selections = newNode.selectionSet.selections.map(mergeDuplicatedNotLeafNodes);
        return newNode;
    }
    let nodesToMerge = [];
    const findIndex = (node1, node2) => node1.kind === node2.kind &&
        node1.name.value === node2.name.value &&
        ((!node1.alias && !node2.alias) || node1.alias.value === node2.alias.value);
    newNode.selectionSet.selections = newNode.selectionSet.selections.filter((selection, index, self) => {
        if (selection.kind !== kinds_mjs_1.Kind.FIELD) {
            return true;
        }
        if (!selection.selectionSet) {
            return true;
        }
        if (index === self.findIndex((selection2) => findIndex(selection, selection2))) {
            return true;
        }
        nodesToMerge = [...nodesToMerge, selection];
        return false;
    });
    nodesToMerge.forEach((node) => {
        const index = newNode.selectionSet.selections.findIndex((selection) => findIndex(selection, node));
        newNode.selectionSet.selections[index].selectionSet.selections = [
            ...newNode.selectionSet.selections[index].selectionSet.selections,
            ...node.selectionSet.selections,
        ];
    });
    newNode.selectionSet.selections = newNode.selectionSet.selections.map(mergeDuplicatedNotLeafNodes);
    return newNode;
};
const replaceFragments = (sourceNode, fragments) => {
    if (isSelectionsEmpty(sourceNode)) {
        return sourceNode;
    }
    const newNode = { ...sourceNode };
    let foundFragments = [];
    newNode.selectionSet.selections = newNode.selectionSet.selections.filter((selection) => {
        if (selection.kind !== kinds_mjs_1.Kind.FRAGMENT_SPREAD) {
            return true;
        }
        if (!foundFragments.find((fragment) => fragment.name.value === selection.name.value)) {
            const fragment = fragments.find((fragment) => fragment.name.value === selection.name.value);
            if (!fragment) {
                throw Error(`Found usage of unknown fragment ${selection.name.value}`);
            }
            foundFragments = [...foundFragments, fragment];
        }
        return false;
    });
    newNode.selectionSet.selections = [
        ...newNode.selectionSet.selections,
        ...foundFragments.reduce((acc, fragment) => [...fragment.selectionSet.selections, ...acc], []),
    ];
    newNode.selectionSet.selections = newNode.selectionSet.selections.map((selection) => replaceFragments(selection, fragments));
    return newNode;
};
const prettify = (source, noDuplicates = true) => {
    const document = (0, parser_mjs_1.parse)(source);
    const fragments = document.definitions
        .filter((node) => node.kind === kinds_mjs_1.Kind.FRAGMENT_DEFINITION)
        .map((node, _, self) => replaceFragments(node, self));
    return document.definitions
        .filter((node) => node.kind === kinds_mjs_1.Kind.OPERATION_DEFINITION)
        .map((operationNode) => {
        let newOperationNode = { ...operationNode };
        newOperationNode.selectionSet.selections = newOperationNode.selectionSet.selections.map((selection) => replaceFragments(selection, fragments));
        if (noDuplicates) {
            newOperationNode.selectionSet.selections = newOperationNode.selectionSet.selections.map((selection) => removeDuplicatedLeafNodes(mergeDuplicatedNotLeafNodes(selection)));
        }
        return newOperationNode;
    })
        .map(printer_mjs_1.print)
        .join('\n');
};
exports.default = prettify;
