import { types_pb } from "@dozerjs/dozer";
import { createContext } from "react";

export const EndpointsContext = createContext([
  {
    endpoint: 'airports_count',
    eventType: types_pb.EventType.ALL,
  },
  {
    endpoint: 'departures_count',
    eventType: types_pb.EventType.ALL,
  },
  {
    endpoint: 'airports',
    eventType: types_pb.EventType.ALL,
  },
]);
