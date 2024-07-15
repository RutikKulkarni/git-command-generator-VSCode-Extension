export function getWebviewContent() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chat Panel</title>
        <style>
            /* styles */
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="main.js"></script>
    </body>
    </html>
    `;
}
