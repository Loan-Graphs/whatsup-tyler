export interface Event {
  id: number
  name: string
  category: string
  description: string
  location: string
}

export const events: Event[] = [
  { id: 1, name: "Caldwell Zoo", category: "Family", description: "One of the top free-admission zoos in the US. 3,500+ animals.", location: "4001 Martin Luther King Blvd" },
  { id: 2, name: "Tyler Rose Garden", category: "Outdoors", description: "The largest rose garden in the US - 35,000 rose bushes, 500 varieties.", location: "420 Rose Park Dr" },
  { id: 3, name: "Tyler State Park", category: "Outdoors", description: "Hiking, swimming, and camping in the Piney Woods.", location: "789 Park Rd 16" },
  { id: 4, name: "Cotton Belt Brewing", category: "Food & Drink", description: "Local craft brewery with rotating taps and live music weekends.", location: "101 W Front St" },
  { id: 5, name: "Liberty Hall", category: "Nightlife", description: "Tyler's premier live music venue. Local and touring acts every weekend.", location: "103 E Line St" },
  { id: 6, name: "Lake Tyler", category: "Outdoors", description: "Kayaking, fishing, and paddleboarding on Tyler's city lake.", location: "4000 S Loop 323" },
  { id: 7, name: "The Foundry", category: "Food & Drink", description: "Upscale American eats in a converted industrial space. Great cocktails.", location: "Downtown Tyler" },
  { id: 8, name: "Goodman-LeGrand Museum", category: "Arts", description: "Historic home museum showcasing East Texas history and artifacts.", location: "624 N Broadway Ave" },
  { id: 9, name: "Discovery Science Place", category: "Family", description: "Hands-on science museum for all ages.", location: "308 N Broadway Ave" },
  { id: 10, name: "Lake Palestine", category: "Outdoors", description: "Boating, fishing, and waterfront dining 30 min from Tyler.", location: "Frankston, TX" },
  { id: 11, name: "Bergfeld Park", category: "Family", description: "Tyler's beloved city park - walking trails and weekend events.", location: "1510 S College Ave" },
  { id: 12, name: "Tyler Museum of Art", category: "Arts", description: "Regional and national exhibitions in a modern gallery space.", location: "1300 S Mahon Ave" },
  { id: 13, name: "East Texas State Fair", category: "Family", description: "Annual September fair with rides, food, livestock, and concerts.", location: "2112 W Front St" },
  { id: 14, name: "ETX Brewing Co.", category: "Food & Drink", description: "Award-winning craft brewery with full food menu and patio.", location: "221 S Broadway Ave" },
  { id: 15, name: "Cinergy Tyler", category: "Family", description: "Bowling, mini golf, go-karts, and arcade all in one spot.", location: "6800 S Broadway Ave" },
  { id: 16, name: "Degan's Wine Bar", category: "Nightlife", description: "Cozy wine bar with Texas wine selection and small plates.", location: "302 W Erwin St" },
  { id: 17, name: "Fern + Foliage", category: "Food & Drink", description: "Plant-based cafe with creative brunch plates and specialty coffee.", location: "Tyler, TX" },
  { id: 18, name: "Rosevine Inn B&B", category: "Arts", description: "Charming bed and breakfast with rose gardens.", location: "415 S Vine Ave" },
  { id: 19, name: "UT Tyler Patriot Arena", category: "Family", description: "Home to UT Tyler athletics - games and events year-round.", location: "3900 University Blvd" },
  { id: 20, name: "Oil Museum", category: "Arts", description: "History of the East Texas oil boom in a fascinating exhibit.", location: "Tyler, TX" },
]
