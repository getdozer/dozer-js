import { types_pb } from "@dozerjs/dozer";
import { useDozerEvent, useDozerQuery } from "@dozerjs/dozer-react";
import { Box } from "@mui/material";
import { ClientReadableStream } from "grpc-web";
import { DataTable } from "../components/DataTable";
import { EndpointsContext } from "../contexts/Endpoints";
import { useContext } from "react";

function Records(props: {
  endpoint: string;
  stream?: ClientReadableStream<types_pb.Operation>,
}) {
  const { fields, records, error, connect } = useDozerQuery(props.endpoint, {});
  connect(props.stream);
  return <DataTable fields={fields} records={records} error={error}></DataTable>;
}

export function QueryEvent() {
  const options = useContext(EndpointsContext);

  const { stream } = useDozerEvent(options);

  return options.map(option => (
    <Box key={option.endpoint}>
      <h3>{option.endpoint}</h3>
      <Records endpoint={option.endpoint} stream={stream} />
    </Box>
  ));
}
