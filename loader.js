"use client"

// export default function myImageLoader({ src, width, quality }) {
//     const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
//     if(src.startsWith('https://i.ibb.co' || 'https://images.pexels.com')) return src
//     return `https://nyportfolio.com/${params.join(
//       ','
//     )}${src}`
//   }

//   
export default function myImageLoader({ src, width, quality })
{
    if(src.startsWith('https://i.ibb.co' || 'https://images.pexels.com')) return src
    return `https://myportfolio.com/${src}?w=${width}&q=${quality || 'auto'}`


}