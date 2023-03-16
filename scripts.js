const g = document.getElementById.bind(document)

const data = [
  {
    name: 'Kiraku',
    latitude: 37.859717,
    longitude: -122.291273,
    address: '2566 Telegraph Ave, Berkeley, CA 94704',
    recommended_rolls: {
      unique: 'Kiraku Roll',
      popular: 'Spider Roll',
    },
    website: 'https://www.kiraku-berkeley.com/',
    image:
      'https://s3-media0.fl.yelpcdn.com/bphoto/mbrS9-YBB8E9GVxbdV-AHg/l.jpg',
    review:
      "Kiraku is a standout among Berkeley's many sushi restaurants, offering high-quality, creative sushi rolls in a warm and inviting atmosphere. Their Kiraku Roll, with tempura shrimp, crab, and avocado, is a must-try, as is their classic Spider Roll. Highly recommended.",
  },
  {
    name: 'Ippuku',
    latitude: 37.868908,
    longitude: -122.266634,
    address: '2130 Center St, Berkeley, CA 94704',
    recommended_rolls: {
      unique: 'Kinoko Roll',
      popular: 'Spider Roll',
    },
    website: 'https://www.ippukuberkeley.com/',
    image:
      'https://img.theculturetrip.com/450x/smart/wp-content/uploads/2016/02/Behind-the-counter-%C2%A9-Sharon-Hanh-DarlinFlickr.jpg',
    review:
      'For an authentic Japanese dining experience in Berkeley, look no further than Ippuku. Their Kinoko Roll, with mushroom tempura and shiso, is a standout among their many sushi offerings, while their Spider Roll remains a perennial favorite. With excellent service and a cozy atmosphere, Ippuku is a must-visit for sushi lovers in the East Bay.',
  },
  {
    name: 'Sushi Sho',
    latitude: 37.826435,
    longitude: -122.253869,
    address: '1702 Telegraph Ave, Oakland, CA 94612',
    recommended_rolls: {
      unique: 'Garlic Albacore Roll',
      popular: 'Rainbow Roll',
    },
    website: 'https://sushishooakland.com/',
    image:
      'https://images.squarespace-cdn.com/content/v1/53b0758fe4b0ac0875470ce4/1405403934344-O413E589V8MBZWNAS7ZC/IMG_6116.jpg',
    review:
      'Sushi Sho is a hidden gem in downtown Oakland, offering a range of fresh and flavorful sushi rolls in a low-key, unpretentious atmosphere. Their Garlic Albacore Roll, with albacore, avocado, and garlic mayo, is a standout among their many offerings, while their Rainbow Roll remains a perennial favorite. Highly recommended for sushi lovers looking for a casual, no-frills experience.',
  },
  {
    name: 'Sushi House',
    latitude: 37.762041,
    longitude: -122.240408,
    address: '2375 Shoreline Dr, Alameda, CA 94501',
    recommended_rolls: {
      unique: 'Crazy Horse Roll',
      popular: 'Dragon Roll',
    },
    website: 'https://www.sushihousealameda.com/',
    image:
      'https://fastly.4sqi.net/img/general/600x600/LzFTWoWO2BGhYB6AgbWEHB9f4GvNEuAOwDhXWukAFc8.jpg',
    review:
      'Sushi House is a top-notch Japanese restaurant in Alameda, with a wide range of sushi options to choose from. Their Crazy Horse Roll, with baked crab, eel, and avocado, is a must-try, while their Dragon Roll remains a favorite among regulars. With excellent service and a sleek, modern atmosphere, Sushi House is a great choice for a special night out.',
  },
  {
    name: 'Geta Sushi',
    latitude: 37.802421,
    longitude: -122.269919,
    address: '165 41st St, Oakland, CA 94611',
    recommended_rolls: {
      unique: 'Ahi Tuna Tower',
      popular: 'Caterpillar Roll',
    },
    website: 'http://www.getasushi.com/',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/09/43/58/4f/geta-sushi-and-bento.jpg',
    review:
      'Geta Sushi is a must-visit for sushi lovers in Oakland, with a wide range of delicious and creative sushi rolls to choose from. Their Ahi Tuna Tower, with layers of tuna and avocado, is a standout among their many offerings, while their Caterpillar Roll remains a crowd-pleaser. With friendly service and a laid-back atmosphere, Geta Sushi is a great choice for a casual dinner with friends or family.',
  },
  {
    name: 'Hana Japan',
    latitude: 37.76427,
    longitude: -122.245931,
    address: '2211 S Shore Center, Alameda, CA 94501',
    recommended_rolls: {
      unique: 'Hana Japan Roll',
      popular: 'Rainbow Roll',
    },
    website: 'https://www.hanajapanalameda.com/',
    image:
      'https://images.squarespace-cdn.com/content/v1/5e3c98db624cf612084848d9/1581033641738-67GNBVQK19MKEYM0G79T/Hana_Japan25721.JPG',
    review:
      'Hana Japan is a top-notch Japanese restaurant in Alameda, with a wide range of sushi options to choose from. Their Hana Japan Roll, with salmon, avocado, and spicy mayo, is a must-try, while their Rainbow Roll remains a favorite among regulars. With excellent service and a sleek, modern atmosphere, Hana Japan is a great choice for a special night out.',
  },
  {
    name: "Yoshi's",
    latitude: 37.799307,
    longitude: -122.268963,
    address: '510 Embarcadero W, Oakland, CA 94607',
    recommended_rolls: {
      unique: "Yoshi's Roll",
      popular: 'Caterpillar Roll',
    },
    website: 'https://www.yoshis.com/oakland/restaurant',
    image:
      'https://d1ralsognjng37.cloudfront.net/71bef932-395b-4945-823d-bb9aebb3b1d3.jpeg',
    review:
      "Yoshi's is a Japanese restaurant located in Oakland's Jack London Square, offering a range of sushi rolls and other Japanese dishes. Their Yoshi's Roll, with crab, avocado, and eel, is a standout among their many offerings, while their Caterpillar Roll remains a perennial favorite. With live music and a vibrant atmosphere, Yoshi's is a great choice for a night out with friends or a special occasion.",
  },
  {
    name: 'Kansai',
    latitude: 37.952167,
    longitude: -122.042243,
    address: '4390 Treat Blvd, Concord, CA 94521',
    recommended_rolls: {
      unique: 'Kansai Roll',
      popular: 'California Roll',
    },
    website: 'http://kansaiconcord.com/',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/39a1e9e103ff2870dab60ebe17b72787/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg',
    review:
      'Kansai is a Japanese restaurant located in Concord, offering a range of sushi rolls and other Japanese dishes. Their Kansai Roll, with spicy tuna, cucumber, and jalapeño, is a must-try, while their California Roll remains a popular choice. With excellent service and a welcoming atmosphere, Kansai is a great choice for a casual dinner with friends or family.',
  },
  {
    name: 'Ohgane',
    latitude: 37.814101,
    longitude: -122.265969,
    address: '3915 Broadway, Oakland, CA 94611',
    recommended_rolls: {
      unique: 'Ohgane Roll',
      popular: 'Spider Roll',
    },
    website: 'http://www.ohgane.com/',
    image: 'https://resizer.otstatic.com/v2/photos/xlarge/1/24807335.jpg',
    review:
      'Ohgane is a popular Korean BBQ restaurant in Oakland that also offers sushi. Their Ohgane Roll, with spicy tuna and avocado, is a unique and flavorful sushi roll that is definitely worth trying, while their Spider Roll remains a popular choice. With its lively atmosphere and friendly service, Ohgane is a great choice for a casual night out with friends or family.',
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
  const name = document.createElement('h2')
  name.innerText = item.name
  text.appendChild(name)
  const address = document.createElement('small')
  address.innerText = item.address
  text.appendChild(address)
  const review = document.createElement('p')
  review.innerText = item.review
  text.appendChild(review)
  const stats = document.createElement('div')
  const stat1 = document.createElement('div')
  stat1.innerHTML = `<b>Most unique roll</b> ${item.recommended_rolls.unique}`
  const stat2 = document.createElement('div')
  stat2.innerHTML = `<b>Most popular roll</b> ${item.recommended_rolls.popular}`
  stats.appendChild(stat1)
  stats.appendChild(stat2)
  text.appendChild(stats)
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
      coords = [-122.27, 37.8]
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
