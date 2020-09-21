

export const getUrl =  async( nameUrl ) => {
    
    const urlDowload = `https://youtube-mauricio.herokuapp.com/api/info?url=https://www.youtube.com/watch?v=${ nameUrl }&flatten=True`;

    const response = await fetch( urlDowload );

    const { videos } = await response.json();
    
    const directionUrl = videos.map(( video )=>{

        return{
            
            url:video.url
        }

    });

    return directionUrl;
}
