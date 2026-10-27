const input = document.getElementById('userInput');
const messages = document.getElementById('chatMessages');
const form = document.getElementById('chatForm');

function openChat() {
  document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => input.focus(), 300);
}
function askQuestion(question) {
  openChat();
  input.value = question;
  setTimeout(sendMessage, 250);
}
form.addEventListener('submit', event => {
  event.preventDefault();
  sendMessage();
});
function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  setTimeout(() => addMessage(getResponse(text), 'bot'), 350);
}
function addMessage(text, type) {
  const item = document.createElement('div');
  item.className = `message ${type}`;
  // Use textContent so user input is displayed as text, not executable HTML.
  item.textContent = text;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
}
function getResponse(text) {
  const q = text.toLowerCase();
  if (q.includes('course') || q.includes('program')) return 'Sample courses shown here include B.Tech CSE, ECE, Mechanical Engineering and Civil Engineering. Please verify availability with your college.';
  if (q.includes('admission') || q.includes('apply')) return 'Admission may involve checking eligibility, completing an application and submitting documents. Check your college’s official website for current rules and dates.';
  if (q.includes('fee')) return 'Fees vary by college and course. This demo does not contain verified fee data; please consult the official fee structure.';
  if (q.includes('hostel') || q.includes('accommodation')) return 'Hostel availability, facilities and fees vary by college. Please confirm details with the college administration.';
  if (q.includes('scholarship')) return 'Scholarship eligibility and deadlines vary. Check official college notices and scholarship portals for accurate information.';
  if (q.includes('exam')) return 'Please check your college’s official examination notices or academic calendar for current dates and updates.';
  return 'Thanks for your question! This is a frontend demo chatbot with predefined JavaScript responses. A Python backend may be added in a future version.';
}
function clearChat() {
  messages.replaceChildren();
  addMessage('Hello! 👋 I’m your College Assistant demo. What would you like to know?', 'bot');
}
