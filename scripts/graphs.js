export function generateXPGraph(transactions, courseStartDate, courseEndDate) {
  const startDate = new Date(courseStartDate);
  const endDate = new Date(courseEndDate);
  const currentDate = new Date();

  const xAxisEndDate = currentDate < endDate ? currentDate : endDate;

  let cumulativeXP = 0;
  const dataPoints = transactions.map((transaction) => {
    const date = new Date(transaction.createdAt);
    cumulativeXP += transaction.amount;
    return { date, xp: cumulativeXP };
  });

  if (dataPoints.length === 0 || dataPoints[0].date > startDate) {
    dataPoints.unshift({ date: startDate, xp: 0 });
  }
  if (
    dataPoints.length > 0 &&
    dataPoints[dataPoints.length - 1].date < xAxisEndDate
  ) {
    dataPoints.push({
      date: xAxisEndDate,
      xp: dataPoints[dataPoints.length - 1].xp,
    });
  }

  const svgWidth = 800;
  const svgHeight = 500;
  const margin = { top: 80, right: 50, bottom: 70, left: 100 };
  const chartWidth = svgWidth - margin.left - margin.right;
  const chartHeight = svgHeight - margin.bottom - margin.top;

  const dateRange = xAxisEndDate - startDate;

  const dateToX = (date) => {
    return margin.left + (chartWidth * (date - startDate)) / dateRange;
  };
  const maxXP = Math.max(...dataPoints.map((p) => p.xp));
  const roundedMaxXP = Math.ceil(maxXP / 50000) * 50000;

  const xpToY = (xp) => {
    return margin.top + chartHeight - (chartHeight * xp) / roundedMaxXP;
  };

  // Generate x-axis labels - calculate good intervals
  const monthInterval = Math.max(
    1,
    Math.ceil(dateRange / (1000 * 60 * 60 * 24 * 30 * 6))
  );
  const xAxisLabels = [];
  let currentLabel = new Date(startDate);

  while (currentLabel <= xAxisEndDate) {
    xAxisLabels.push({
      date: new Date(currentLabel),
      x: dateToX(currentLabel),
      label: currentLabel.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    });

    // Move to next month based on calculated interval
    currentLabel = new Date(currentLabel);
    currentLabel.setMonth(currentLabel.getMonth() + monthInterval);
  }

  // Ensure the last label is the end date
  if (
    xAxisLabels.length > 0 &&
    xAxisLabels[xAxisLabels.length - 1].date < xAxisEndDate
  ) {
    xAxisLabels.push({
      date: xAxisEndDate,
      x: dateToX(xAxisEndDate),
      label: xAxisEndDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    });
  }
  // Generate y-axis labels
  const yAxisLabels = [];
  const stepSize = roundedMaxXP / 8;

  for (let i = 0; i <= 8; i++) {
    const yp = stepSize * i;
    yAxisLabels.push({
      xp: yp,
      y: xpToY(yp),
      label: formatXP(yp),
    });
  }

  // Generate polyline points for the graph
  const polylinePoints = dataPoints
    .map((point) => {
      return `${dateToX(point.date)},${xpToY(point.xp)}`;
    })
    .join(" ");

  // Generate path for area under the curve
  const areaPath = `
    M${dataPoints
      .map((point) => `${dateToX(point.date)},${xpToY(point.xp)}`)
      .join(" L")}
    L${dateToX(dataPoints[dataPoints.length - 1].date)},${xpToY(0)} 
    L${dateToX(dataPoints[0].date)},${xpToY(0)} Z`;

  const svg = `<svg class="chart-container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgWidth} ${svgHeight}">
    <!-- Background and styling -->
    <defs>
      <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f8f9fc" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>
      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#7c4dff" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#7c4dff" stop-opacity="0.05" />
      </linearGradient>
      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#3d5afe" />
        <stop offset="100%" stop-color="#7c4dff" />
      </linearGradient>
      <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="0" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- Main background -->
    <rect x="0" y="0" width="${svgWidth}" height="${svgHeight}" rx="10" ry="10" fill="url(#backgroundGradient)" />

    <!-- Chart area background -->
    <rect x="${margin.left - 70}" y="${margin.top - 10}" width="${
    chartWidth + 100
  }" height="${
    chartHeight + 40
  }" rx="8" ry="8" fill="#ffffff" filter="url(#drop-shadow)" />

    <!-- Y-axis -->
    <line x1="${margin.left}" y1="${margin.top}" x2="${margin.left}" y2="${
    margin.top + chartHeight
  }" stroke="#e0e0e0" stroke-width="1" />

    <!-- Y-axis labels and grid lines -->
    ${yAxisLabels
      .map(
        (label) => `
      <line x1="${margin.left - 2}" y1="${label.y}" x2="${
          margin.left + chartWidth
        }" y2="${
          label.y
        }" stroke="#e0e0e0" stroke-width="1" stroke-dasharray="5,5" />
      <text x="${margin.left - 10}" y="${
          label.y + 5
        }" font-family="Segoe UI, sans-serif" font-size="12" fill="#999" text-anchor="end">
        ${label.label}
      </text>
    `
      )
      .join("")}

    <!-- X-axis -->
    <line x1="${margin.left}" y1="${margin.top + chartHeight}" x2="${
    margin.left + chartWidth
  }" y2="${margin.top + chartHeight}" stroke="#e0e0e0" stroke-width="1" />

    <!-- X-axis labels -->
    ${xAxisLabels
      .map(
        (label) => `
      <text x="${label.x}" y="${
          margin.top + chartHeight + 25
        }" font-family="Segoe UI, sans-serif" font-size="12" fill="#999" text-anchor="middle">
        ${label.label}
      </text>
    `
      )
      .join("")}

    <!-- Area under the curve -->
    <path d="${areaPath}" fill="url(#areaGradient)" />

    <!-- Actual progression line with data points -->
    <polyline points="${polylinePoints}" fill="none" stroke="url(#lineGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

    <!-- Data points -->
    ${dataPoints
      .map((point, index) => {
        const x = dateToX(point.date);
        const y = xpToY(point.xp);

        // Only show a limited number of data points to avoid clutter
        if (
          index % Math.max(1, Math.floor(dataPoints.length / 10)) === 0 ||
          index === dataPoints.length - 1
        ) {
          return `<circle cx="${x}" cy="${y}" r="${
            index === dataPoints.length - 1 ? 8 : 6
          }" 
                fill="${
                  index === dataPoints.length - 1 ? "#7c4dff" : "#ffffff"
                }" 
                stroke="${
                  index === dataPoints.length - 1 ? "#ffffff" : "#7c4dff"
                }" 
                stroke-width="2" ${
                  index === dataPoints.length - 1
                    ? '<animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" />'
                    : ""
                } />`;
        }
        return "";
      })
      .join("")}

    <!-- Highlighted latest point label -->
    <rect x="${dateToX(dataPoints[dataPoints.length - 1].date) - 50}" y="${
    xpToY(dataPoints[dataPoints.length - 1].xp) - 40
  }" width="100" height="30" rx="5" ry="5" fill="#7c4dff" />
    <text x="${dateToX(dataPoints[dataPoints.length - 1].date)}" y="${
    xpToY(dataPoints[dataPoints.length - 1].xp) - 20
  }" font-family="Segoe UI, sans-serif" font-size="14" fill="#ffffff" text-anchor="middle">
      ${formatXP(dataPoints[dataPoints.length - 1].xp)}
    </text>
  </svg>`;
  return svg;
}

function formatXP(xp) {
  if (xp >= 1000000) {
    return `${(xp / 1000000).toFixed(1)}MB`;
  } else if (xp >= 1000) {
    const kbValue = xp / 1000;
    return kbValue % 1 === 0
      ? `${Math.floor(kbValue)}kB`
      : `${kbValue.toFixed(1)}kB`;
  }
  return xp.toString();
}
