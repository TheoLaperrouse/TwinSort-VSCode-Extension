# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2024-04-15

### Added
 - Document the extension with videos
 - Add prettier for a better dev experience


## [1.0.0] - 2024-04-15

### Added
- Initial release of the `TwinSort` VS Code extension.
- Feature to sort JSON objects and arrays directly within the editor.
- Support for both single-line and multi-line JSON formatting.
- Custom key binding `Ctrl+Alt+H` (Windows/Linux) and `Cmd+Alt+H` (Mac) for easy access to the sort feature.
- Integration with `json5` for parsing JSON with enhanced flexibility, including non-standard formats such as single quotes.
- Error handling to provide user feedback on invalid JSON inputs.