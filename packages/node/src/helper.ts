import { EventType, FieldDefinition, Type, Value, Record } from "../gen/types_pb";

export interface DozerQuery {
  orderBy?: null | OrderByParam
  limit?: number,
  skip?: number,
  filter?: DozerFilter
}

export interface OrderByParam {
  [column: string]: Order
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc'
}

export interface DozerFilter {
  [column: string]: Filter | string | number | null
}

export type Filter = {
  [operator in FilterOperator]?: string | number | null;
};

export enum FilterOperator {
  LT = '$lt',
  LTE = '$lte',
  EQ = '$eq',
  GT = '$gt',
  GTE = '$gte',
  CONTAINS = '$contains',
  MATCHES_ANY = '$matches_any',
  MATCHES_ALL = '$matches_all',
}

export type DozerRecord<T> = T & {
  __dozer_record_id: number;
  __dozer_record_version: number;
}

export interface DozerOnEventOption {
  endpoint: string;
  eventType?: EventType;
  filter?: DozerFilter;
}

export class QueryHelper {
  static convertFilter(filter: DozerFilter): string {
    return JSON.stringify(filter);
  }
  static convertSchema(query: DozerQuery): string {
    let jsonObject = {};
    if (query.filter) {
      jsonObject['$filter'] = query.filter;
    }
    if (query.limit) {
      jsonObject['$limit'] = query.limit;
    }
    if (query.skip) {
      jsonObject['$skip'] = query.skip;
    }
    if (query.orderBy) {
      jsonObject['$order_by'] = query.orderBy;
    }

    return JSON.stringify(jsonObject);
  }
}
function convertValue(typ: Type, object: Value): any {
  switch (typ) {
    case Type.UINT:
      return object.getUintValue();
    case Type.INT:
      return object.getIntValue();
    case Type.FLOAT:
      return object.getFloatValue();
    case Type.BOOLEAN:
      return object.getBoolValue();
    case Type.STRING:
      return object.getStringValue();
    case Type.TEXT:
      return object.getStringValue();
    case Type.BINARY:
      return object.getBytesValue();
    case Type.DECIMAL:
      return object.getDecimalValue();
    case Type.TIMESTAMP:
      return object.getTimestampValue();
    case Type.DATE:
      return object.getDateValue();
    case Type.JSON:
      return object.getJsonValue()?.toJavaScript();
    case Type.POINT:
      return object.getPointValue();
  }

  return undefined;
}

export class RecordMapper {
  private fields: FieldDefinition.AsObject[];

  constructor(fields: FieldDefinition.AsObject[]) {
    this.fields = fields;
  }

  mapRecord<T>(record: Record): DozerRecord<T> {
    const result = {
      __dozer_record_id: record.getId(),
      __dozer_record_version: record.getVersion(),
    };
    const values = record.getValuesList();
    values.forEach((_, index) => {
      result[this.fields[index].name] = convertValue(this.fields[index].typ, values[index]);
    });
    return result as DozerRecord<T>;
  }
}
