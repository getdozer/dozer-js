import { DozerRecord, types_pb } from "@dozerjs/dozer";
import { fieldsMockData, recordMockData } from "@dozerjs/dozer/tests/__mock__/common.data";
import { merge } from "../src/util";
import { RecordMapper } from "@dozerjs/dozer/lib/cjs/helper";

const { FieldDefinition, Operation, OperationType, Record, Value } = types_pb;

describe('util.merge', () => {

  const fields = fieldsMockData.map((data) => {
    const field = new FieldDefinition();
    field.setTyp(data.typ);
    field.setName(data.name);
    field.setNullable(data.nullable);
    return field;
  });
  const mapper = new RecordMapper(fields);
  const records: DozerRecord<any> = recordMockData.map((data) => {
    const record = convertDataToRecord(data);
    return mapper.mapRecord(record);
  });

  let prev: DozerRecord<any>[];
  beforeEach(() => {
    prev = [...records];
  });

  it('unknow type should ignore', () => {
    const operation = new Operation();
    operation.setTyp(-1 as types_pb.OperationType);
    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });


  it('insert should ignore if invalid', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.INSERT);
    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });

  it('insert should ignore if exists', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.INSERT);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    operation.setNew(record);

    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });

  it('insert should correct if not exist', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.INSERT);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    record.setId(Infinity);
    operation.setNew(record);

    const expectLength = prev.length + 1;
    const result = merge(prev, operation, fields);
    expect(result?.length).toBe(expectLength);
  });


  it('delete should ignore if invalid', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.DELETE);
    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });


  it('delete should ignore if not exists', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.DELETE);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    record.setId(Infinity)
    operation.setOld(record);

    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });

  it('delete should correct if exist', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.DELETE);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    operation.setOld(record);

    const expectLength = prev.length - 1;
    const result = merge(prev, operation, fields);
    expect(result?.length).toBe(expectLength);
  });


  it('update should ignore if invalid', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.UPDATE);
    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });

  it('update should ignore if version is lower', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.UPDATE);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    record.setVersion(record.getVersion() - 1);
    operation.setNew(record);

    const result = merge(prev, operation, fields);
    expect(result).toBeUndefined();
  });

  it('update should convert to insert if not exists', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.UPDATE);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    record.setId(Infinity);
    operation.setNew(record);

    const expectLength = prev.length + 1;
    const result = merge(prev, operation, fields);
    expect(result?.length).toBe(expectLength);
  });

  it('update should correct if exists', () => {
    const operation = new Operation();
    operation.setTyp(OperationType.UPDATE);

    const data = recordMockData[0];
    const record = convertDataToRecord(data);
    record.setVersion(record.getVersion() + 1)
    operation.setNew(record);

    const expectLength = prev.length;
    const result = merge(prev, operation, fields);
    expect(result?.length).toBe(expectLength);
  });
});


function convertDataToRecord(data: {
  id: number;
  version: number;
  values: { [key: string]: any }[];
}) {
  const record = new Record();
  record.setId(data.id);
  record.setVersion(data.version);

  data.values.forEach((item) => {
    const value = new Value();
    for (let key in item) {
      const method = 'set' + key[0].toUpperCase() + key.slice(1);
      Object.prototype.hasOwnProperty.call(value, method) && value[method](item[key]);
    }
    record.addValues(value);
  });

  return record;
}
