export default ({
  sitename: "", // Site name.
  hostname: "", // Your site URL.
  personalInfo: {
    discordID: "", // If you have a Discord account write your account ID.
    name: "", // Write your name
    position: "", // Write what you're doing.
    birthday: {
      day: 8, 
      month: 6,
      year: 2021, 
      gmt: "GMT+3:00", // Greenwich Time Zone your birthplace 
      clock: "22:30" // Your birth time.
    }, 
    description: "Hello I'm {age} years old.", // Description about yourself.
    favouriteArtists: [
      { 
        name: "Gin Wigmore", 
	    image: "/artists/ginwigmore.webp" 
      }
    ]
  },
  routes: [
    { 
      isMaintenance: true, 
      name: "Blog", 
      to: "/blog", 
      description: "" 
    }
  ]
});
