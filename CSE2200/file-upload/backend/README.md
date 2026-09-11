# File Upload Backend

Express API for product management with file uploads (Multer) and Cloudinary storage. Uses MongoDB (Mongoose) and ES modules.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and set:
   - `PORT` – server port (default 4000)
   - `ENV` – `development` or `production`
   - `DATABASE_URL` – MongoDB connection string
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
   - `ALLOWED_ORIGIN` – CORS allowed origin (e.g. frontend URL)

3. Run:
   ```bash
   npm run dev
   ```

## API

- `GET /api/test` – health check
- `GET /api/products` – list products
- `POST /api/products` – create product (multipart: `productCardImage` x1, `productImages` x4)
- `GET /api/products/:productId` – product by ID
- `DELETE /api/products/:productId` – delete product

## Stack

Express, Mongoose, Cloudinary, Multer, CORS, dotenv.
