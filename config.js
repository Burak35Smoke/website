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
    description: "Hello 👋, I'm a student. I'm 15 years old now and I have some small projects. I spend more time from classes on my projects and cycling.",
    favouriteArtists: [
      { 
	name: "Rope", 
	image: "/artists/rope.webp" 
      }, 
      { 
	name: "ViceArnold", 
	image: "/artists/vice.webp" 
      },
      { 
	name: "Joker", 
	image: "/artists/joker.webp" 
      },
      { 
	name: "Agoni", 
	image: "/artists/agoni.webp" 
      },
      { 
	name: "Taladro", 
	image: "/artists/taladro.webp" 
      },
      { 
	name: "Perdenin Ardındakiler", 
	image: "/artists/perdeninardindakiler.webp" 
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
