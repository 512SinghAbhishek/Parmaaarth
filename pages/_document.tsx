import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
    return (
        <Html style={{ backgroundColor: "#f5a95d" }}>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
                <title>|| Paramaarth ||</title>
            </Head>
            <body>
                <Main />
                <NextScript />

                {/* Font Awesome Script */}
                <Script
                    src="https://kit.fontawesome.com/96239c21a7.js"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />

                {/* Bootstrap JS */}
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />
            </body>
        </Html>
    );
}
