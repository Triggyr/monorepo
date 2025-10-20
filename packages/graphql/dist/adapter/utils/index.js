"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEnumPayload = exports.resolveFields = exports.toPayload = exports.logger = exports.prettyGql = void 0;
const gpl_prettier_1 = __importDefault(require("./gpl-prettier"));
const prettyGql = (gql) => (0, gpl_prettier_1.default)(gql);
exports.prettyGql = prettyGql;
const logger = (d) => console.dir(d, {
    depth: null,
});
exports.logger = logger;
const set = (o, path, v) => {
    const pathParts = path.split('.');
    let iterator = o;
    pathParts.forEach((p, i) => {
        if (!iterator[p])
            iterator[p] = {};
        if (i === pathParts.length - 1)
            iterator[p] = v;
        iterator = iterator[p];
    });
};
const toPayload = (d) => JSON.stringify(d).replace(/"([^"]+)":/g, '$1:');
exports.toPayload = toPayload;
const resolveFields = (fields) => {
    const fieldsMap = fields.reduce((acc, v) => {
        const cpy = { ...acc };
        set(cpy, v, true);
        return cpy;
    }, {});
    const resolveFieldsMap = (f) => {
        let gql = '';
        Object.entries(f).forEach(([v, k]) => {
            if (k === true) {
                gql += ` ${v} `;
                return;
            }
            gql += ` ${v} { ${resolveFieldsMap(k)} } `;
        });
        return gql;
    };
    return resolveFieldsMap(fieldsMap);
};
exports.resolveFields = resolveFields;
const toEnumPayload = (d) => JSON.stringify(d)
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"/g, '');
exports.toEnumPayload = toEnumPayload;
