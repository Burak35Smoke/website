export default ({
  sitename: "SherlockYigit",
  hostname: "website-yigitsh.vercel.app",
  personalInfo: {
	discordID: "304347029046558721",
    name: "Yiğit",
	position: "Full Stack Developer",
	birthday: {
      day: Number(process.env.BIRTHDAY), 
	  month: Number(process.env.BIRTHMONTH), 
	  year: Number(process.env.BIRTHYEAR), 
	  gmt: "GMT+3:00", 
	  time: Number(process.env.BIRTHTIME)
	},
	description: "Hello 👋, I'm a student. I'm {age} years old now and I have some small projects. I spend more time from classes on my projects and cycling.",
	favouriteArtists: [
      { 
	    name: "Duman", 
		image: "/artists/duman.webp" 
	  }, 
      { 
	    name: "Model", 
		image: "/artists/model.webp" 
	  },
      { 
	    name: "Adamlar", 
		image: "/artists/adamlar.webp" 
	  },
      { 
	    name: "Gin Wigmore", 
		image: "/artists/ginwigmore.webp" 
	  },
      { 
	    name: "Dorothy", 
		image: "/artists/dorothy.webp" 
	  },
      { 
	    name: "Ece Seçkin", 
		image: "/artists/ece_seckin.webp" 
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