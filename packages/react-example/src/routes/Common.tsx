import { useDozerCount, useDozerQuery } from "@dozerjs/dozer-react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataTable } from "../components/DataTable";
import { EndpointsContext } from "../contexts/Endpoints";

function Count(props: {
  endpoint: string;
}) {
  const { count, error } = useDozerCount(props.endpoint);
  return error?.message ?? <Box>{count}</Box>;
}

function Records(props: {
  endpoint: string;
}) {
  const { fields, records, error } = useDozerQuery(props.endpoint);
  return <DataTable fields={fields} records={records} error={error}></DataTable>;
}

export function Common() {
  const options = useContext(EndpointsContext);

  return options.map(option => (
    <Box key={option.endpoint}>
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h3>{option.endpoint}</h3>
        <Count endpoint={option.endpoint} />
      </Box>
      <Records endpoint={option.endpoint} />
    </Box>
  ));
}
