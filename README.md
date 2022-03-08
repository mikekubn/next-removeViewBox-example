# Remove view box in Next.js
How resize svg in next?

- Next has default value set on  `removeViewBox: true`, so you can not resize svg in Next. This is example how you can change value `removeViewBox` to `false`.

- More info: `next.config.js`
```
...
overrides: { removeViewBox: false }
...
```

## Getting Started

First, run:
```bash
npm run dev
```

