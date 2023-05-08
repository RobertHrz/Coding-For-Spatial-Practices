document.addEventListener('DOMContentLoaded', function () {
  const clickableArea = document.getElementById('clickableArea');
  const songTitle = document.getElementById('songTitle');
  const lyric = document.getElementById('lyric');

  const lyrics = [
    { text: "How many roads must a man walk down, before you call him a man?", title: "Blowin' in the Wind" },
    { text: "Yes, 'n' how many seas must a white dove sail, before she sleeps in the sand?", title: "Blowin' in the Wind" },
    { text: "The answer, my friend, is blowin' in the wind", title: "Blowin' in the Wind" },
    { text: "You don't need a weatherman to know which way the wind blows", title: "Subterranean Homesick Blues" },
    { text: "Don't think twice, it's all right", title: "Don't Think Twice, It's All Right" },
    { text: "Hey! Mr. Tambourine Man, play a song for me", title: "Mr. Tambourine Man" },
    { text: "The times they are a-changin'", title: "The Times They Are a-Changin'" },
    { text: "You say you're lookin' for someone who's never weak but always strong", title: "I Shall Be Released" },
    { text: "I ain't gonna work on Maggie's farm no more", title: "Maggie's Farm" },
    { text: "You don't need a weatherman to know which way the wind blows", title: "Subterranean Homesick Blues" },
    { text: "How does it feel, how does it feel?", title: "Like a Rolling Stone" },
    { text: "I wish that for just one time, you could stand inside my shoes", title: "Positively 4th Street" },
    { text: "You got a lotta nerve to say you are my friend", title: "Positively 4th Street" },
    { text: "You say you lost your faith, but that's not where it's at", title: "Absolutely Sweet Marie" },
    { text: "You got your mind in the gutter, you're kneeling in the pew", title: "Trust Yourself" },
    { text: "Strike another match, go start anew", title: "Meet Me in the Morning" },
    { text: "I see you got your brand new leopard-skin pill-box hat", title: "Leopard-Skin Pill-Box Hat" },
    { text: "You know it balances on your head just like a mattress balances on a bottle of wine", title: "Leopard-Skin Pill-Box Hat" },
    { text: "To be stuck inside of Mobile with the Memphis blues again", title: "Stuck Inside of Mobile with the Memphis Blues Again" },
    { text: "I'll let you be in my dreams if I can be in yours", title: "Talkin' World War III Blues" },
    { text: "It's a hard rain's a-gonna fall", title: "A Hard Rain's A-Gonna Fall" },
    { text: "I gave her my heart but she wanted my soul", title: "Don't Think Twice, It's All Right" },
  ];

  function getRandomLyric() {
    const index = Math.floor(Math.random() * lyrics.length);
    return lyrics[index];
  }

  clickableArea.addEventListener('click', function() {
    const randomLyric = getRandomLyric();
    songTitle.textContent = randomLyric.title;
    lyric.textContent = randomLyric.text;
  });

});