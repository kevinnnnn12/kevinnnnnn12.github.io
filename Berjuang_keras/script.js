const quotes = [
    '"Your love make me strong,but your hate make me unstoppable". - Cristiano Ronaldo',
    '"Kebajikan ada interpretasi moral tertinggi" - Socrates',
    '"Jam tuhan selalu tepat" - Mikhalio Mudryk',
    '"Kita tidak bisa menjadi apa yang kita ingin, tetapi kita bisa berjuang untuk menjadi lebih baik." - Unknown',
    '"Kesalahan paling fatal umat manusia adalah berharap dengan oang lain." - Unknown'
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}