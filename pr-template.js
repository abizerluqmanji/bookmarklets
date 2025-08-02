javascript: (function () {
    fetch('https://raw.githubusercontent.com/abizerluqmanji/.github/refs/heads/main/pull_request_template.md')
        .then(response => response.text())
        .then(text => {
            return navigator.clipboard.writeText(text);
        })
        .then(function () {
            var toast = document.createElement('div');
            toast.innerHTML = `Template copied`;
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