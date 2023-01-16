import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
<div>
  <meta name="robots" content="all,follow" />
  <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/vendor/bootstrap/css/bootstrap.min.css" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,800" />
  <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/css/orionicons.css" />
  <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/css/style.default.css" id="theme-stylesheet" />
  <link rel="stylesheet" href="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/css/custom.css" />
  {/* Favicon*/}
  <link rel="shortcut icon" href="https://d19m59y37dris4.cloudfront.net/bubbly-dashboard/1-0/img/favicon.png?3" />
</div>
</Head>
      <Component {...pageProps} />

      
        
      
    </div>)
  
}

export default MyApp
