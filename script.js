// Sample data
let commissions = [
  { id: 1, client: "Alex", type: "Portrait", status: "In Progress", eta: "2 weeks" },
  { id: 2, client: "Jordan", type: "Full Body", status: "Waiting", eta: "TBD" }
];

// Render portfolio (add your image URLs)
function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  // Example images - replace with yours
  const images = ['image1.jpg', 'image2.jpg']; 
  images.forEach(src => {
    grid.innerHTML += `<img src="${src}" class="rounded-xl hover:scale-105 transition">`;
  });
}

// Form handler
document.getElementById('commission-form')?.addEventListener('submit', e => {
  e.preventDefault();
  alert("Request received! I'll review and get back to you soon.");
  // In real app: send to backend or email
  window.location.href = 'queue.html';
});

// Render queue
function renderQueue() {
  const list = document.getElementById('queue-list');
  commissions.forEach(c => {
    list.innerHTML += `
      <div class="bg-zinc-800 p-6 rounded-xl flex justify-between">
        <div>
          <strong>${c.client} - ${c.type}</strong>
          <p class="text-sm text-zinc-400">${c.status}</p>
        </div>
        <span class="text-amber-400">${c.eta}</span>
      </div>`;
  });
}

// Artist functions (update status, reorder, etc.)
function updateStatus(id, newStatus) {
  const comm = commissions.find(c => c.id === id);
  if (comm) comm.status = newStatus;
  renderQueue(); // Sync public view
}

// Initialize
renderPortfolio();
renderQueue();
