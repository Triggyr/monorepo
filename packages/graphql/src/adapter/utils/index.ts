import gqlPrettier from './gpl-prettier';

export const prettyGql = (gql: string): string => gqlPrettier(gql);

export const logger = (d: any) =>
   console.dir(d, {
      depth: null,
   });

const set = (o: any, path: string, v: any): void => {
   const pathParts = path.split('.');
   let iterator = o;

   pathParts.forEach((p, i) => {
      if (!iterator[p]) iterator[p] = {};
      if (i === pathParts.length - 1) iterator[p] = v;

      iterator = iterator[p];
   });
};

export const toPayload = (d: any): string => JSON.stringify(d).replace(/"([^"]+)":/g, '$1:');

export const resolveFields = (fields: string[]): string => {
   const fieldsMap = fields.reduce((acc, v) => {
      const cpy = { ...acc };
      set(cpy, v, true);
      return cpy;
   }, {});

   const resolveFieldsMap = (f: any): string => {
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

export const toEnumPayload = (d: any): string =>
   JSON.stringify(d)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, '');
