import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "0 - 1.00 น.", work: 0.2, edu: 0.1, outgo: 0.1, etc: 0.1, avg: 0.1 },
  { time: "1 - 2.00 น.", work: 0.1, edu: 0.0, outgo: 0.1, etc: 0.0, avg: 0.1 },
  { time: "2 - 3.00 น.", work: 0.1, edu: 0.0, outgo: 0.4, etc: 0.0, avg: 0.1 },
  { time: "3 - 4.00 น.", work: 0.1, edu: 0.0, outgo: 0.3, etc: 0.0, avg: 0.2 },
  { time: "4 - 5.00 น.", work: 0.5, edu: 0.0, outgo: 0.9, etc: 0.1, avg: 0.5 },
  { time: "5 - 6.00 น.", work: 1.6, edu: 0.3, outgo: 2.6, etc: 1.7, avg: 1.8 },
  { time: "6 - 7.00 น.", work: 7.3, edu: 5.4, outgo: 5.7, etc: 4.9, avg: 6.4 },
  {
    time: "7 - 8.00 น.",
    work: 24.4,
    edu: 29.8,
    outgo: 8.2,
    etc: 8.4,
    avg: 18.0,
  },
  { time: "8 - 9.00 น.", work: 9.1, edu: 9.0, outgo: 7.3, etc: 9.4, avg: 8.7 },
  {
    time: "9 - 10.00 น.",
    work: 4.1,
    edu: 3.7,
    outgo: 5.7,
    etc: 10.3,
    avg: 5.6,
  },
  {
    time: "10 - 11.00 น.",
    work: 1.7,
    edu: 1.7,
    outgo: 8.1,
    etc: 13.0,
    avg: 5.3,
  },
  {
    time: "11 - 12.00 น.",
    work: 0.7,
    edu: 0.9,
    outgo: 6.8,
    etc: 8.7,
    avg: 3.6,
  },
  {
    time: "12 - 13.00 น.",
    work: 0.8,
    edu: 1.2,
    outgo: 6.4,
    etc: 6.8,
    avg: 3.2,
  },
  {
    time: "13 - 14.00 น.",
    work: 0.8,
    edu: 1.3,
    outgo: 6.6,
    etc: 7.4,
    avg: 3.4,
  },
  {
    time: "14 - 15.00 น.",
    work: 0.9,
    edu: 2.2,
    outgo: 6.1,
    etc: 6.3,
    avg: 3.2,
  },
  {
    time: "15 - 16.00 น.",
    work: 1.8,
    edu: 15.3,
    outgo: 6.7,
    etc: 6.0,
    avg: 4.4,
  },
  {
    time: "16 - 17.00 น.",
    work: 8.2,
    edu: 20.2,
    outgo: 8.0,
    etc: 5.5,
    avg: 8.3,
  },
  {
    time: "17 - 18.00 น.",
    work: 19.6,
    edu: 5.2,
    outgo: 10.2,
    etc: 4.3,
    avg: 13.9,
  },
  {
    time: "18 - 19.00 น.",
    work: 7.8,
    edu: 1.6,
    outgo: 5.3,
    etc: 2.6,
    avg: 6.0,
  },
  {
    time: "19 - 20.00 น.",
    work: 3.9,
    edu: 1.1,
    outgo: 2.3,
    etc: 1.7,
    avg: 3.0,
  },
  {
    time: "20 - 21.00 น.",
    work: 3.3,
    edu: 0.7,
    outgo: 1.4,
    etc: 1.4,
    avg: 2.4,
  },
  {
    time: "21 - 22.00 น.",
    work: 1.9,
    edu: 0.2,
    outgo: 0.6,
    etc: 0.7,
    avg: 1.3,
  },
  {
    time: "22 - 23.00 น.",
    work: 0.8,
    edu: 0.1,
    outgo: 0.3,
    etc: 0.4,
    avg: 0.6,
  },
  {
    time: "23 - 24.00 น.",
    work: 0.2,
    edu: 0.0,
    outgo: 0.1,
    etc: 0.1,
    avg: 0.1,
  },
];

const WorkDot = (props) => {
  const { cx, cy, value } = props;
  if (value >= 15) {
    return (
      <svg
        x={cx - 15}
        y={cy - 35}
        viewBox="0 0 24 24"
        fill="#615dac"
        height="2.3em"
        width="2.3em"
      >
        <path d="M14.12 10H19V8.2h-3.62l-2-3.33c-.3-.5-.84-.84-1.46-.84-.18 0-.34.03-.5.08L6 5.8V11h1.8V7.33l2.11-.66L6 22h1.8l2.87-8.11L13 17v5h1.8v-6.41l-2.49-4.54.73-2.87M14 3.8c1 0 1.8-.8 1.8-1.8S15 .2 14 .2 12.2 1 12.2 2 13 3.8 14 3.8z" />
      </svg>
    );
  }
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={0}
      height={0}
      viewBox="0 0 0 0"
      fill="currentColor"
    ></svg>
  );
};

const ShoppingDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  if (value >= 10) {
    return (
      <svg
        x={cx - 25}
        y={cy - 40}
        viewBox="0 0 600 512"
        fill="#E94560"
        height="2.4em"
        width="2.4em"
      >
        <path d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48 21.5 48 48 48zm-84.3 104.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L505 232.7l-15.3-36.8c-17.2-41.1-57.4-67.9-102-67.9-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4-59.4 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.7-61.7c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM256 274.1c-7.7-4.4-17.4-1.8-21.9 5.9l-32 55.4-54.4-31.4c-15.3-8.8-34.9-3.6-43.7 11.7L40 426.6c-8.8 15.3-3.6 34.9 11.7 43.7l55.4 32c15.3 8.8 34.9 3.6 43.7-11.7l64-110.9c1.5-2.6 2.6-5.2 3.3-8l43.8-75.7c4.4-7.7 1.8-17.4-5.9-21.9z" />
      </svg>
    );
  }
  return (
    <svg
      x={cx - 10}
      y={cy - 10}
      width={0}
      height={0}
      viewBox="0 0 0 0"
      fill="currentColor"
    ></svg>
  );
};

const EduDot = (props) => {
  const { cx, cy, value } = props;
  if (value >= 22) {
    return (
      <svg
        x={cx - 20}
        y={cy - 35}
        viewBox="0 0 24 24"
        fill="#20302f"
        height="2.3em"
        width="2.3em"
      >
        <path d="M16.5 5.5a2 2 0 002-2 2 2 0 00-2-2 2 2 0 00-2 2 2 2 0 002 2m-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3A7.298 7.298 0 0022 13v-2c-1.76.03-3.4-.89-4.3-2.4l-1-1.6c-.36-.6-1-1-1.7-1-.3 0-.5.1-.8.1L9 8.3V13h2V9.6l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4M4 9a1 1 0 01-1-1 1 1 0 011-1h3v2H4m1-4a1 1 0 01-1-1 1 1 0 011-1h5v2H5m-2 8a1 1 0 01-1-1 1 1 0 011-1h4v2H3z" />
      </svg>
    );
  }
  return null;
};

const AvgDot = (props) => {
  const { cx, cy, value } = props;
  if (value >= 10) {
    return (
      <svg
        x={cx - 20}
        y={cy - 35}
        fill="#20302f"
        height="2em"
        viewBox="0 0 640 512"
        width="2em"
      ></svg>
    );
  }
  return null;
};

const BusinessDot = (props) => {
  const { cx, cy, value } = props;
  if (value >= 11) {
    return (
      <svg
        x={cx - 10}
        y={cy - 40}
        viewBox="0 0 640 512"
        fill="#352f2f"
        height="2.5em"
        width="2.5em"
      >
        <path d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm-84.3 104.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8c-17.2-41.1-57.4-67.9-102-67.9-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1l-25 62.4-59.3 59.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l61.6-61.7c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zm456.9-182.2c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l25.4 25.3H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h146.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80zM392 0c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm24 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16zm-24 168c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24v-16c0-13.3-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48z" />
      </svg>
    );
  }
  return null;
};

export default function TimelineChart() {
  return (
    <LineChart
      width={900}
      height={550}
      data={data}
      padding={{
        top: 25,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="7 7" />
      <XAxis dataKey="time" />
      <YAxis tickFormatter={(value) => ` ${value}%`} />
      <Tooltip
        formatter={(value, entry, time) => {
          if (value) return [`อัตราการเดินทาง ${value}%`];
          return [value];
        }}
        contentStyle={{ textAlign: "center" }}
        labelStyle={{ marginBottom: "0.5em" }}
      />
      <Legend
        formatter={(entry) => {
          if (entry === "work") return [`ไปทำงาน`];
          if (entry === "edu") return [`ไปเรียน`];
          if (entry === "outgo") return [`ไปซื้อของ,สังสรรค์`];
          if (entry === "etc") return [`ทำธุระส่วนตัว`];
          if (entry === "avg") return [`ค่าเฉลี่ย`];
          return [entry];
        }}
      />
      <Line
        type="monotone"
        dataKey="work"
        strokeWidth={3}
        stroke="#8884d8"
        dot={<WorkDot />}
      />
      <Line
        type="monotone"
        dataKey="edu"
        dot={<EduDot />}
        stroke="#82cac4"
        strokeWidth={3}
      />
      <Line
        type="monotone"
        dataKey="outgo"
        stroke="#E94560"
        dot={<ShoppingDot />}
        strokeWidth={3}
      />
      <Line
        type="monotone"
        strokeWidth={3}
        dataKey="etc"
        stroke="#9d9d9d"
        dot={<BusinessDot />}
      />
      <Line
        type="monotone"
        strokeWidth={2}
        strokeDasharray="5 5"
        dot={<AvgDot />}
        dataKey="avg"
        stroke="#909090"
      />
    </LineChart>
  );
}
