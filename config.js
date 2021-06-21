import { FaGithub, FaSpotify, FaDiscord } from "react-icons/fa";

export default ({
  sitename: "SassteR",
  hostname: "https://website-6mji0dd9o-burak35smoke.vercel.app/",
  personalInfo: {
    discordID: "852601841870569552",
    name: "Burak",
    position: "Full Stack Developer",
    birthday: {
      day: process.env.BIRTHDAY, 
      month: process.env.BIRTHMONTH, 
      year: process.env.BIRTHYEAR, 
      gmt: "GMT+3:00", 
      time: process.env.BIRTHTIME
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
    ],
    socialMedias: [
      {
        to: "https://github.com/Burak35Smoke",
	icon: FaGithub
      },
      {
        to: "https://open.spotify.com/user/f20i3xdrw1gnfv9omkshhvhr1",
	icon: FaSpotify
      },
      {
        to: "https://discord.com/channels/@me/852601841870569552",
	icon: FaDiscord 
      }
    ]
  },
  routes: [
    { 
      isMaintenance: false, 
      name: "Blog", 
      to: "/blog", 
      description: "Personal blog." 
    }
  ]
});
