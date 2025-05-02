import { Helmet } from "react-helmet";

function Seo({title}: {title?: string}) {
  return (
    <Helmet>
           <title>{title ? `Weather Express | ${title}` : "Weather Express"}</title>
           <meta name="description" content="Get the latest weather updates." />
           <link rel="icon" href="/weather-express icon.svg" />
           <link rel="shortcut icon" href="/weather-express icon.svg" type="image/x-icon" />
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1.0"
           />
           <meta
             name="apple-mobile-web-app-status-bar-style"
           />
           <meta
             name="apple-mobile-web-app-capable"
             content="yes"
           />
           <meta
             name="mobile-web-app-capable"
             content="yes"
           />
           <meta
             name="description"
             content="Get the latest weather updates."
           />
           <meta
             name="keywords"
             content="weather, forecast, meteorology, climate, temperature, humidity"
           />
           <meta
             name="author"
             content="MD.Kamrul Hasan"
           />
           <meta
             name="robots"
             content="index, follow"
           />
           <meta
             name="google-site-verification"
             content="your-google-site-verification-code"
           />
           <meta
             name="twitter:card"
             content="summary_large_image"
           />
           <meta
             name="twitter:site"
             content="@your_twitter_handle"
           />
           <meta
             name="twitter:title"
             content="Weather App"
           />
           <meta
             name="twitter:description"
             content="Get the latest weather updates."
           />
           <meta
             name="twitter:image"
             content="https://example.com/image.jpg"
           />
           <meta
             property="og:title"
             content="Weather App"
           />
           <meta
             property="og:description"
             content="Get the latest weather updates."
           />
           <meta
             property="og:image"
             content="https://example.com/image.jpg"
           />
           <meta
             property="og:url"
             content="https://example.com"
           />
           <meta
             property="og:type"
             content="website"
           />
           <meta
             property="og:site_name"
             content="Weather App"
           />
           <meta
             property="fb:app_id"
             content="your-facebook-app-id"
           />
           <meta
             property="fb:admins"
             content="your-facebook-admin-id"
           />
           <meta
             property="fb:admins"
             content="your-facebook-admin-id"
           />
           <meta
             property="fb:pages"
             content="your-facebook-page-id"
           />
           <meta
             property="fb:app_id"
             content="your-facebook-app-id"  
             />
         </Helmet>
  )
}

export default Seo