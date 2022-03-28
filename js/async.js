console.log('cao');
const baseUrl = 'https://olive-bead-glazer.glitch.me';
const sendBtn = document.getElementById('send');

sendBtn.addEventListener('click', sendBrandModel);

async function sendBrandModel() {
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        brand: 'BMW',
        model: 'X5',
      }),
    });
    const data = await res.json();
    console.log('data', data);

    const carDataBeAsync = getCars();
    console.log('carDataBeAsync ===', carDataBeAsync);
    const carData = await getCars();
    renderCars(carData);
  } catch (error) {
    console.log(error);
  }
}

async function getCars() {
  try {
    // throw 'Bla bla bla';
    const res = await fetch(baseUrl);
    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error) {
    console.log(error);
  }

  // fetch(baseUrl)
  //   .then((res) => res.json())
  //   .then((data) => console.log('data', data))
  //   .catch((err) => console.log(err.message));
}

getCars();

function renderCars(arr) {}
