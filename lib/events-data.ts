export type Event = {
  id: number
  name: string
  category: string
  description: string
  location: string
  date: string
}

export const eventCategories = ["Outdoors", "Food & Drink", "Arts & Culture", "Family", "Nightlife", "Sports"]

export const events: Event[] = [
  { id: 1, name: "Caldwell Zoo Weekend Safari", category: "Family", description: "Explore one of Texas's top-rated zoos with over 2,000 animals.", location: "Caldwell Zoo", date: "Every Weekend" },
  { id: 2, name: "Tyler Rose Garden Tour", category: "Outdoors", description: "Walk through 14 acres of the nation's largest municipal rose garden.", location: "Tyler Rose Garden", date: "Daily" },
  { id: 3, name: "Tyler State Park Trail Day", category: "Outdoors", description: "Hiking, biking, and kayaking in 985 acres of East Texas pines.", location: "Tyler State Park", date: "Weekends" },
  { id: 4, name: "Cotton Belt Brewing Tap Takeover", category: "Food & Drink", description: "Rotating guest brewery takeovers with live music and food trucks.", location: "Cotton Belt Brewing", date: "First Friday" },
  { id: 5, name: "Liberty Hall Live Music Night", category: "Nightlife", description: "Tyler's best live music venue featuring local and touring bands.", location: "Liberty Hall", date: "Fri & Sat" },
  { id: 6, name: "Lake Tyler Sunset Paddle", category: "Outdoors", description: "Kayak and paddleboard rentals at sunset.", location: "Lake Tyler", date: "Weekends" },
  { id: 7, name: "The Foundry Chef's Table", category: "Food & Drink", description: "Exclusive multi-course dinner with wine pairings.", location: "The Foundry", date: "Monthly" },
  { id: 8, name: "Goodman-LeGrand Museum Tour", category: "Arts & Culture", description: "Step back in time in this 1859 antebellum home turned museum.", location: "Goodman-LeGrand Museum", date: "Tue-Sat" },
  { id: 9, name: "Discovery Science Place Kids Day", category: "Family", description: "Hands-on science exhibits and workshops for kids.", location: "Discovery Science Place", date: "Saturdays" },
  { id: 10, name: "Lake Palestine Fishing Tournament", category: "Sports", description: "Annual bass fishing tournament on one of East Texas's premier lakes.", location: "Lake Palestine", date: "Spring" },
  { id: 11, name: "Bergfeld Park Farmers Market", category: "Food & Drink", description: "Fresh local produce, artisan goods, and live music.", location: "Bergfeld Park", date: "Saturdays" },
  { id: 12, name: "Tyler Museum of Art Exhibition", category: "Arts & Culture", description: "Rotating exhibitions featuring regional and national artists.", location: "Tyler Museum of Art", date: "Tue-Sun" },
  { id: 13, name: "East Texas State Fair", category: "Family", description: "The biggest annual event in Tyler. Rides, food, livestock shows.", location: "East Texas State Fairgrounds", date: "September" },
  { id: 14, name: "ETX Brewing Co. Trivia Night", category: "Nightlife", description: "Weekly pub trivia with craft beer specials.", location: "ETX Brewing Co.", date: "Wednesdays" },
  { id: 15, name: "Cinergy Tyler Movie Night", category: "Family", description: "Luxury recliners, bowling, and arcade games.", location: "Cinergy Tyler", date: "Daily" },
  { id: 16, name: "Degan's Wine Tasting", category: "Food & Drink", description: "Weekly wine tastings featuring Texas vineyards.", location: "Degan's Wine Bar", date: "Thursdays" },
  { id: 17, name: "Fern + Foliage Brunch Pop-Up", category: "Food & Drink", description: "Special weekend brunch menus with plant-based creations.", location: "Fern + Foliage", date: "Weekends" },
  { id: 18, name: "Rosevine Inn Garden Party", category: "Arts & Culture", description: "Elegant garden parties at Tyler's charming bed and breakfast.", location: "Rosevine Inn", date: "Monthly" },
  { id: 19, name: "UT Tyler Basketball Game", category: "Sports", description: "Cheer on the Patriots at UT Tyler's arena.", location: "UT Tyler Patriot Arena", date: "Season" },
  { id: 20, name: "East Texas Oil Museum Tour", category: "Arts & Culture", description: "Interactive exhibits telling the story of the East Texas oil boom.", location: "East Texas Oil Museum", date: "Tue-Sat" },
]
