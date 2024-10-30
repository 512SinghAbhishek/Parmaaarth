

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

                {/* Google Analytics with lazy loading */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E7S28HQRQ9" strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-E7S28HQRQ9');
                    `}
                </Script>

                {/* Ads by Google */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8376056185309199"
                    crossOrigin="anonymous"
                    strategy="lazyOnload"
                />
                
                {/* Ad - Sidebar 1 */}
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-8376056185309199"
                    data-ad-slot="6931571639"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
                <Script strategy="afterInteractive" id="sidebar-ad">
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>

                {/* Ad - Footer 1 */}
                <ins className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-8376056185309199"
                    data-ad-slot="3235869207"
                    data-ad-format="auto"
                    data-full-width-responsive="true">
                </ins>
                <Script strategy="afterInteractive" id="footer-ad">
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>

                {/* Font Awesome */}
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
