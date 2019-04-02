export const enum FilterOperators {
  EQUALS = "=",
  DOESNOTEQUAL = "<>",
  LESSTHAN = "<",
  GREATERTHAN = ">",
  CONTAINS="contains",
  NOTCONTAINS="notcontains",
  STARTSWITH="startswith",
  ENDSWITH="endsdwith",
  LESSTHANOREQUALTO = "<=",
  GREATERTHANOREQUALTO = ">="
}
export class Filter {
  field: string;
  operation: string;
  value: any;
}
export function isNestedFilterArr(filterArr: any) {
  return filterArr.includes("and") ? true : false;
}
export function normalizeFilter(filters: any) {
  console.debug(filters);

  let filteredArrValues = [];
  if (!isNestedFilterArr(filters)) {
    const filter: Filter = {
      field: filters[0],
      operation: filters[1],
      value: filters[2]
    };
    filteredArrValues = [...filteredArrValues, filter];
  } else {
    console.debug("diff dimension baby");
    for (let i = 0; i < filters.length; i++) {
      if (Array.isArray(filters[i])) {
        const filter: Filter = {
          field: filters[i][0],
          operation: filters[i][1],
          value: filters[i][2]
        };
        const transformedFilter = transFormFilter(filters[i]);
        filteredArrValues = [...filteredArrValues, transformedFilter];
      }
    }
  }
  console.debug(filteredArrValues);
}

export function transFormFilter(filter: Filter) {
  switch (filter.operation) {
    case FilterOperators.EQUALS: {
      return filter;
    }
    case FilterOperators.DOESNOTEQUAL: {
      return filter;
    }
    case FilterOperators.LESSTHAN: {
      return filter;
    }
    case FilterOperators.GREATERTHAN: {
      return filter;
    }
    case FilterOperators.LESSTHANOREQUALTO: {
      return filter;
    }
    default:
      return filter;
  }
}
