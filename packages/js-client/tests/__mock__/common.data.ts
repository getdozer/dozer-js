
export const fieldsMockData = [
  {
    "typ": 2,
    "name": "pickup_location",
    "nullable": true
  },
  {
    "typ": 2,
    "name": "dropoff_location",
    "nullable": true
  },
  {
    "typ": 2,
    "name": "total_trips",
    "nullable": false
  },
  {
    "typ": 2,
    "name": "min_trip_time",
    "nullable": true
  },
  {
    "typ": 2,
    "name": "max_trip_time",
    "nullable": true
  }
];

export const primaryIndexList = [0, 1];

export const recordMockData = [
  {
    "id": 1,
    "values": [
      {
        "intValue": 76
      },
      {
        "intValue": 76
      },
      {
        "intValue": 2353
      },
      {
        "intValue": 71
      },
      {
        "intValue": 4548
      }
    ],
    "version": 1
  },
  {
    "id": 2,
    "values": [
      {
        "intValue": 7
      },
      {
        "intValue": 7
      },
      {
        "intValue": 1278
      },
      {
        "intValue": 31
      },
      {
        "intValue": 4534
      }
    ],
    "version": 1
  },
  {
    "id": 3,
    "values": [
      {
        "intValue": 61
      },
      {
        "intValue": 61
      },
      {
        "intValue": 1344
      },
      {
        "intValue": 10
      },
      {
        "intValue": 7662
      }
    ],
    "version": 1
  },
];

export const eventMockData = [
  // insert 4
  {
    "typ": 0,
    "new": {
      "id": 4,
      "values": [
        {
          "intValue": 138
        },
        {
          "intValue": 265
        },
        {
          "intValue": 1738
        },
        {
          "intValue": 1035
        },
        {
          "intValue": 8918
        }
      ],
      "version": 1
    },
    "endpointName": "test-endpoint"
  },
  // delete 1
  {
    "typ": 1,
    "old": {
      "id": 1,
      "values": [
        {
          "intValue": 76
        },
        {
          "intValue": 76
        },
        {
          "intValue": 2353
        },
        {
          "intValue": 71
        },
        {
          "intValue": 4548
        }
      ],
      "version": 2
    },
    "endpointName": "test-endpoint"
  },
  // update 2
  {
    "typ": 2,
    "old": {
      "id": 2,
      "values": [
        {
          "intValue": 7
        },
        {
          "intValue": 7
        },
        {
          "intValue": 1280
        },
        {
          "intValue": 32
        },
        {
          "intValue": 4535
        }
      ],
      "version": 2
    },
    "new": {
      "id": 2,
      "values": [
        {
          "intValue": 7
        },
        {
          "intValue": 7
        },
        {
          "intValue": 1300
        },
        {
          "intValue": 42
        },
        {
          "intValue": 6500
        }
      ],
      "version": 3
    },
    "endpointName": "test-endpoint"
  },
  // update 2 ignore
  {
    "typ": 2,
    "old": {
      "id": 2,
      "values": [
        {
          "intValue": 7
        },
        {
          "intValue": 7
        },
        {
          "intValue": 1278
        },
        {
          "intValue": 31
        },
        {
          "intValue": 4534
        }
      ],
      "version": 1
    },
    "new": {
      "id": 2,
      "values": [
        {
          "intValue": 7
        },
        {
          "intValue": 7
        },
        {
          "intValue": 1280
        },
        {
          "intValue": 32
        },
        {
          "intValue": 4535
        }
      ],
      "version": 2
    },
    "endpointName": "test-endpoint"
  },
  // update 3
  {
    "typ": 2,
    "old": {
      "id": 3,
      "values": [
        {
          "intValue": 61
        },
        {
          "intValue": 61
        },
        {
          "intValue": 1344
        },
        {
          "intValue": 10
        },
        {
          "intValue": 7662
        }
      ],
      "version": 1
    },
    "new": {
      "id": 3,
      "values": [
        {
          "intValue": 61
        },
        {
          "intValue": 61
        },
        {
          "intValue": 1355
        },
        {
          "intValue": 12
        },
        {
          "intValue": 8662
        }
      ],
      "version": 2
    },
    "endpointName": "test-endpoint"
  },
]
