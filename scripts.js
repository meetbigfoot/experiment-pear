const g = document.getElementById.bind(document)

const data = [
  {
    name: 'Milwaukee Public Museum',
    image:
      'https://www.milwaukeemag.com/wp-content/uploads/2022/07/05-Commons_05-scaled.jpg',
    latitude: 43.040613,
    longitude: -87.920495,
  },
  {
    name: 'Milwaukee County Zoo',
    image:
      'https://www.travelwisconsin.com/uploads/places/4f/4ff458ad-e148-486a-ad43-9ba9312166bf-elephants-in-pool-07-2021-37-e.jpg',
    latitude: 43.031288,
    longitude: -88.040855,
  },
  {
    name: 'Discovery World',
    image: 'https://govalleykids.com/wp-content/uploads/2018/04/IMG_2908.jpg',
    latitude: 43.036859,
    longitude: -87.897454,
  },
  {
    name: 'Mitchell Park Horticultural Conservatory (The Domes)',
    image:
      'https://www.gannett-cdn.com/presto/2019/03/11/PMJS/e1125c1d-98d3-4771-9368-1d02b901bcee-MJS_domes_5_hoffman.jpg_domes.JPG',
    latitude: 43.025793,
    longitude: -87.947079,
  },
  {
    name: "Betty Brinn Children's Museum",
    latitude: 43.038927,
    longitude: -87.897657,
  },
  {
    name: 'Milwaukee Art Museum',
    latitude: 43.040243,
    longitude: -87.897607,
  },
  {
    name: 'Boerner Botanical Gardens',
    latitude: 42.941104,
    longitude: -88.008705,
  },
  {
    name: 'Historic Third Ward',
    latitude: 43.033116,
    longitude: -87.908005,
  },
  {
    name: 'Urban Ecology Center',
    latitude: 43.05947,
    longitude: -87.899935,
  },
]

data.forEach((item) => {
  const card = document.createElement('div')
  card.className = 'card'
  const image = document.createElement('div')
  image.className = 'card-image'
  image.style.backgroundImage = `url(${item.image})`
  card.appendChild(image)
  const text = document.createElement('div')
  text.className = 'card-text'
  const top = document.createElement('div')
  top.className = 'card-top'
  const name = document.createElement('h2')
  name.className = 'card-name'
  name.innerText = item.name
  top.appendChild(name)
  const directions = document.createElement('a')
  directions.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    item.address,
  )}`
  directions.innerText = 'Get directions'
  top.appendChild(directions)
  text.appendChild(top)
  // const review = document.createElement('p')
  // review.innerText = item.review
  // text.appendChild(review)
  card.appendChild(text)
  g('list').appendChild(card)
})

let coords

function initMap() {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWF0dGJvcm4iLCJhIjoiY2w1Ym0wbHZwMDh3eTNlbnh1aW51cm0ydyJ9.Z5h4Vkk8zqjf6JydrOGXGA'

  navigator.geolocation.getCurrentPosition(
    (p) => {
      coords = [p.coords.longitude, p.coords.latitude]
      renderMap()
    },
    (e) => {
      coords = [-87.9, 43.04]
      renderMap()
    },
  )
}

function renderMap() {
  // console.log(coords)
  const map = new mapboxgl.Map({
    center: coords,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    zoom: 11,
  })
  map.addControl(new mapboxgl.NavigationControl())
  const marker1 = new mapboxgl.Marker().setLngLat(coords).addTo(map)
  data.forEach((item) => {
    const marker = new mapboxgl.Marker()
      .setLngLat([item.longitude, item.latitude])
      .addTo(map)
  })
}

initMap()

ScrollReveal().reveal('.card', {
  cleanup: true,
  container: '#listicle',
  distance: '20%',
  interval: 100,
  origin: 'bottom',
})
