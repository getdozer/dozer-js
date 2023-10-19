import { Operation, FieldDefinition, OperationType } from "@dozerjs/dozer/lib/esm/generated/protos/types_pb";
import { RecordMapper } from "@dozerjs/dozer/lib/esm/helper";
import { DozerRecord } from "@dozerjs/dozer/lib/esm/query_helper";

export function merge<T>(prev: DozerRecord<T>[], operation: Operation, fields: FieldDefinition[]) {
  const newRecord = operation.getNew();
  const oldRecord = operation.getOld();
  const mapper = new RecordMapper(fields);
  if (operation.getTyp() === OperationType.INSERT) {
    if (!newRecord) {
      return;
    }
    const index = prev.findIndex(record => record.__dozer_record_id === newRecord?.getId());
    // ignore if exists
    if (index !== -1) {
      return;
    }
    const newValue = mapper.mapRecord<T>(newRecord);
    return [...prev, newValue];
  } else if (operation.getTyp() === OperationType.DELETE) {
    if (!oldRecord) {
      return;
    }
    const index = prev.findIndex((record) => record.__dozer_record_id === oldRecord.getId());
    // ignore if not exists
    if (index === -1) {
      return;
    }
    prev.splice(index, 1);
    return [...prev];
  } else if (operation.getTyp() === OperationType.UPDATE) {
    if (!newRecord) {
      return;
    }
    const index = prev.findIndex((record) => record.__dozer_record_id === newRecord.getId());

    const newValue: any = mapper.mapRecord(newRecord);
    if (index === -1) {
      prev.push(newValue);
    } else {
      // ignore if version is lower
      if (newRecord.getVersion() < prev[index].__dozer_record_version) {
        return;
      }
      prev.splice(index, 1, newValue);
    }

    return [...prev];
  } else {
    return;
  }
}
