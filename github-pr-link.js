javascript: (function () {
    var match = window.location.pathname.match(/pull\/(\d+)/);
    var prNumber = match ? match[1] : '';
    var prTitle = document.querySelector('bdi.js-issue-title')?.textContent.trim() || '';
    var prUrl = window.location.href;
    var richLink = `[Pull Request ${prNumber}](${prUrl}): ${prTitle}`;

    navigator.clipboard.writeText(richLink).then(function () {
        var toast = document.createElement('div');
        toast.textContent = 'Link copied';
        toast.style.position = 'fixed';
        toast.style.top = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = '#fff';
        toast.style.color = '#000';
        toast.style.padding = '8px 16px';
        toast.style.borderRadius = '6px';
        toast.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        toast.style.fontSize = '14px';
        toast.style.fontWeight = '500';
        toast.style.textAlign = 'center';
        toast.style.zIndex = 9999;
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.remove();
        }, 4000);
    });
})();