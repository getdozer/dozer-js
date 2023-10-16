import { types_pb } from "@dozerjs/dozer";
import { useDozerQuery } from "@dozerjs/dozer-react";
import { Alert, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { ClientReadableStream } from "grpc-web";
import { forwardRef } from "react";
import { TableComponents, TableVirtuoso } from "react-virtuoso";

export function DozerTable(props: {
  stream?: ClientReadableStream<types_pb.Operation>;
  endpoint: string;
}) {
  const { fields, records, error, connect } = useDozerQuery(props.endpoint, {});
  props.stream && connect(props.stream);

  if (error) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '500px',
      }}>
        <Alert severity="error">{error.message}</Alert>
      </Box>
    )
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
        {fields.map((column: types_pb.FieldDefinition) => (
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
        {fields.map((column: types_pb.FieldDefinition) => (
          <TableCell key={column.getName()}
          >
            {row[column.getName()]}
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
