export const skills = () => `
<div class="card">
  <div class="card-header">
    <div class="card-title">Best Skills</div>
  </div>

  <ul id="topic-list" class="topic-list"></ul>
</div>
`;
export const AuditRatio = (done, received, auditRatio) => {
  // Calculate values for the chart
  const total = done + received;
  const donePercentage = (done / total) * 100;
  const receivedPercentage = (received / total) * 100;
  
  // Calculate angles for SVG arcs
  const doneAngle = (donePercentage / 100) * 360;
  const doneRadians = (doneAngle * Math.PI) / 180;
  
  // Calculate end point for the first arc
  // For an arc starting at top (0,-100) and sweeping 'doneAngle' degrees
  const endX = Math.sin(doneRadians) * 100;
  const endY = -Math.cos(doneRadians) * 100;
  
  // Calculate inner arc points (60% radius)
  const innerEndX = Math.sin(doneRadians) * 60;
  const innerEndY = -Math.cos(doneRadians) * 60;
  
  // Determine if the arcs need large-arc-flag (1 for angles > 180°)
  const doneLargeArc = doneAngle > 180 ? 1 : 0;
  const receivedLargeArc = (360 - doneAngle) > 180 ? 1 : 0;

  return `
<div class="card">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
 <!-- Background -->
 <rect width="400" height="400" fill="white"/>
 <!-- Title -->
 <text x="200" y="40" font-family="Arial" font-size="20" font-weight="bold" text-anchor="middle">Done and Received Audits</text>
 <!-- Donut Chart -->
 <g transform="translate(200, 200)">
 <!-- First arc (Done) -->
 <path d="M 0 -100
 A 100 100 0 ${doneLargeArc} 1 ${endX} ${endY}
 L ${innerEndX} ${innerEndY}
 A 60 60 0 ${doneLargeArc} 0 0 -60
 Z"
 fill="rgb(124, 77, 255)" stroke="white" stroke-width="1"/>
 <!-- Second arc (Received) -->
 <path d="M ${endX} ${endY}
 A 100 100 0 ${receivedLargeArc} 1 0 -100
 L 0 -60
 A 60 60 0 ${receivedLargeArc} 0 ${innerEndX} ${innerEndY}
 Z"
 fill="rgb(165, 137, 255)" stroke="white" stroke-width="1"/>
 </g>
 <!-- Center Circle with Ratio -->
 <circle cx="200" cy="200" r="55" fill="white" stroke="rgb(124, 77, 255)" stroke-width="2"/>
 <text x="200" y="190" font-family="Arial" font-size="14" text-anchor="middle">Audit Ratio</text>
 <text x="200" y="220" font-family="Arial" font-size="24" font-weight="bold" text-anchor="middle">${auditRatio.toFixed(1)}</text>
 <!-- Legend -->
 <rect x="80" y="320" width="20" height="20" fill="rgb(124, 77, 255)";/>
 <text x="110" y="335" font-family="Arial" font-size="16">Done: ${formatXP(done)} (${donePercentage.toFixed(1)}%)</text>
 <rect x="80" y="350" width="20" height="20" fill="rgb(165, 137, 255)"/>
 <text x="110" y="365" font-family="Arial" font-size="16">Received: ${formatXP(received)} (${receivedPercentage.toFixed(1)}%)</text>
</svg>
</div>
`;
};

function formatXP(bytes) {
  if (bytes >= 1_000_000) {
    return (bytes / 1_000_000).toFixed(2)+ "MB";
  } else if (bytes >= 1_000) {
    return (bytes / 1_000).toFixed(2)+ "KB";
  } else {
    return bytes+ "Bytes";
  }
}