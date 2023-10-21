import { useDozerEndpoints } from "@dozerjs/dozer-react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { DataTable } from "../components/DataTable";
import { EndpointsContext } from "../contexts/Endpoints";

export function Endpoints() {
  const options = useContext(EndpointsContext);

  const data = useDozerEndpoints(options);

  return options.map((option, index) => (
    <Box key={option.endpoint}>
      <h3>{option.endpoint}</h3>
      <DataTable {...data[index]} />
    </Box>
  ));
}
