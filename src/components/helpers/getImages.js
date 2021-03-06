
export const getImages = async( nameSearch  ) => {
   
    const key = 'AIzaSyCzmcLX7Bdf2wmxp8pzYkKDi3NYvoWnpPw';

    const url = `https://www.googleapis.com/youtube/v3/search?key=${ key }&part=snippet&q=${ nameSearch }`;

    const resp = await fetch( url );

    const  { items }  = await resp.json(); 

    const images =  items.map(( img )=>{
        return{
            title:img.snippet.title,
            urlVideo:img.id.videoId,
            url:img.snippet.thumbnails.high.url,
        }
    });
    return images;
}
