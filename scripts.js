const g = document.getElementById.bind(document)

const data = [
  {
    name: 'LEGOLAND Discovery Center',
    image:
      'https://mallmaverick.imgix.net/web/property_managers/1/properties/727/stores/legoland_discovery_center/20200316203204/_asset_get_97929',
    address: '4240 Baldwin Rd, Auburn Hills, MI 48326',
    latitude: 42.701848,
    longitude: -83.303547,
    description:
      'A fantastic experience for LEGO enthusiasts of all ages, featuring interactive play areas, building stations, and a 4D cinema.',
  },
  {
    name: 'Pine Knob Ski Resort',
    image:
      'https://www.pineknobskischool.com/uploads/1/2/3/3/123378924/pk-resort-26_1_orig.jpg',
    address: '7778 Sashabaw Rd, Clarkston, MI 48348',
    latitude: 42.72044,
    longitude: -83.368997,
    description:
      'An excellent spot for skiing with young children, offering ski and snowboard lessons, and a variety of slopes and terrain.',
  },
  {
    name: "Carl's Golfland",
    image: 'https://i.ytimg.com/vi/A1BIZchsgZ8/maxresdefault.jpg',
    address: '1975 S Telegraph Rd, Bloomfield Hills, MI 48302',
    latitude: 42.612218,
    longitude: -83.300469,
    description:
      'A golfing experience for all skill levels, providing a driving range, putting greens, a pro shop, and golf lessons.',
  },
  {
    name: 'Youmacon',
    image:
      'https://www.mlive.com/resizer/yRRdhD3dIykaRXuDhABLp_07kIY=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.mlive.com/home/mlive-media/width2048/img/entertainment_impact/photo/25001171-standard.jpg',
    address: '1 Washington Blvd, Detroit, MI 48226',
    latitude: 42.326665,
    longitude: -83.052409,
    description:
      'An annual anime, gaming, and pop culture convention with panels, workshops, gaming tournaments, and cosplay events.',
  },
  {
    name: 'Bloomfield Township Public Library',
    address: '1099 Lone Pine Rd, Bloomfield Township, MI 48302',
    latitude: 42.583191,
    longitude: -83.281824,
    description:
      "A library that hosts author events, book clubs, and children's programs, catering to fans of sci-fi and fantasy novels.",
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
  const review = document.createElement('p')
  review.innerText = item.description
  text.appendChild(review)
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
      coords = [-83.25, 42.58]
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
