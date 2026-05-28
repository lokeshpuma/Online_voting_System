const storageKey = "poll-genie-demo-votes";

function getVotes() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    return {
      "Candidate A": 0,
      "Candidate B": 0,
      "Candidate C": 0
    };
  }
  try {
    return JSON.parse(raw);
  } catch (_error) {
    return {
      "Candidate A": 0,
      "Candidate B": 0,
      "Candidate C": 0
    };
  }
}

function saveVotes(votes) {
  localStorage.setItem(storageKey, JSON.stringify(votes));
}

function renderResults() {
  const votes = getVotes();
  const total = Object.values(votes).reduce((sum, value) => sum + value, 0);
  const results = document.getElementById("results");
  results.innerHTML = Object.entries(votes)
    .map(([name, count]) => `<p>${name}: <strong>${count}</strong> vote(s)</p>`)
    .join("") + `<p><strong>Total votes:</strong> ${total}</p>`;
}

document.querySelectorAll(".vote-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const option = button.dataset.option;
    const votes = getVotes();
    votes[option] = (votes[option] || 0) + 1;
    saveVotes(votes);
    renderResults();
  });
});

document.getElementById("resetVotes").addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderResults();
});

document.getElementById("voterLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Voter login demo only: no backend on GitHub Pages.");
});

document.getElementById("adminLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Admin login demo only: no backend on GitHub Pages.");
});

renderResults();
