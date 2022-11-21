//https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

//https://hacker-news.firebaseio.com/v0/item/{id}.json?print=pretty

//First API call

let getTopNewStories = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    for(let i = 0; i < 100; i++){
        let storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
        let storyData = await storyResponse.json();
        console.log(storyData)
        //build elements to print to screen


    }
    console.log(data)
}

getTopNewStories()

