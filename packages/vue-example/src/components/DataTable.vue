<script setup lang="ts">
import { DozerRecord, types_pb } from "@dozerjs/dozer";
import ErrorMessage from "./ErrorMessage.vue";

const { fields, records, error } = defineProps<{
  fields: types_pb.FieldDefinition[];
  records: DozerRecord<any>[];
  error?: Error;
}>();

</script>

<template>
  <ErrorMessage v-if="error" :error="error"/>
  <v-table theme="dark" :height="500" fixed-header>
    <thead>
      <tr>
        <th v-for="f in fields" :key="f.getName()">
          {{ f.getName() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in records" :key="r.__dozer_record_id">
        <td v-for="f in fields" :key="f.getName()">
          {{
            f.getTyp() === types_pb.Type.POINT
              ? `${r[f.getName()].getX()}, ${r[f.getName()].getY()}`
              : (
                f.getName() === 'start'
                  ? `${r[f.getName()]}:00 to ${r[f.getName()] + 4}:00 `
                  : r[f.getName()]
              )
          }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
