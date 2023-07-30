import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const Chart = () => {
    const data1 = [
        {
          name: "01",
          BP: 40,
          amt: 2400
        },
        {
          name: "02",
          BP: 58,
          amt: 2210
        },
        {
          name: "03",
          BP: 63,
          amt: 2290
        },
        {
          name: "04",
          BP: 84,
          amt: 2000
        },
        {
          name: "05",
          BP: 93,
          amt: 2181
        },
        {
          name: "06",
          BP: 80,
          amt: 2500
        },
        {
          name: "07",
          uv: 3490,
          BP: 55,
          amt: 2100
        },
        {
          name: "08",
          BP: 43,
          amt: 2400
        },
        {
          name: "09",
          BP: 40,
          amt: 2210
        },
        {
          name: "10",
          BP: 38,
          amt: 2290
        },
        {
          name: "11",
          BP: 55,
          amt: 2000
        },
        {
          name: "12",
          BP: 50,
          amt: 2181
        },
        {
          name: "13",
          BP: 75,
          amt: 2500
        },
        {
          name: "14",
          BP: 70,
        }
      ];
      const data2 = [
        {
          name: "01",
          HB: 50,
          amt: 2400
        },
        {
          name: "02",
          HB: 58,
          amt: 2210
        },
        {
          name: "03",
          HB: 60,
          amt: 2290
        },
        {
          name: "04",
          HB: 64,
          amt: 2000
        },
        {
          name: "05",
          HB: 30,
          amt: 2181
        },
        {
          name: "06",
          HB: 52,
          amt: 2500
        },
        {
          name: "07",
          uv: 3490,
          HB: 42,
          amt: 2100
        },
        {
          name: "08",
          HB: 40,
          amt: 2400
        },
        {
          name: "09",
          HB: 50,
          amt: 2210
        },
        {
          name: "10",
          HB: 60,
          amt: 2290
        },
        {
          name: "11",
          HB: 75,
          amt: 2000
        },
        {
          name: "12",
          HB: 70,
          amt: 2181
        },
        {
          name: "13",
          HB: 58,
          amt: 2500
        },
        {
          name: "14",
          HB: 70,
          amt: 2500
        }
      ];
    return (
        <div>
          <p className="mb-4 font-bold text-sm text-gray-500">
                History-Blood Pressure
              </p>
                <LineChart
      width={500}
      height={300}
      data={data1}
      margin={{
        top: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" interval="preserveStart"/>
      <YAxis interval="preserveStart"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="BP"
        stroke="#8884d8"
      />
    </LineChart>
    <p className="my-4 font-bold text-sm text-gray-500">
                History Heart-beat
              </p>
    <LineChart
      width={500}
      height={300}
      data={data2}
      margin={{
        top: 5,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="5" />
      <XAxis dataKey="name" interval="preserveStart"/>
      <YAxis interval="preserveStart"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="HB"
        stroke="#8884d8"
      />
    </LineChart>
        </div>

    )
}

export default Chart
