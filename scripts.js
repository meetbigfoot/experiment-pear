const g = document.getElementById.bind(document)

const data = [
  {
    name: 'Tartine Bakery',
    latitude: 37.761425,
    longitude: -122.424104,
    address: '600 Guerrero St, San Francisco, CA 94110',
    review:
      'With its legendary morning buns and rustic breads, Tartine Bakery is an iconic San Francisco institution. - Eater SF',
  },
  {
    name: 'B. Patisserie',
    latitude: 37.788549,
    longitude: -122.440971,
    address: '2821 California St, San Francisco, CA 94115',
    review:
      "B. Patisserie's kouign-amann is a must-try, a flaky, buttery pastry that has earned rave reviews. - SF Chronicle",
  },
  {
    name: 'Arsicault Bakery',
    latitude: 37.785632,
    longitude: -122.459545,
    address: '397 Arguello Blvd, San Francisco, CA 94118',
    review:
      "Arsicault Bakery's croissants have been deemed America's best by Bon Appétit magazine.",
  },
  {
    name: 'Mr. Holmes Bakehouse',
    latitude: 37.788643,
    longitude: -122.418408,
    address: '1042 Larkin St, San Francisco, CA 94109',
    review:
      'The cruffin, a croissant-muffin hybrid, is the star at Mr. Holmes Bakehouse. - Thrillist',
  },
  {
    name: 'b. on the go',
    latitude: 37.788549,
    longitude: -122.440971,
    address: '2794 California St, San Francisco, CA 94115',
    review:
      'b. on the go is praised for its delectable pressed sandwiches. - SF Eater',
  },
  {
    name: 'Kantine',
    latitude: 37.774814,
    longitude: -122.437192,
    address: '1906 Market St, San Francisco, CA 94102',
    review:
      'Kantine offers excellent smørrebrød, a Scandinavian take on open-faced sandwiches. - San Francisco Magazine',
  },
  {
    name: 'Neighbor Bakehouse',
    latitude: 37.760203,
    longitude: -122.388719,
    address: '2343 3rd St, San Francisco, CA 94107',
    review:
      "Neighbor Bakehouse's ginger pull-apart bread is a standout favorite. - SF Weekly",
  },
  {
    name: 'Craftsman and Wolves',
    latitude: 37.760487,
    longitude: -122.421591,
    address: '746 Valencia St, San Francisco, CA 94110',
    review:
      'The Rebel Within, a savory muffin with a soft egg inside, is the signature creation at Craftsman and Wolves. - SF Chronicle',
  },
  {
    name: 'Noe Valley Bakery',
    latitude: 37.751986,
    longitude: -122.428646,
    address: '4073 24th St, San Francisco, CA',
    review:
      'The chocolate salted caramel cupcake at Noe Valley Bakery is a perfect balance of sweet and salty, making it a must-try for dessert lovers. - Eater SF',
  },
  {
    name: 'Thorough Bread and Pastry',
    latitude: 37.763214,
    longitude: -122.430788,
    address: '248 Church St, San Francisco, CA 94114',
    review:
      "Thorough Bread and Pastry's almond bear claw is a crowd favorite. - SF Weekly",
  },
  {
    name: 'Marla Bakery',
    latitude: 37.780078,
    longitude: -122.490236,
    address: '3619 Balboa St, San Francisco, CA 94121',
    review:
      'The rosemary and potato flatbread is a must-try at Marla Bakery. - SF Magazine',
  },
  {
    name: 'La Boulangerie de San Francisco',
    latitude: 37.798612,
    longitude: -122.407055,
    address: '222 Sutter St, San Francisco, CA 94108',
    review:
      'La Boulangerie de San Francisco offers a delightful almond croissant. - Eater SF',
  },
  {
    name: "Devil's Teeth Baking Company",
    latitude: 37.751417,
    longitude: -122.508031,
    address: '3876 Noriega St, San Francisco, CA 94122',
    review:
      "The beignets at Devil's Teeth Baking Company are not to be missed. - SF Chronicle",
  },
  {
    name: 'Jane The Bakery',
    latitude: 37.767219,
    longitude: -122.428962,
    address: '1881 Geary Blvd, San Francisco, CA 94115',
    review: 'The cinnamon roll at Jane The Bakery is a must-try. - SF Eater',
  },
  {
    name: "Schubert's Bakery",
    latitude: 37.782908,
    longitude: -122.460435,
    address: '521 Clement St, San Francisco, CA 94118',
    review:
      "The Swedish Princess Cake is a Schubert's Bakery classic. - SF Magazine",
  },
  {
    name: 'The Midwife and The Baker',
    latitude: 37.373194,
    longitude: -122.030181,
    address: '846 Independence Ave, Mountain View, CA 94043',
    review:
      "The Midwife and The Baker's sprouted wheat bread is a standout offering. - Eater SF",
  },
  {
    name: "Dianda's Italian American Pastry",
    latitude: 37.742436,
    longitude: -122.422853,
    address: '2883 Mission St, San Francisco, CA 94110',
    review:
      "The Italian rum cake at Dianda's Italian American Pastry is not to be missed. - SF Chronicle",
  },
  {
    name: 'Breadbelly',
    latitude: 37.780078,
    longitude: -122.490236,
    address: '1408 Clement St, San Francisco, CA 94118',
    review:
      "Breadbelly's kaya toast is a unique and delicious combination of sweet and savory flavors that has quickly become a local favorite. - SF Chronicle",
  },
  {
    name: 'Fournée Bakery',
    latitude: 37.857097,
    longitude: -122.253152,
    address: '2912 Domingo Ave, Berkeley, CA 94705',
    review:
      'The ham and cheese croissant at Fournée Bakery is a must-try. - SF Chronicle',
  },
  {
    name: '20th Century Cafe',
    latitude: 37.776548,
    longitude: -122.422986,
    address: '198 Gough St, San Francisco, CA 94102',
    review:
      'The Russian honey cake at 20th Century Cafe is a standout favorite. - Eater SF',
  },
]

data.forEach((item) => {
  const card = document.createElement('div')
  card.className = 'card'
  const name = document.createElement('h2')
  name.innerText = item.name
  card.appendChild(name)
  const review = document.createElement('p')
  review.innerText = item.review
  card.appendChild(review)
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
      coords = [-122.45, 37.77]
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
