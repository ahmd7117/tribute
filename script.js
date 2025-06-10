const sections = [
  {
    title: "میرے دل کی ملکہ",
    text: "تم ہو میری زندگی کی روشنی، تمہاری مسکان میں بسی میری صبح، اور تمہاری خوابوں میں میری آس۔",
  },
  {
    title: "شاعری تمہارے نام",
    text: `بھلے دنوں کی بات تھی<br>
           بھلی سی ایک شکل تھی<br>
           نہ یہ کہ حسنِ تمام ہو<br>
           نہ دیکھنے میں عام سی...<br><br>
           نہ یہ کہ وہ چلے تو کہکشاں سی رہگزر لگے...<br>
           مگر وہ ساتھ ہو تو پھر بھلا بھلا سفر لگے...`,
  },
  {
    title: "اقتباسات دل سے",
    text: `“تیری مسکان میری دنیا کا سلسلہ ہے”<br>
           “جب تم ساتھ ہوتی ہو، ہر لمحہ جادوئی لگتا ہے”<br>
           “پھولوں کا رنگ بھی تمہاری خوشبو میں گھل جاتا ہے”`,
  },
  {
    title: "ہمیشہ کے لئے",
    text: "تم میری ہر صبح اور شام ہو—اس دل کے سفر کی انتہا تم ہو۔",
  }
];

let current = 0;
const sectionDiv = document.getElementById('section');
const nextBtn = document.getElementById('nextBtn');

function showSection(idx) {
  const s = sections[idx];
  sectionDiv.innerHTML = `<h2>${s.title}</h2><p>${s.text}</p>`;
  sectionDiv.classList.add('fade-in');
  setTimeout(() => sectionDiv.classList.remove('fade-in'), 1200);
}

nextBtn.addEventListener('click', () => {
  current = (current + 1) % sections.length;
  showSection(current);
});

// Initialize
showSection(0);
