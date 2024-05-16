var options = {
    hideLoading: true,
    disableSearch: true,
    pathInMiddlePanel: true,
    hideSingleRequestSampleTab: true,
    expandResponses: 'all',
    theme: {
        colors: {
            http: {
                post: "#333333",
            },
            primary: {
                "main": "#766cb9"
            },
            success: {
                "main": "#6ec5ab"
            },
            error: {
                "main": "#c05f68"
            },
        },
        typography: {
            fontSize: '16px',
            lineHeight: '24px',
            headings: {
                fontFamily: 'Roboto, sans-serif',
            },
            code: {
                color: "#C05F68",
                fontFamily: "Consolas,'Lucida Console','DejaVu Sans Mono',Monaco,'Courier New',Courier,monospace",
                fontSize: '14px',
            },
        },
        logo: {
            gutter: '10px',
        },
    },
};

function setupClickListener() {
    document.getElementById('redoc-container').addEventListener('click', function (event) {
        if (event.target.classList.contains('sc-feJyhm')) {
            window.scrollTo(0, 0);
        }
    });
}