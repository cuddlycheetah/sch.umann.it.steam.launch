function getIconUrl(gameId, cb) {
    $.get(`https://steamdb.info/app/${ gameId }/info/`).then((html) => {
        html = html.substring(html.indexOf('clienticon'))
        html = html.substring(html.indexOf('href="') + 'href="'.length)
        html = html.substring(0, html.indexOf('"'))
        console.log(html)
        cb(html)
    })
}