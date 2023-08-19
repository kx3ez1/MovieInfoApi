## Getting Started

Follow these steps to get started with Cloudflare Workers:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:
    ```bash
    git clone https://github.com/kx3ez1/MovieInfoApi.git
    ```
2. **Npm Install**: Install the required dependencies using the following command:
    ```bash
    npm install
    ```
3. **Create a TMDB API Key**: Create a TMDB API Key by following the
   instructions [here](https://developers.themoviedb.org/3/getting-started/introduction).
4. **Create a Cloudflare Workers Account**: Create a Cloudflare Workers account by following the
   instructions [here](https://developers.cloudflare.com/workers/learning/getting-started).
5. **Create a Cloudflare Workers Secret**: Create a Cloudflare Workers Secret with the name `TMDB_API_KEY` and the value
   of your TMDB API Key by following the
   instructions [here](https://developers.cloudflare.com/workers/cli-wrangler/commands#secret).
6. **Test Locally**: Test the application locally using the following command:
    ```bash
    npm run dev
    ```
7. **Deploy to Cloudflare Workers**: Deploy the application to Cloudflare Workers using the following command:
    ```bash
    npm run deploy
    ```

## Usage

The application can be accessed using the following URL:

```
https://<your-subdomain>.<your-domain>/
```

### Endpoints

Trending daily movies
```
/trending/day
/trending/day?page=2
```
Trending Weekly
```
/trending/week
/trending/week?page=12
```

Movie Details by `TMDB Movie ID`
```
/movie?id=9890
```





