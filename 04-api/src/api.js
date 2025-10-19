import axios from "axios"

const searchImages = async (input) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization : 'Client-ID mk8-XheDAy2hLRYqUAqq05YIH7osHeNyXWrTwgCGZ-A',
        },
        params: {
            query : input,
        },
    });
   

    return response.data.results;
}

export default searchImages; 