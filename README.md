# cordova-plugin-custom-url-handler

A Cordova plugin to open your app using a custom URL scheme (e.g., `myapp://`). It supports handling paths and parameters, enabling seamless redirection and interaction between external links and your app for iOS and Android.

## Features

- Allows apps to handle custom URL schemes (e.g., `myapp://somepath?foo=bar`).
- Cross-platform support for iOS and Android.
- Provides a Javascript API to handle URLs.

## Installation

To integrate, specify your desired `URL_SCHEME` during installation. Example:

```bash
cordova plugin add cordova-plugin-custom-url-handler --variable URL_SCHEME=myapp
```

## Usage

1. **Handle Incoming URLs**  
   Define a `window.handleCustomUrl` function in your app to handle incoming URLs. For example:

   ```javascript
   document.addEventListener('deviceready', function () {
      window.handleCustomUrl = function(url) {
         alert(url);
      };
   });
   ```

   The `url` parameter contains the full incoming URL, which can be parsed for paths or query parameters.

    ```javascript
   console.log(new URL(url.replace('myapp://', 'https://t')).searchParams.get('token'));
   ```
2. **Launch Your App via URL**  
   Open your app from a link using your custom URL scheme:
   ```html
   <a href="myapp://">Open My App</a>
   <a href="myapp://somepath">Open My App to Path</a>
   <a href="myapp://somepath?key=value">Open My App with Params</a>
   ```

## URL Scheme Guidelines
When selecting a `URL_SCHEME`, make sure it follows these recommendations:
- Avoid using schemes that are already registered (e.g., `fb`, `twitter`, `comgooglemaps`, etc.).
- Use only lowercase letters.
- Avoid using a dash `-` as it will be replaced with an underscore `_` on Android.
- Stick to a single word (no spaces).

**Tip:** Test your custom scheme by installing the app on a device or simulator, then typing `yourscheme://` in the browser's address bar.


## Repository

- Source code: [GitHub Repository](https://github.com/helxer/cordova-plugin-custom-url-handler)

## License

This plugin is licensed under the MIT License. See the [LICENSE file](https://github.com/helxer/cordova-plugin-custom-url-handler/blob/main/LICENSE) for details.

## Contributing

Contributions and issues are welcome! Please submit issues via [GitHub Issues](https://github.com/helxer/cordova-plugin-custom-url-handler/issues).
