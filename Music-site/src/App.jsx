import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Card from "./components/Card"


const App = () => {
  const raw = [
    {song:"Roses",artist:"SAINt_JHN",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F92%2F2b%2Fae%2F922baec04755d482e595a4855d160e39.jpg&f=1&nofb=1&ipt=25b08a43d7ea011dc7b1e7596668470bab8b60f9773bc96021312188dbd47d7e&ipo=images",added:false},
  {song:"Senorita",artist:"Shawn Mendes, Camila Cabello",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F3FO5Tc9_2qA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=e5f519a7c936e893b9099de26c2968c9d1bfdfb61da0812111bc555cacca7fae&ipo=images",added:false},
  {song:"Blinding Lights",artist:"The Weeknd",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Ff7txzuiu43341.jpg&f=1&nofb=1&ipt=8a979cf018217d9288889e7a9b0a2fcfa113a251b6e8d9e4232da0c9e9479161&ipo=images",added:false},
  {song:"Dance Monkey",artist:"Tones and I",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.promodj.com%2Fafs%2Ffd059786b3dcaab348d72f49a51a287f12%3Aresize%3A2000x2000%3Asame%3A94f498&f=1&nofb=1&ipt=aef304883b4dbc930c9d7a630f7ccbc399ef42cd1d9da9d73efb58238d29fe3b&ipo=images",added:false},
  {song:"Old Town Road",artist:"Lil Nas X feat. Billy Ray Cyrus",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjpimg.com.br%2Fuploads%2F2019%2F07%2FOld-Town-Road-Video-GQ-2019-051719-1024x576.jpg&f=1&nofb=1&ipt=4d8644f89ff944911a247dcfd0bb64d679ffcd6f6e477b61ece04cf2fcc9cc25&ipo=images",added:false},
  {song:"Bad Guy",artist:"Billie Eilish",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Frz2whkivr5z21.jpg&f=1&nofb=1&ipt=b707b235bb3ea01e64f12eb28363ec475536aefb267c05053e1d7216103d4fe6&ipo=images",added:false},
  {song:"7 Rings",artist:"Ariana Grande",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alexurbanpop.com%2Fwp-content%2Fuploads%2F2019%2F01%2FAriana-Grande-7-Rings-Artwork.jpg&f=1&nofb=1&ipt=6d10da36a60c846e39ab66019d63b8d7538ab7abe44784908751692aeef3fb2c&ipo=images",added:false},
  {song:"Thank U, Next",artist:"Ariana Grande",image:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fpolls%2F1716000%2F1716616_1551623604656_full.jpg&f=1&nofb=1&ipt=b0f035d90969775aeee2bf46ddbce2b3d193d1b0fbfcfaf1cdfa3b7413e963e9&ipo=images",added:false},
  {song:"Sucker",artist:"Jonas Brothers",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2736ddb6b9c805788de707c2a77&f=1&nofb=1&ipt=26d4eb5db41de877757cedb3f4f3fa551fae010f6a23b1c4ea12229aef69247b&ipo=images",added:false},
  {song:"Truth Hurts",artist:"Lizzo",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Frip1_FLHbYo%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=59fcf5cdf1f4607ba94535317303e7c2fc2c874f1a07919d2318a29f2fd7f8dd&ipo=images",added:false},
  {song:"High Hopes",artist:"Panic! At The Disco",image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.wallhere.com%2Fphotos%2F3d%2F3c%2Fanime_anime_girls_Super_Sonico_headphones_music_guitar_big_boobs_musical_instrument-121124.jpg!d&f=1&nofb=1&ipt=ce4079081a3eb6fd74c0ae9fb0cf101dc027fe0ea4fafc799f9083590a8a5677&ipo=images",added:false},
  ]
  const [data,setData] = useState(raw)
  const clicked =(change)=> {
    setData((prev)=> {
return prev.map((item,index)=>{
  if(index === change) {
    return {...item, added: !item.added}
  }
  return item
})
    })
  }
  return (
    <div className='bg-gray-800 min-h-screen'>
        <Navbar data={data} />
        <div className="card  flex gap-12 p-5 flex-wrap">
      {data.map((item,index)=><Card data={item} clicked={clicked} index={index} />)}
        </div>
    </div>
  )
}

export default App