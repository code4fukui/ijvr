# ijvr

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

ijvr.js is a JavaScript library for creating 3D graphics.

## Features
- Rendering text using the IchigoJam font
- Provides various 3D primitives such as boxes, spheres, and lines
- Supports importing 3D models
- Includes helper functions for camera, lighting, and scene management

## Requirements
- JavaScript runtime environment (e.g., web browser, Node.js)

## Usage
To use the library, import the necessary functions from the `ijvr.js` file:

```javascript
import * as eg from "./ijvr.js";

eg.textIJ("IchigoJam\u00ff", 0, 1.5, -.5, .01);
eg.box(0, 0, -1.5, 2, "red");
```

See the `textIJ.html` example file for a complete usage example.

## License
MIT License — see [LICENSE](LICENSE).