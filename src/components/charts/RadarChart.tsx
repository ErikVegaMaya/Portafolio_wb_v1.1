import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = (props: any) => {
  const [labels, setLabels]: any = React.useState([]);
  const [data, setData]: any = React.useState([]);

  React.useEffect(() => {
    const qlabels: any = [];
    const qdata: any = [];

    props.data.map((obj: any) => {
      console.log(obj);
      qlabels.push(obj.nameSkill);
      qdata.push(obj.levelSkill);
    });

    setLabels(qlabels);
    setData(qdata);
  }, [props.data]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Top 5 Skills",
        data: data,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };
  return <Radar className="ml-12" data={chartData} />;
};

export default RadarChart;
