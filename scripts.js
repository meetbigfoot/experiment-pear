const g = document.getElementById.bind(document)

const data = [
  {
    name: 'Visit Koreana Plaza',
    image:
      'https://lh3.googleusercontent.com/p/AF1QipO6o8F8knbtOd7lnuBZNq8DT6uFBev-sHFOmoEF=s1360-w1360-h1020',
    address: '2370 Telegraph Ave, Oakland, CA 94612',
    latitude: 37.813575,
    longitude: -122.267254,
    reason:
      'Delight in exploring the aisles filled with Korean ingredients and discover new flavors to elevate your home-cooked meals.',
  },
  {
    name: 'Explore the UC Berkeley campus',
    image:
      'https://d3qvqlc701gzhm.cloudfront.net/thumbs/72faedaefe8cc6a5d08cf0b61e83813441db0f754d1077429eb0b777e53dbba3-750.jpg',
    address: 'Berkeley, CA 94720',
    latitude: 37.871853,
    longitude: -122.258423,
    reason:
      'Stroll through the picturesque campus, surrounded by the unique blend of academic spirit and historical charm.',
  },
  {
    name: 'Attend a Golden State Warriors game',
    image:
      'https://images.ctfassets.net/0lzgl3qjkmm1/8IXq9IhcwPQCX0qcVnMx7/153f7a46c48644add64f7f14ddbc7706/cc-groups-1080.png',
    address: 'Chase Center, 1 Warriors Way, San Francisco, CA 94158',
    latitude: 37.767998,
    longitude: -122.387694,
    reason:
      'Feel the adrenaline rush as you join fellow fans in cheering on the Warriors in their pursuit of victory.',
  },
  {
    name: 'Visit the Oakland Museum of California',
    image:
      'https://museumca.org/wp-content/uploads/2022/09/2022_OMCA_LunarNewYear_Entrance_Line_Visitors_Photocredit_ChristineCueto_DSF0560.jpg',
    address: '1000 Oak St, Oakland, CA 94607',
    latitude: 37.798599,
    longitude: -122.26421,
    reason:
      "Lose yourself in the captivating stories of California's past while enjoying a leisurely and educational day out.",
  },
  {
    name: 'Tour historic Old Oakland',
    image:
      'https://bdearch.com/assets/img/featured_img/old-oakland-architecture_featured.jpg',
    address: 'Old Oakland, Oakland, CA 94607',
    latitude: 37.801231,
    longitude: -122.274569,
    reason:
      'Experience the charm of yesteryear as you meander through the enchanting Victorian-lined streets of Old Oakland.',
  },
  {
    name: 'Kingston 11 Cuisine',
    image:
      'https://duyt4h9nfnj50.cloudfront.net/resized/1537211574272-w2880-87.jpg',
    address: '2270 Telegraph Ave, Oakland, CA 94612',
    latitude: 37.813388,
    longitude: -122.267158,
    reason:
      'Treat yourself to a fusion of flavors by trying the delicious Korean-Jamaican dishes at this unique and innovative restaurant.',
  },
  {
    name: 'Rosie the Riveter WWII Home Front National Historical Park',
    image:
      'https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/styles/fluid_1200/public/vc_rosietheriveterworldwariihomefront_su_nps_2ad01d77_1280x640.jpg?itok=T-F5l8dE',
    address: '1414 Harbour Way S #3000, Richmond, CA 94804',
    latitude: 37.916998,
    longitude: -122.365487,
    reason:
      'Immerse yourself in the inspiring stories of the WWII home front by visiting this historical park in Richmond, which played a vital role in wartime production.',
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
  review.innerText = item.reason
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
      coords = [-122.29, 37.83]
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
