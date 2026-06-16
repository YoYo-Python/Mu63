const script = document.createElement('script');
script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=G-RHSQ7HYJYZ";
document.head.appendChild(script);

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-RHSQ7HYJYZ');




// download html page code
// implement by replace all at the </body> 

/*<button id="download-btn" onclick="downloadOfflinePage()" class="download-button">
  Download Offline Version
</button>
<script>
  function downloadOfflinePage() {
    // 1. Grab the entire HTML structure of the current page
    const htmlContent = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;

    // 2. Convert it into a downloadable Blob (a file-like object)
    const blob = new Blob([htmlContent], { type: 'text/html' });

    // 3. Create a temporary, invisible link to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);

    // 4. Set the default file name (defaults to 'medchem-academy-offline.html' if no title exists)
    let fileName = document.title ? document.title.replace(/\s+/g, '-').toLowerCase() : 'medchem-academy';
    downloadLink.download = fileName + '-offline.html';

    // 5. Append, click, and remove the link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Free up memory
    URL.revokeObjectURL(downloadLink.href);
  }
</script>
</body >*/

