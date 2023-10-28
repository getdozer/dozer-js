import { types_pb } from "@dozerjs/dozer";
import { useDozerCount, useDozerEvent } from "@dozerjs/dozer-react";
import { Box } from "@mui/material";
import { ErrorMessage } from "../components/ErrorMessage";
import { ClientReadableStream } from "grpc-web";
import { EndpointsContext } from "../contexts/Endpoints";
import { useContext } from "react";

function Records(props: {
  endpoint: string;
  stream?: ClientReadableStream<types_pb.Operation>,
}) {
  const { count, error, connect } = useDozerCount(props.endpoint);
  connect(props.stream)
  if (error) {
    return <ErrorMessage error={error} />
  }

  return <Box>{count}</Box>;
}

export function CountEvent() {
  const options = useContext(EndpointsContext);

  const { stream } = useDozerEvent(options);

  return options.map(option => (
    <Box key={option.endpoint}>
      <h3>{option.endpoint}</h3>
      <Records endpoint={option.endpoint} stream={stream} />
    </Box>
  ));
}
