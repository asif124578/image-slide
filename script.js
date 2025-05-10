const slides = [
  {
    image: 'https://i.postimg.cc/pdj2yJk4/492341016-975666051421217-9216382340735782284-n.jpg',
    text: 'এই ছবিতে দেখা যাচ্ছে একটি সুন্দর প্রাকৃতিক দৃশ্য।'
  },
  {
    image: 'https://i.postimg.cc/Gmh8BVsN/495066436-984477520540070-9140173791354239092-n.jpg',
    text: 'এখানে দেখা যাচ্ছে একজন ব্যক্তি গাছের পাশে দাঁড়িয়ে আছেন।'
  }
];

let current = 0;

function showSlide(index) {
  const slide = slides[index];
  document.getElementById('slide').src = slide.image;
  document.getElementById('text').innerText = slide.text;
}

function speakText() {
  const text = slides[current].text;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);

showSlide(current);