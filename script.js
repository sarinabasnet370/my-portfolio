// Shared JS for demo pages (all pages include this file)
// Wrap in DOMContentLoaded for safety:
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- FULLSTACK: simulate echo API ---------- */
  const fsForm = document.getElementById('fsForm');
  if (fsForm) {
    fsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('fsMessage').value.trim();
      const resultEl = document.getElementById('fsResult');
      if (!input) { resultEl.textContent = 'Please type a message.'; return; }
      resultEl.textContent = 'Sending to server...';
      // Simulate network latency + JSON response
      setTimeout(() => {
        const simulated = {
          ok: true,
          messageReceived: input,
          serverTime: new Date().toISOString()
        };
        resultEl.textContent = JSON.stringify(simulated, null, 2);
      }, 600);
    });
  }

  /* ---------- CSS: live color picker demo ---------- */
  const colorPicker = document.getElementById('primaryColorPicker');
  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      const v = e.target.value;
      document.documentElement.style.setProperty('--primary', v);
      // Also recolor .btn-custom (inline style fallback)
      document.querySelectorAll('.btn-custom').forEach(b => {
        b.style.background = `linear-gradient(90deg, ${v}, ${v})`;
      });
    });
  }

  /* ---------- JS: counter demo ---------- */
  const incBtn = document.getElementById('incBtn');
  const decBtn = document.getElementById('decBtn');
  const resetBtn = document.getElementById('resetBtn');
  const countEl = document.getElementById('counterValue');
  if (countEl) {
    let counter = 0;
    const update = () => countEl.textContent = counter;
    if (incBtn) incBtn.addEventListener('click', () => { counter++; update(); });
    if (decBtn) decBtn.addEventListener('click', () => { counter--; update(); });
    if (resetBtn) resetBtn.addEventListener('click', () => { counter = 0; update(); });
  }

}); // DOMContentLoaded end
// JavaScript extra: form validation
const jsForm = document.getElementById('jsForm');
if (jsForm) {
  jsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('jsName').value.trim();
    const msg = document.getElementById('formMsg');
    if (!name) {
      msg.textContent = "Name cannot be empty!";
    } else {
      msg.textContent = "Hello, " + name + "!";
      msg.classList.remove("text-danger");
      msg.classList.add("text-success");
    }
  });
}
// Fullstack extra: load users demo
const loadUsersBtn = document.getElementById('loadUsersBtn');
if (loadUsersBtn) {
  loadUsersBtn.addEventListener('click', () => {
    const userList = document.getElementById('userList');
    userList.innerHTML = "Loading...";
    setTimeout(() => {
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ];
      userList.innerHTML = users.map(u => `<li>${u.name}</li>`).join("");
    }, 600);
  });
}
