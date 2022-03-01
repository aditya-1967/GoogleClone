const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('keydown', function (event) {
    if (event.code === "Enter") {
        search()
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=APq-WBuvERJ1gNd5fuSBwWZ7cLiJQU70CA%3A1646140624054&source=hp&ei=0BweYvMriePaug-1x44Q&iflsig=AHkkrS4AAAAAYh4q4DUH-85z7mwwkMU5NMfh-Q5dHwE3&ved=0ahUKEwjz05PZ_6T2AhWJsVYBHbWjAwIQ4dUDCAc&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEELEDENQCMgsILhCABBCxAxDUAjIICAAQgAQQsQMyCAguEIAEELEDMgsILhCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIICAAQgAQQsQMyCwgAEIAEELEDEIMBOgQIIxAnOg4ILhCABBCxAxCDARDUAjoICAAQsQMQgwFQAFiVAmCtCGgAcAB4AIABmQGIAbQDkgEDMC4zmAEAoAEB&sclient=gws-wiz"
}