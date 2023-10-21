import { DozerRecord, types_pb } from "@dozerjs/dozer";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { forwardRef } from "react";
import { TableComponents, TableVirtuoso } from "react-virtuoso";
import { ErrorMessage } from "./ErrorMessage";

export function DataTable<T>(props: {
  fields?: types_pb.FieldDefinition[];
  records?: DozerRecord<T>[];
  error?: Error;
}) {
  const { fields, records, error } = props;

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const VirtuosoTableComponents: TableComponents<object> = {
    Table: (props) => (
      <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead,
    TableBody: forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableBody {...props} ref={ref} />
    )),
    TableRow: ({ item: _item, ...props }) => <TableRow {...props}>
      {fields?.map((field: types_pb.FieldDefinition) => {
        let val = (_item as any)[field.getName()]
        if (field.getTyp() === types_pb.Type.JSON) {
          val = JSON.stringify(val);
        } else {
          val = val?.toString()
        }
        return (<TableCell component="th" scope="row" key={field.getName()}>
          {val}
        </TableCell>)
      })}
    </TableRow>,

  };

  function FixedHeaderContent() {
    return (
      <TableRow>
        {fields?.map((column: types_pb.FieldDefinition) => (
          <TableCell
            key={column.getName()}
            variant="head"
            sx={{
              backgroundColor: 'background.paper',
            }}
          >
            {column.getName()}
          </TableCell>
        ))}
      </TableRow>
    );
  }

  function RowContent(_index: number, row: any) {
    return (
      <>
        {fields?.map((column: types_pb.FieldDefinition) => (
          <TableCell key={column.getName()}>
            <>{row[column.getName()]}</>
          </TableCell>
        ))}
      </>
    );
  }

  return (
    <Paper sx={{ height: '500px' }}>
      <TableVirtuoso
        data={records}
        components={VirtuosoTableComponents}
        fixedHeaderContent={FixedHeaderContent}
        itemContent={RowContent}
      />
    </Paper>
  )
}
