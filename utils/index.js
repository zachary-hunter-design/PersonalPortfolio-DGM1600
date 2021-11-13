export function getLastNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    console.log(url.charAt(start))
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end) 
}

export function removeChildren(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
}