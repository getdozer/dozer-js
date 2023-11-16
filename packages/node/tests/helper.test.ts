import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";
import { PointType, Record, RustDecimal, Type, Value } from "../gen/types_pb";
import { FilterOperator, Order, QueryHelper, RecordMapper, convertValue } from "../src/helper";
import { Value as StructValue } from "google-protobuf/google/protobuf/struct_pb";

describe('QueryHelper', () => {
  it('should convert limit correctly', () => {
    let query = {
      limit: 100
    };
    expect(QueryHelper.convertSchema(query)).toBe('{"$limit":100}');
  });
  it('should convert skip correctly', () => {
    let query = {
      skip: 100
    };
    expect(QueryHelper.convertSchema(query)).toBe('{"$skip":100}');
  });
  it('should convert filter correctly', () => {
    let query = {
      filter: {
        id: {
          [FilterOperator.GT]: 100
        }
      }
    };
    expect(QueryHelper.convertSchema(query)).toBe('{"$filter":{"id":{"$gt":100}}}');
    expect(QueryHelper.convertFilter(query.filter)).toBe('{"id":{"$gt":100}}');
  });
  it('should order by filter correctly', () => {
    let query = {
      orderBy: {
        id: Order.ASC
      }
    };
    expect(QueryHelper.convertSchema(query)).toBe('{"$order_by":{"id":"asc"}}');
  });

  it('should convert query with all parameters correctly', () => {
    let query = {
      limit: 100,
      skip: 20,
      orderBy: {
        id: Order.ASC
      },
      filter: {
        id: {
          [FilterOperator.GT]: 100
        }
      }
    };
    expect(QueryHelper.convertSchema(query)).toBe(
      '{"$filter":{"id":{"$gt":100}},"$limit":100,"$skip":20,"$order_by":{"id":"asc"}}'
    );
  });
});


describe('RecordMapper', () => {
  it('should mapper record correct', () => {
    const fields = [{ name: 'title', typ: Type.STRING, nullable: false }];
    const record = new Record();
    record.setId(1);
    record.setVersion(1);
    record.addValues(new Value().setStringValue('test-title'));
    const mapper = new RecordMapper(fields);
    const result = mapper.mapRecord(record);
    expect(result).toStrictEqual({
      __dozer_record_id: 1,
      __dozer_record_version: 1,
      title: 'test-title',
    });
  });
});


describe('convertValue', () => {
  it ('should conver correct', () => {
    const value = new Value();
    value.setUintValue(1);
    value.setIntValue(1);
    value.setFloatValue(1.2);
    value.setBoolValue(true);
    value.setStringValue('test-title');
    value.setBytesValue(new Uint8Array());
    value.setDecimalValue(new RustDecimal());
    value.setTimestampValue(new Timestamp());
    value.setDateValue(new Date().toISOString());
    value.setJsonValue(new StructValue().setBoolValue(false));
    value.setPointValue(new PointType());

    jest.spyOn(Value.prototype, 'getUintValue');
    convertValue(Type.UINT, value);
    expect(Value.prototype.getUintValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getIntValue');
    convertValue(Type.INT, value);
    expect(Value.prototype.getIntValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getFloatValue');
    convertValue(Type.FLOAT, value);
    expect(Value.prototype.getFloatValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getBoolValue');
    convertValue(Type.BOOLEAN, value);
    expect(Value.prototype.getBoolValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getStringValue');
    convertValue(Type.STRING, value);
    expect(Value.prototype.getStringValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getStringValue');
    convertValue(Type.TEXT, value);
    expect(Value.prototype.getStringValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getBytesValue');
    convertValue(Type.BINARY, value);
    expect(Value.prototype.getBytesValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getDecimalValue');
    convertValue(Type.DECIMAL, value);
    expect(Value.prototype.getDecimalValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getTimestampValue');
    convertValue(Type.TIMESTAMP, value);
    expect(Value.prototype.getTimestampValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getDateValue');
    convertValue(Type.DATE, value);
    expect(Value.prototype.getDateValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getJsonValue');
    convertValue(Type.JSON, value);
    expect(Value.prototype.getJsonValue).toBeCalled();

    jest.spyOn(Value.prototype, 'getPointValue');
    convertValue(Type.POINT, value);
    expect(Value.prototype.getPointValue).toBeCalled();
  })
});
