const card = post => {
    return `
        <div class="card z-depth-4">
            <div class="card-content">
                <span class="card-title">${post.title}</span>
                 <p>${post.text}</p>
                <small>${post.date}</small>
            </div>
            <div class="card-action">
                <button class="btn btn-small red">
                    <i class="material-icons">DELETE</i>
                </button>
            </div>
        </div><!-- card -->
    `
}

let posts= []
const BASE_URL = '/api/post'

class PostApi {
    static fetch() {
        return fetch(BASE_URL, {method: 'get'}).then(res => res.json()) // 1param = URL, method of request
    }
}

document.addEventListener('DOMContentLoaded', () => {
    PostApi.fetch().then(backendPosts => {
        posts = backendPosts.concat()
        renderPosts(posts)
    })

    M.Modal.init(document.querySelector('.modal'))
})

function renderPosts(_posts = []) {
    const $posts = document.querySelector('#posts')

    if (_posts.length > 0) {
        const html = _posts.map( post => card(post).join(' ') )
        $posts.innerHTML = html
    } else {
        $posts.innerHTML = '<div class="center">No posts</div>'
    }
}