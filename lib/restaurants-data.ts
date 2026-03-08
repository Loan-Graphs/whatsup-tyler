export type Restaurant = {
  id: number
  name: string
  category: string
  description: string
  address: string
  priceRange: "$" | "$$" | "$$$"
}

export const restaurants: Restaurant[] = [
  { id: 1, name: "Stanley's Famous Pit Bar-B-Q", category: "BBQ & Smokehouse", description: "Tyler's most legendary BBQ joint. Brisket, ribs, and homemade sides since 1958.", address: "525 S Beckham Ave", priceRange: "$$" },
  { id: 2, name: "ETX Brewing Co.", category: "BBQ & Smokehouse", description: "Award-winning craft brewery with smoked meats. Killer patio vibes.", address: "221 S Broadway Ave", priceRange: "$$" },
  { id: 3, name: "Bodacious Bar-B-Q", category: "BBQ & Smokehouse", description: "East Texas BBQ chain that started in Tyler. Smoke rings and sausage.", address: "Multiple Tyler locations", priceRange: "$" },
  { id: 4, name: "Posado's Cafe", category: "Mexican & Tex-Mex", description: "Tyler's go-to for Tex-Mex. Fajitas, margaritas, and queso.", address: "3333 Troup Hwy", priceRange: "$$" },
  { id: 5, name: "La Cantina", category: "Mexican & Tex-Mex", description: "Authentic Mexican with an extensive tequila menu.", address: "Tyler, TX", priceRange: "$$" },
  { id: 6, name: "Mercado's", category: "Mexican & Tex-Mex", description: "Family-owned Tex-Mex serving Tyler since the 80s.", address: "Tyler, TX", priceRange: "$" },
  { id: 7, name: "The Foundry", category: "American & Burgers", description: "Upscale American eats in a converted industrial space.", address: "Downtown Tyler", priceRange: "$$$" },
  { id: 8, name: "Stirred Coffee + Kitchen", category: "American & Burgers", description: "Best burgers and coffee combo in Tyler.", address: "Tyler, TX", priceRange: "$$" },
  { id: 9, name: "Jucy's Hamburgers", category: "American & Burgers", description: "Tyler's beloved local burger chain.", address: "Multiple Tyler locations", priceRange: "$" },
  { id: 10, name: "Cotton Belt Brewing", category: "American & Burgers", description: "Craft beer and elevated pub food. Rotating taps and live music.", address: "101 W Front St", priceRange: "$$" },
  { id: 11, name: "Cheddar's Scratch Kitchen", category: "Seafood", description: "Fresh seafood and East Texas hospitality. Monte Cristo is legendary.", address: "5130 S Broadway Ave", priceRange: "$$" },
  { id: 12, name: "Fishmonger's Seafood Market", category: "Seafood", description: "Fresh Gulf seafood. Fried catfish basket is a Tyler institution.", address: "Tyler, TX", priceRange: "$$" },
  { id: 13, name: "Fern + Foliage", category: "Brunch & Cafe", description: "Plant-based cafe with creative brunch plates and specialty coffee.", address: "Tyler, TX", priceRange: "$$" },
  { id: 14, name: "Pancho's Mexican Buffet", category: "Brunch & Cafe", description: "Weekend brunch favorite. Massive spread and bottomless coffee.", address: "Tyler, TX", priceRange: "$" },
  { id: 15, name: "The Brick", category: "Brunch & Cafe", description: "Downtown Tyler's cozy brunch spot. Eggs benedict and Bloody Marys.", address: "Downtown Tyler", priceRange: "$$" },
  { id: 16, name: "Bruno's Pizza", category: "Pizza & Italian", description: "Tyler's original pizza joint. Thin crust, generous toppings, 30+ years.", address: "2290 SSE Loop 323", priceRange: "$" },
  { id: 17, name: "Grimaldi's Pizzeria", category: "Pizza & Italian", description: "Coal-fired New York style pizza.", address: "Broadway Square area", priceRange: "$$" },
  { id: 18, name: "Liberty Hall", category: "Bars & Nightlife", description: "Tyler's premier live music venue. Best sound system in East TX.", address: "103 E Line St", priceRange: "$$" },
  { id: 19, name: "Degan's Wine Bar", category: "Bars & Nightlife", description: "Cozy wine bar with Texas wine selection and charcuterie.", address: "302 W Erwin St", priceRange: "$$" },
  { id: 20, name: "Rick's On The Square", category: "Bars & Nightlife", description: "Classic downtown Tyler bar. Cold beer, live music, patio seating.", address: "Tyler Square", priceRange: "$" },
]

export const restaurantCategories = [
  "BBQ & Smokehouse",
  "Mexican & Tex-Mex",
  "American & Burgers",
  "Seafood",
  "Brunch & Cafe",
  "Pizza & Italian",
  "Bars & Nightlife",
]
