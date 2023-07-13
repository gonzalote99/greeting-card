let curHr = new Date().getHours();
const dayFormat = new Intl.DateTimeFormat('en', {weekday: 'long'});
const dateFormat = new Intl.DateTimeFormat('en', {year: 'numeric', month: 'long', day: '2-digit' });
const timeFormat = new Intl.DateTimeFormat('en', {hour: 'numeric', minute: 'numeric', second: 'numeric'} );

setInterval(() => {
  const date = new Date();
  document.getElementById('day').innerHTML = dayFormat.format(date);
  document.getElementById('date').innerHTML = dateFormat.format(date);
  document.getElementById('time').innerHTML = timeFormat.format(date);

}, 500);


if(curHr < 12) {
  document.getElementById('greet').innerHTML = 'good morning';
  document.getElementById('greet-img').src = 'https://img.icons8.com/color/48/000000/sun--v3.png';
  document.getElementById('message').innerHTML = 'have a good day';
  document.getElementById('lottie').src = 'https://assets7.lottiefiles.com/packages/lf20_b8z1hjre.json'
}

if(curHr < 16) {
  document.getElementById('greet').innerHTML = 'good afternoon';
  document.getElementById('greet-img').src = 'https://img.icons8.com/office/48/000000/fog-day--v2.png';
  document.getElementById('message').innerHTML = 'have a good rest';
  document.getElementById('lottie').src = 'https://assets6.lottiefiles.com/private_files/lf30_1xg5wkc5.json'
}

else {
  document.getElementById('greet').innerHTML = 'good evening';
  document.getElementById('greet-img').src = 'https://img.icons8.com/office/50/000000/partly-cloudy-night--v2.png';
  document.getElementById('message').innerHTML = 'have a good snacks';
  document.getElementById('lottie').src = 'https://assets5.lottiefiles.com/packages/lf20_rlmeimrj.json'
}