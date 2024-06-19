<template>
  <div class="q-pa-md">
    <q-table
      bordered
      title="Рейтинг обучающихся"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Поиск"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
    <div>
      <div
        id="apexchartsapex-bar"
        class="apexcharts-canvas apexchartsapex-bar apexcharts-theme-light"
        style="width: 513px; height: 300px"
      >
        <svg
          id="SvgjsSvg1744"
          width="513"
          height="300"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev"
          class="apexcharts-svg"
          xmlns:data="ApexChartsNS"
          transform="translate(0, 0)"
          style="background: transparent"
        >
          <g
            id="SvgjsG1746"
            class="apexcharts-inner apexcharts-graphical"
            transform="translate(168.25, 54)"
          >
            <defs id="SvgjsDefs1745">
              <linearGradient
                id="SvgjsLinearGradient1752"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  id="SvgjsStop1753"
                  stop-opacity="0.4"
                  stop-color="rgba(216,227,240,0.4)"
                  offset="0"
                ></stop>
                <stop
                  id="SvgjsStop1754"
                  stop-opacity="0.5"
                  stop-color="rgba(190,209,230,0.5)"
                  offset="1"
                ></stop>
                <stop
                  id="SvgjsStop1755"
                  stop-opacity="0.5"
                  stop-color="rgba(190,209,230,0.5)"
                  offset="1"
                ></stop>
              </linearGradient>
              <clipPath id="gridRectMaskisx1b6pw">
                <rect
                  id="SvgjsRect1757"
                  width="327.576171875"
                  height="185.696"
                  x="-2"
                  y="0"
                  rx="0"
                  ry="0"
                  opacity="1"
                  stroke-width="0"
                  stroke="none"
                  stroke-dasharray="0"
                  fill="#fff"
                ></rect>
              </clipPath>
              <clipPath id="forecastMaskisx1b6pw"></clipPath>
              <clipPath id="nonForecastMaskisx1b6pw"></clipPath>
              <clipPath id="gridRectMarkerMaskisx1b6pw">
                <rect
                  id="SvgjsRect1758"
                  width="327.576171875"
                  height="189.696"
                  x="-2"
                  y="-2"
                  rx="0"
                  ry="0"
                  opacity="1"
                  stroke-width="0"
                  stroke="none"
                  stroke-dasharray="0"
                  fill="#fff"
                ></rect>
              </clipPath>
            </defs>
            <rect
              id="SvgjsRect1756"
              width="0"
              height="185.696"
              x="0"
              y="0"
              rx="0"
              ry="0"
              opacity="1"
              stroke-width="0"
              stroke-dasharray="3"
              fill="url(#SvgjsLinearGradient1752)"
              class="apexcharts-xcrosshairs"
              y2="185.696"
              filter="none"
              fill-opacity="0.9"
            ></rect>
            <line
              id="SvgjsLine1827"
              x1="0"
              y1="186.696"
              x2="0"
              y2="192.696"
              stroke="#e0e0e0"
              stroke-dasharray="0"
              stroke-linecap="butt"
              class="apexcharts-xaxis-tick"
            ></line>
            <line
              id="SvgjsLine1828"
              x1="81.19404296875"
              y1="186.696"
              x2="81.19404296875"
              y2="192.696"
              stroke="#e0e0e0"
              stroke-dasharray="0"
              stroke-linecap="butt"
              class="apexcharts-xaxis-tick"
            ></line>
            <line
              id="SvgjsLine1829"
              x1="162.38808593750002"
              y1="186.696"
              x2="162.38808593750002"
              y2="192.696"
              stroke="#e0e0e0"
              stroke-dasharray="0"
              stroke-linecap="butt"
              class="apexcharts-xaxis-tick"
            ></line>
            <line
              id="SvgjsLine1830"
              x1="243.58212890625003"
              y1="186.696"
              x2="243.58212890625003"
              y2="192.696"
              stroke="#e0e0e0"
              stroke-dasharray="0"
              stroke-linecap="butt"
              class="apexcharts-xaxis-tick"
            ></line>
            <line
              id="SvgjsLine1831"
              x1="324.77617187500005"
              y1="186.696"
              x2="324.77617187500005"
              y2="192.696"
              stroke="#e0e0e0"
              stroke-dasharray="0"
              stroke-linecap="butt"
              class="apexcharts-xaxis-tick"
            ></line>
            <g id="SvgjsG1823" class="apexcharts-grid">
              <g id="SvgjsG1824" class="apexcharts-gridlines-horizontal">
                <line
                  id="SvgjsLine1833"
                  x1="0"
                  y1="18.5696"
                  x2="323.576171875"
                  y2="18.5696"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1834"
                  x1="0"
                  y1="37.1392"
                  x2="323.576171875"
                  y2="37.1392"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1835"
                  x1="0"
                  y1="55.708800000000004"
                  x2="323.576171875"
                  y2="55.708800000000004"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1836"
                  x1="0"
                  y1="74.2784"
                  x2="323.576171875"
                  y2="74.2784"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1837"
                  x1="0"
                  y1="92.84800000000001"
                  x2="323.576171875"
                  y2="92.84800000000001"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1838"
                  x1="0"
                  y1="111.41760000000002"
                  x2="323.576171875"
                  y2="111.41760000000002"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1839"
                  x1="0"
                  y1="129.98720000000003"
                  x2="323.576171875"
                  y2="129.98720000000003"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1840"
                  x1="0"
                  y1="148.55680000000004"
                  x2="323.576171875"
                  y2="148.55680000000004"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine1841"
                  x1="0"
                  y1="167.12640000000005"
                  x2="323.576171875"
                  y2="167.12640000000005"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  class="apexcharts-gridline"
                ></line>
              </g>
              <g id="SvgjsG1825" class="apexcharts-gridlines-vertical"></g>
              <line
                id="SvgjsLine1844"
                x1="0"
                y1="185.696"
                x2="323.576171875"
                y2="185.696"
                stroke="transparent"
                stroke-dasharray="0"
                stroke-linecap="butt"
              ></line>
              <line
                id="SvgjsLine1843"
                x1="0"
                y1="1"
                x2="0"
                y2="185.696"
                stroke="transparent"
                stroke-dasharray="0"
                stroke-linecap="butt"
              ></line>
            </g>
            <g id="SvgjsG1826" class="apexcharts-grid-borders">
              <line
                id="SvgjsLine1832"
                x1="0"
                y1="0"
                x2="323.576171875"
                y2="0"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                class="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1842"
                x1="0"
                y1="185.69600000000005"
                x2="323.576171875"
                y2="185.69600000000005"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
                class="apexcharts-gridline"
              ></line>
              <line
                id="SvgjsLine1866"
                x1="0"
                y1="185.696"
                x2="323.576171875"
                y2="185.696"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-width="1"
                stroke-linecap="butt"
              ></line>
              <line
                id="SvgjsLine1899"
                x1="0"
                y1="1"
                x2="0"
                y2="185.696"
                stroke="#e0e0e0"
                stroke-dasharray="0"
                stroke-linecap="butt"
              ></line>
            </g>
            <g
              id="SvgjsG1759"
              class="apexcharts-bar-series apexcharts-plot-series"
            >
              <g
                id="SvgjsG1760"
                class="apexcharts-series"
                rel="1"
                seriesName="Numberxofxitemsxxmillionsx"
                data:realIndex="0"
              >
                <path
                  id="SvgjsPath1764"
                  d="M 0.101 2.7854400000000004 L 323.677171875 2.7854400000000004 L 323.677171875 15.78416 L 0.101 15.78416 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 2.7854400000000004 L 323.677171875 2.7854400000000004 L 323.677171875 15.78416 L 0.101 15.78416 Z"
                  pathFrom="M 0.101 2.7854400000000004 L 0.101 2.7854400000000004 L 0.101 15.78416 L 0.101 15.78416 L 0.101 15.78416 L 0.101 15.78416 L 0.101 15.78416 L 0.101 2.7854400000000004 Z"
                  cy="21.355040000000002"
                  cx="323.676171875"
                  j="0"
                  val="200"
                  barHeight="12.99872"
                  barWidth="323.576171875"
                ></path>
                <path
                  id="SvgjsPath1770"
                  d="M 0.101 21.355040000000002 L 279.99438867187496 21.355040000000002 L 279.99438867187496 34.35376 L 0.101 34.35376 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 21.355040000000002 L 279.99438867187496 21.355040000000002 L 279.99438867187496 34.35376 L 0.101 34.35376 Z"
                  pathFrom="M 0.101 21.355040000000002 L 0.101 21.355040000000002 L 0.101 34.35376 L 0.101 34.35376 L 0.101 34.35376 L 0.101 34.35376 L 0.101 34.35376 L 0.101 21.355040000000002 Z"
                  cy="39.924640000000004"
                  cx="279.993388671875"
                  j="1"
                  val="173"
                  barHeight="12.99872"
                  barWidth="279.89338867187496"
                ></path>
                <path
                  id="SvgjsPath1776"
                  d="M 0.101 39.924640000000004 L 90.702328125 39.924640000000004 L 90.702328125 52.92336 L 0.101 52.92336 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 39.924640000000004 L 90.702328125 39.924640000000004 L 90.702328125 52.92336 L 0.101 52.92336 Z"
                  pathFrom="M 0.101 39.924640000000004 L 0.101 39.924640000000004 L 0.101 52.92336 L 0.101 52.92336 L 0.101 52.92336 L 0.101 52.92336 L 0.101 52.92336 L 0.101 39.924640000000004 Z"
                  cy="58.494240000000005"
                  cx="90.70132812499999"
                  j="2"
                  val="56"
                  barHeight="12.99872"
                  barWidth="90.601328125"
                ></path>
                <path
                  id="SvgjsPath1782"
                  d="M 0.101 58.494240000000005 L 89.08444726562499 58.494240000000005 L 89.08444726562499 71.49296000000001 L 0.101 71.49296000000001 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 58.494240000000005 L 89.08444726562499 58.494240000000005 L 89.08444726562499 71.49296000000001 L 0.101 71.49296000000001 Z"
                  pathFrom="M 0.101 58.494240000000005 L 0.101 58.494240000000005 L 0.101 71.49296000000001 L 0.101 71.49296000000001 L 0.101 71.49296000000001 L 0.101 71.49296000000001 L 0.101 71.49296000000001 L 0.101 58.494240000000005 Z"
                  cy="77.06384"
                  cx="89.08344726562498"
                  j="3"
                  val="55"
                  barHeight="12.99872"
                  barWidth="88.98344726562499"
                ></path>
                <path
                  id="SvgjsPath1788"
                  d="M 0.101 77.06384 L 87.46656640625 77.06384 L 87.46656640625 90.06256 L 0.101 90.06256 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 77.06384 L 87.46656640625 77.06384 L 87.46656640625 90.06256 L 0.101 90.06256 Z"
                  pathFrom="M 0.101 77.06384 L 0.101 77.06384 L 0.101 90.06256 L 0.101 90.06256 L 0.101 90.06256 L 0.101 90.06256 L 0.101 90.06256 L 0.101 77.06384 Z"
                  cy="95.63344000000001"
                  cx="87.46556640624999"
                  j="4"
                  val="54"
                  barHeight="12.99872"
                  barWidth="87.36556640625"
                ></path>
                <path
                  id="SvgjsPath1794"
                  d="M 0.101 95.63344000000001 L 77.92106933593749 95.63344000000001 L 77.92106933593749 108.63216000000001 L 0.101 108.63216000000001 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 95.63344000000001 L 77.92106933593749 95.63344000000001 L 77.92106933593749 108.63216000000001 L 0.101 108.63216000000001 Z"
                  pathFrom="M 0.101 95.63344000000001 L 0.101 95.63344000000001 L 0.101 108.63216000000001 L 0.101 108.63216000000001 L 0.101 108.63216000000001 L 0.101 108.63216000000001 L 0.101 108.63216000000001 L 0.101 95.63344000000001 Z"
                  cy="114.20304000000002"
                  cx="77.92006933593748"
                  j="5"
                  val="48.1"
                  barHeight="12.99872"
                  barWidth="77.82006933593749"
                ></path>
                <path
                  id="SvgjsPath1800"
                  d="M 0.101 114.20304000000002 L 71.44954589843749 114.20304000000002 L 71.44954589843749 127.20176000000002 L 0.101 127.20176000000002 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 114.20304000000002 L 71.44954589843749 114.20304000000002 L 71.44954589843749 127.20176000000002 L 0.101 127.20176000000002 Z"
                  pathFrom="M 0.101 114.20304000000002 L 0.101 114.20304000000002 L 0.101 127.20176000000002 L 0.101 127.20176000000002 L 0.101 127.20176000000002 L 0.101 127.20176000000002 L 0.101 127.20176000000002 L 0.101 114.20304000000002 Z"
                  cy="132.77264000000002"
                  cx="71.44854589843749"
                  j="6"
                  val="44.1"
                  barHeight="12.99872"
                  barWidth="71.3485458984375"
                ></path>
                <path
                  id="SvgjsPath1806"
                  d="M 0.101 132.77264000000002 L 70.8023935546875 132.77264000000002 L 70.8023935546875 145.77136000000002 L 0.101 145.77136000000002 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 132.77264000000002 L 70.8023935546875 132.77264000000002 L 70.8023935546875 145.77136000000002 L 0.101 145.77136000000002 Z"
                  pathFrom="M 0.101 132.77264000000002 L 0.101 132.77264000000002 L 0.101 145.77136000000002 L 0.101 145.77136000000002 L 0.101 145.77136000000002 L 0.101 145.77136000000002 L 0.101 145.77136000000002 L 0.101 132.77264000000002 Z"
                  cy="151.34224000000003"
                  cx="70.8013935546875"
                  j="7"
                  val="43.7"
                  barHeight="12.99872"
                  barWidth="70.7013935546875"
                ></path>
                <path
                  id="SvgjsPath1812"
                  d="M 0.101 151.34224000000003 L 68.86093652343749 151.34224000000003 L 68.86093652343749 164.34096000000002 L 0.101 164.34096000000002 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 151.34224000000003 L 68.86093652343749 151.34224000000003 L 68.86093652343749 164.34096000000002 L 0.101 164.34096000000002 Z"
                  pathFrom="M 0.101 151.34224000000003 L 0.101 151.34224000000003 L 0.101 164.34096000000002 L 0.101 164.34096000000002 L 0.101 164.34096000000002 L 0.101 164.34096000000002 L 0.101 164.34096000000002 L 0.101 151.34224000000003 Z"
                  cy="169.91184000000004"
                  cx="68.85993652343748"
                  j="8"
                  val="42.5"
                  barHeight="12.99872"
                  barWidth="68.75993652343749"
                ></path>
                <path
                  id="SvgjsPath1818"
                  d="M 0.101 169.91184000000004 L 64.816234375 169.91184000000004 L 64.816234375 182.91056000000003 L 0.101 182.91056000000003 Z"
                  fill="rgba(10,50,115,0.85)"
                  fill-opacity="1"
                  stroke-opacity="1"
                  stroke-linecap="round"
                  stroke-width="0"
                  stroke-dasharray="0"
                  class="apexcharts-bar-area"
                  index="0"
                  clip-path="url(#gridRectMaskisx1b6pw)"
                  pathTo="M 0.101 169.91184000000004 L 64.816234375 169.91184000000004 L 64.816234375 182.91056000000003 L 0.101 182.91056000000003 Z"
                  pathFrom="M 0.101 169.91184000000004 L 0.101 169.91184000000004 L 0.101 182.91056000000003 L 0.101 182.91056000000003 L 0.101 182.91056000000003 L 0.101 182.91056000000003 L 0.101 182.91056000000003 L 0.101 169.91184000000004 Z"
                  cy="188.48144000000005"
                  cx="64.81523437499999"
                  j="9"
                  val="40"
                  barHeight="12.99872"
                  barWidth="64.715234375"
                ></path>
                <g
                  id="SvgjsG1762"
                  class="apexcharts-bar-goals-markers"
                  style="pointer-events: none"
                >
                  <g
                    id="SvgjsG1763"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1769"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1775"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1781"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1787"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1793"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1799"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1805"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1811"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                  <g
                    id="SvgjsG1817"
                    className="apexcharts-bar-goals-groups"
                  ></g>
                </g>
              </g>
              <g
                id="SvgjsG1761"
                class="apexcharts-datalabels"
                data:realIndex="0"
              >
                <g
                  id="SvgjsG1766"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1768"
                    font-family="Helvetica, Arial, sans-serif"
                    x="161.88808593750002"
                    y="13.2848"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="161.88808593750002"
                    cy="13.2848"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    200
                  </text>
                </g>
                <g
                  id="SvgjsG1772"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1774"
                    font-family="Helvetica, Arial, sans-serif"
                    x="140.0466943359375"
                    y="31.8544"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="140.0466943359375"
                    cy="31.8544"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    173
                  </text>
                </g>
                <g
                  id="SvgjsG1778"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1780"
                    font-family="Helvetica, Arial, sans-serif"
                    x="45.40066406249999"
                    y="50.42400000000001"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="45.40066406249999"
                    cy="50.42400000000001"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    56
                  </text>
                </g>
                <g
                  id="SvgjsG1784"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1786"
                    font-family="Helvetica, Arial, sans-serif"
                    x="44.59172363281249"
                    y="68.9936"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="44.59172363281249"
                    cy="68.9936"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    55
                  </text>
                </g>
                <g
                  id="SvgjsG1790"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1792"
                    font-family="Helvetica, Arial, sans-serif"
                    x="43.78278320312499"
                    y="87.5632"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="43.78278320312499"
                    cy="87.5632"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    54
                  </text>
                </g>
                <g
                  id="SvgjsG1796"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1798"
                    font-family="Helvetica, Arial, sans-serif"
                    x="39.01003466796874"
                    y="106.1328"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="39.01003466796874"
                    cy="106.1328"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    48.1
                  </text>
                </g>
                <g
                  id="SvgjsG1802"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1804"
                    font-family="Helvetica, Arial, sans-serif"
                    x="35.77427294921874"
                    y="124.70240000000001"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="35.77427294921874"
                    cy="124.70240000000001"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    44.1
                  </text>
                </g>
                <g
                  id="SvgjsG1808"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1810"
                    font-family="Helvetica, Arial, sans-serif"
                    x="35.450696777343744"
                    y="143.27200000000002"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="35.450696777343744"
                    cy="143.27200000000002"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    43.7
                  </text>
                </g>
                <g
                  id="SvgjsG1814"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1816"
                    font-family="Helvetica, Arial, sans-serif"
                    x="34.47996826171874"
                    y="161.84160000000003"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="34.47996826171874"
                    cy="161.84160000000003"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    42.5
                  </text>
                </g>
                <g
                  id="SvgjsG1820"
                  class="apexcharts-data-labels"
                  transform="rotate(0)"
                >
                  <text
                    id="SvgjsText1822"
                    font-family="Helvetica, Arial, sans-serif"
                    x="32.45761718749999"
                    y="180.41120000000004"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="600"
                    fill="#ffffff"
                    class="apexcharts-datalabel"
                    cx="32.45761718749999"
                    cy="180.41120000000004"
                    style="font-family: Helvetica, Arial, sans-serif"
                  >
                    40
                  </text>
                </g>
              </g>
            </g>
            <line
              id="SvgjsLine1845"
              x1="0"
              y1="0"
              x2="323.576171875"
              y2="0"
              stroke="#b6b6b6"
              stroke-dasharray="0"
              stroke-width="1"
              stroke-linecap="butt"
              class="apexcharts-ycrosshairs"
            ></line>
            <line
              id="SvgjsLine1846"
              x1="0"
              y1="0"
              x2="323.576171875"
              y2="0"
              stroke-dasharray="0"
              stroke-width="0"
              stroke-linecap="butt"
              class="apexcharts-ycrosshairs-hidden"
            ></line>
            <g
              id="SvgjsG1867"
              class="apexcharts-yaxis apexcharts-xaxis-inversed"
              rel="0"
            >
              <g
                id="SvgjsG1868"
                class="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                transform="translate(0, 0)"
              >
                <text
                  id="SvgjsText1870"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="10.128872727272729"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1871">British Library</tspan>
                  <title>British Library</title>
                </text>
                <text
                  id="SvgjsText1873"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="28.69847272727273"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1874">Library of Congress</tspan>
                  <title>Library of Congress</title>
                </text>
                <text
                  id="SvgjsText1876"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="47.26807272727273"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1877">Shanghai Library</tspan>
                  <title>Shanghai Library</title>
                </text>
                <text
                  id="SvgjsText1879"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="65.83767272727273"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1880">New York Public Library</tspan>
                  <title>New York Public Library</title>
                </text>
                <text
                  id="SvgjsText1882"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="84.40727272727273"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1883">Library and Archives Can...</tspan>
                  <title>Library and Archives Canada</title>
                </text>
                <text
                  id="SvgjsText1885"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="102.97687272727273"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1886">Russian State Library</tspan>
                  <title>Russian State Library</title>
                </text>
                <text
                  id="SvgjsText1888"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="121.54647272727274"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1889">National Diet Library</tspan>
                  <title>National Diet Library</title>
                </text>
                <text
                  id="SvgjsText1891"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="140.11607272727275"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1892">German National Library</tspan>
                  <title>German National Library</title>
                </text>
                <text
                  id="SvgjsText1894"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="158.68567272727276"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1895">Royal Library, Denmark</tspan>
                  <title>Royal Library, Denmark</title>
                </text>
                <text
                  id="SvgjsText1897"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-15"
                  y="177.25527272727277"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-yaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1898">National Library of China</tspan>
                  <title>National Library of China</title>
                </text>
              </g>
            </g>
            <g
              id="SvgjsG1847"
              class="apexcharts-xaxis apexcharts-yaxis-inversed"
            >
              <g
                id="SvgjsG1848"
                class="apexcharts-xaxis-texts-g"
                transform="translate(0, -8)"
              >
                <text
                  id="SvgjsText1849"
                  font-family="Helvetica, Arial, sans-serif"
                  x="323.576171875"
                  y="215.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1851">200</tspan>
                  <title>200</title>
                </text>
                <text
                  id="SvgjsText1852"
                  font-family="Helvetica, Arial, sans-serif"
                  x="242.58212890625"
                  y="215.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1854">150</tspan>
                  <title>150</title>
                </text>
                <text
                  id="SvgjsText1855"
                  font-family="Helvetica, Arial, sans-serif"
                  x="161.5880859375"
                  y="215.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1857">100</tspan>
                  <title>100</title>
                </text>
                <text
                  id="SvgjsText1858"
                  font-family="Helvetica, Arial, sans-serif"
                  x="80.59404296875002"
                  y="215.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1860">50</tspan>
                  <title>50</title>
                </text>
                <text
                  id="SvgjsText1861"
                  font-family="Helvetica, Arial, sans-serif"
                  x="-0.39999999999997726"
                  y="215.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="400"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-label"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  <tspan id="SvgjsTspan1863">0</tspan>
                  <title>0</title>
                </text>
              </g>
              <g
                id="SvgjsG1864"
                class="apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
              >
                <text
                  id="SvgjsText1865"
                  font-family="Helvetica, Arial, sans-serif"
                  x="161.7880859375"
                  y="229.696"
                  text-anchor="middle"
                  dominant-baseline="auto"
                  font-size="12px"
                  font-weight="900"
                  fill="#373d3f"
                  class="apexcharts-text apexcharts-xaxis-title-text"
                  style="font-family: Helvetica, Arial, sans-serif"
                >
                  Catalogue size (millions)
                </text>
              </g>
            </g>
            <g id="SvgjsG1900" class="apexcharts-yaxis-annotations"></g>
            <g id="SvgjsG1901" class="apexcharts-xaxis-annotations"></g>
            <g id="SvgjsG1902" class="apexcharts-point-annotations"></g>
          </g>
          <text
            id="SvgjsText1748"
            font-family="Helvetica, Arial, sans-serif"
            x="10"
            y="16.5"
            text-anchor="start"
            dominant-baseline="auto"
            font-size="14px"
            font-weight="900"
            fill="#373d3f"
            class="apexcharts-title-text"
            style="font-family: Helvetica, Arial, sans-serif; opacity: 1"
          >
            World's biggest libraries by catalogue size (Guiness - 2021)
          </text>
          <g id="SvgjsG1747" class="apexcharts-annotations"></g>
        </svg>
        <div class="apexcharts-legend" style="max-height: 150px"></div>
        <div class="apexcharts-tooltip apexcharts-theme-light">
          <div
            class="apexcharts-tooltip-title"
            style="font-family: Helvetica, Arial, sans-serif; font-size: 12px"
          ></div>
          <div class="apexcharts-tooltip-series-group" style="order: 1">
            <span
              class="apexcharts-tooltip-marker"
              style="background-color: rgb(10, 50, 115)"
            ></span>
            <div
              class="apexcharts-tooltip-text"
              style="font-family: Helvetica, Arial, sans-serif; font-size: 12px"
            >
              <div class="apexcharts-tooltip-y-group">
                <span class="apexcharts-tooltip-text-y-label"></span
                ><span class="apexcharts-tooltip-text-y-value"></span>
              </div>
              <div class="apexcharts-tooltip-goals-group">
                <span class="apexcharts-tooltip-text-goals-label"></span
                ><span class="apexcharts-tooltip-text-goals-value"></span>
              </div>
              <div class="apexcharts-tooltip-z-group">
                <span class="apexcharts-tooltip-text-z-label"></span
                ><span class="apexcharts-tooltip-text-z-value"></span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"
        >
          <div class="apexcharts-yaxistooltip-text"></div>
        </div>
        <div class="apexcharts-toolbar" style="top: 0px; right: 3px">
          <div class="apexcharts-menu-icon" title="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
const $q = useQuasar();
const filter = ref("");
const rows = ref([]);
// onMounted();
// {
//   listTask();
// }

// async function listTask() {
//   try {
//     const result = await fetch("/task/all", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await result.json();
//     // console.log(data);
//     // console.log(data.length);
//     if (data.length != 0) {
//       let code = data[0].code;
//       // console.log(code);
//       rows.value.push(data[0]);
//       // console.log(rows);
//       for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//           const element = data[key];
//           if (code != element.code) {
//             rows.value.push(element);
//             // console.log(rows);
//             code = element.code;
//           }
//         }
//       }
//     }
//     // rows.value = console.log(rows.value);
//   } catch (error) {
//     $q.notify({
//       color: "red-5",
//       textColor: "white",
//       icon: "warning",
//       message: "Не удалось подключиться к серверу",
//     });
//   }
// }

const columns = [
  {
    name: "name",
    required: true,
    label: "Имя",
    align: "left",
    field: (row) => row.title,
    sortable: true,
  },
  {
    name: "rating",
    align: "center",
    label: "Рейтинг",
    sortable: true,
  },
];
</script>
