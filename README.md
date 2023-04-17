# Tutorial Clone

- Buka file `config/config.json` dan ubah pengaturan `development` sesuai dengan pengaturan PostgreSQL Anda.

```javascript
{
  "development": {
    "username": "postgres", // username postgres (default: postgres)
    "password": "early", // password postgres
    "database": "db_cars", // nama database
    "host": "127.0.0.1", // host postgres (default: localhost)
    "dialect": "postgres" // dialect postgres (default: postgres)
  },
  "test": {
    "username": "postgres", // username postgres (default: postgres)
    "password": "early", // password postgres
    "database": "db_cars", // nama database
    "host": "127.0.0.1", // host postgres (default: localhost)
    "dialect": "postgres" // dialect postgres (default: postgres)
  },
  "production": {
    "username": "postgres", // username postgres (default: postgres)
    "password": "early", // password postgres
    "database": "db_cars", // nama database
    "host": "127.0.0.1", // host postgres (default: localhost)
    "dialect": "postgres" // dialect postgres (default: postgres)
  }
}
```

- Jalankan perintah `sequelize db:create` untuk membuat database.
- Konfigrusasi paket yarn dengan perintah `yarn install`.
- Jalankan perintah `yarn start` untuk menjalankan aplikasi.
