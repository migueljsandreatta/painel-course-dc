// Define some variables used to remember state.

const API_KEY       = 'AIzaSyArAhfRgpIH05Vp8rYMwuogICGkVRonYEw';
const part          = 'snippet';
const playlistId    = 'PLB1VCCiTswNoe-uYxLU9nrUCnLOALr-Z5';
const maxResults    = 10;

let containerVideos = document.querySelector('#video-container .container .row')

console.log(containerVideos)

const getVideoList = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}`)

    const data     = await response.json(); 
    console.log(data)

    data.items.map(item => {
        console.log(item)
        innerContent = `
        <div class = "col-md-4" >
            <div class = "card mb-4 shadow-sm" >
                <img class = "card-img-top" src = "${item.snippet.thumbnails.high.url}" alt = "Card image cap" />
                <div class = "card-body">
                    <p class = "card-text" > ${item.snippet.title} </p>
                        <div class = "d-flex justify-content-between align-items-center">
                            <div class = "btn-group">
                                <a target="_blank" href="https://youtu.be/${item.snippet.resourceId.videoId}" class = "btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-xl">Vizualizar Vídeo</a> 
                            </div> 
                            <small class = "text-muted"> 9 mins </small> 
                        </div>
                </div>
            </div> 
        </div>

        <!-- Modal -->
        <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${item.snippet.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
            </div>
        </div>
        </div>


        <div class="modal fade" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${item.snippet.title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.snippet.resourceId.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
        `
        containerVideos.innerHTML += innerContent

    })
}

getVideoList()

/* var nextPageToken, prevPageToken;

const API_KEY = 'AIzaSyArAhfRgpIH05Vp8rYMwuogICGkVRonYEw';
const part = 'snippet';
const playlistId = 'PLB1VCCiTswNoe-uYxLU9nrUCnLOALr-Z5';
const maxResults = 10;

let quantityPosts = 5;
let postsContainer = document.querySelector(".album .container .row");

const getPosts = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&part=${part}&playlistId=${playlistId}&maxResults=${maxResults}`);
    const data = await response.json();

    const dnextPageToken = await data.nextPageToken

    console.log(data.items[0].snippet.thumbnails.high.url);
    console.log(dnextPageToken);

    data.items.map(post => {
        console.log(post);
        const innerContent =
        `<div class = "col-md-4" >
            <div class = "card mb-4 shadow-sm" >
                <img class = "card-img-top" src = "${post.snippet.thumbnails.high.url}" alt = "Card image cap" />
                <div class = "card-body">
                    <p class = "card-text" > This is a wider card with supporting text below as a natural lead - in to additional content.This content is a little bit longer. </p>
                        <div class = "d-flex justify-content-between align-items-center">
                            <div class = "btn-group">
                                <button type = "button" class = "btn btn-sm btn-outline-secondary"> View </button>
                                <button type = "button" class = "btn btn-sm btn-outline-secondary"> Edit </button> 
                            </div> 
                            <small class = "text-muted"> 9 mins </small> 
                        </div>
                </div>
            </div> 
        </div>`

        postsContainer.innerHTML += innerContent;

    });
}

getPosts(); */