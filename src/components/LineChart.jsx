import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isDashboard = false, isPrintModal = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveLine
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: isPrintModal ? colors.grey[900] : colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: isPrintModal ? colors.grey[900] : colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: isPrintModal ? colors.grey[900] : colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: isPrintModal ? colors.grey[900] : colors.grey[100],
            },
          },
        },
        labels: {
          text: {
            fill: colors.greenAccent[500],
          },
        },
        legends: {
          text: {
            fill: isPrintModal ? colors.grey[900] : colors.grey[100],
          },
        },

        tooltip: {
          container: {
            background: colors.greenAccent[800],
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "spectral" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      lineWidth={3}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
