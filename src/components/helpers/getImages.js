
export const getImages = async( nameSearch  ) => {
   
    const key = 'AIzaSyCJiSxdqAOBNFHIjtgpfCRkXf8aRAMZYQc';

    const url = `https://www.googleapis.com/youtube/v3/search?key=${ key }&part=snippet&q=${ nameSearch }`;

    const resp = await fetch( url );

    const  { items }  = await resp.json(); 

    const images =  items.map(( img )=>{
        return{
            title:img.snippet.title,
            url:img.snippet.thumbnails.high.url,
        }
    });
    // console.log(images); 
    return images;
}
