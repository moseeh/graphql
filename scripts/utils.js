export function updateMetrics(currentUser) {
  const metricCardPurple = document.querySelector(".metric-card.purple");
  const metricCardBlue = document.querySelector(".metric-card.blue");
  const metricCardGreen = document.querySelector(".metric-card.green");

  const startOfCurrentMonth = new Date();
  startOfCurrentMonth.setDate(1);
  startOfCurrentMonth.setHours(0, 0, 0, 0);

  const totalXP = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "xp" ? totalXP + transaction.amount : totalXP;
  }, 0);

  const totalGrade = currentUser.progresses.reduce((totalGrade, progress) => {
    return progress.grade !== null ? totalGrade + progress.grade : totalGrade;
  }, 0);

  const PreviousTotalXP = currentUser.transactions.reduce((totalXP, transaction) => {
    return transaction.type === "xp" && new Date(transaction.createdAt) < startOfCurrentMonth
      ? totalXP + transaction.amount
      : totalXP;
  }, 0);
  
  const PreviousTotalGrade = currentUser.progresses.reduce((totalGrade, progress) => {
    return progress.grade !== null && new Date(progress.updatedAt) < startOfCurrentMonth? totalGrade + progress.grade : totalGrade;
  }, 0);

  update(metricCardPurple, ((totalXP/PreviousTotalXP)-1)*100, totalXP/50000)
  update(metricCardGreen, ((totalGrade/PreviousTotalGrade)-1)*100, totalGrade/1)
  updateBlue(metricCardBlue, currentUser.events[0].level/60 * 100)

}

function updateBlue(element, progressWidth) {
const progressBar = element.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = `${progressWidth}%`;
  }
}

function update(element, percentage, progressWidth) {
  const trendElement = element.querySelector(".metric-trend");
  if (trendElement) {
    const textNodes = Array.from(trendElement.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE
    );
    console.log(textNodes);
    textNodes[1].nodeValue = ` +${percentage.toFixed(1)}% increase this month`;
  }

  const progressBar = element.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = `${progressWidth}%`;
  }
}
