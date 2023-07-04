let btn = document.querySelector('#new-quote'),
    quote = document.querySelector('.quote'),
    person = document.querySelector('.person');
const quotes = [
      {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: "Nelson Mandela"
      },
      {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
      },
      {
        quote: "Your time is limited, don't waste it living someone else's life.",
        person: "Steve Jobs"
      },
      {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon"
      },
      {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        person: "Eleanor Roosevelt"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        person: "Steve Jobs"
      },
      {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        person: "Abraham Lincoln"
      },
      {
        quote: "Believe you can and you're halfway there.",
        person: "Theodore Roosevelt"
      },
      {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        person: "Confucius"
      },
    ];
btn.addEventListener('click', () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
