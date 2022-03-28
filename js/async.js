console.log('cao');
const baseUrl = 'https://olive-bead-glazer.glitch.me';
const sendBtn = document.getElementById('send');

sendBtn.addEventListener('click', sendBrandModel);

function sendBrandModel() {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      brand: 'BMW',
      model: 'X5',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('data', data);
      getCars();
    })
    .catch((err) => console.log(err.message));
}

async function getCars() {
  try {
    const res = await fetch(baseUrl + 'sdsd');
    const data = await res.json();
    console.log('data', data);
  } catch (error) {
    console.log(error.message);
  }

  // fetch(baseUrl)
  //   .then((res) => res.json())
  //   .then((data) => console.log('data', data))
  //   .catch((err) => console.log(err.message));
}

getCars();
