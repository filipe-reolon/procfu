var loadMoreDiv = document.querySelector('.pf-load-more');
console.log(loadMoreDiv)

if (loadMoreDiv) {
    var anchorElement = loadMoreDiv.querySelector('a');
    if (anchorElement) {
        var anchorId = anchorElement.id;
        const indexOfLoadMore = anchorId.toString().indexOf("loadmore");
        if (indexOfLoadMore !== -1) {
            const partBeforeLoadMore = anchorId.toString().substring(0, indexOfLoadMore)
            for (let i = 0; i < 10; i++) {
                pfUiView.loadMore(partBeforeLoadMore)
            }
        }
    }
}