javascript: (function () {
    var match = window.location.pathname.match(/pull\/(\d+)/);
    var prNumber = match ? match[1] : '';
    var prTitle = document.querySelector('bdi.js-issue-title')?.textContent.trim() || '';
    var prUrl = window.location.href;
    var richLink = `[Pull Request ${prNumber}](${prUrl}): ${prTitle}`;

    navigator.clipboard.writeText(richLink).then(function () {
        var toast = document.createElement('div');
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" style="margin-right: 8px;">
                <path fill="#5f6368" d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
            </svg>
            Link copied
        `;
        toast.style.position = 'fixed';
        toast.style.top = '16px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.background = '#ffffff';
        toast.style.color = '#3c4043';
        toast.style.padding = '12px 16px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
        toast.style.fontSize = '13px';
        toast.style.fontFamily = 'Roboto, system-ui, sans-serif';
        toast.style.display = 'flex';
        toast.style.alignItems = 'center';
        toast.style.zIndex = 9999;
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.remove();
        }, 4000);
    });
})();