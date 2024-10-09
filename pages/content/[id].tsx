// // import { useRouter } from 'next/router';
// // import Head from 'next/head';
// // import data from '../../Json/content.json';
// // import PdfLink from '.';
// // import Image from 'next/image';

// // const ContentDetail = () => {
// //     const router = useRouter();
// //     const { id } = router.query;

// //     if (!router.isReady) {
// //         return null;  // Don't render anything until the router is ready
// //     }

// //     const contentItem = data.Contant.find((item) => item.id === id);

// //     if (!contentItem) {
// //         return <div>Content not found</div>;
// //     }

// //     return (
// //         <div>
// //             <Head>
// //                 <title>{contentItem.titleOne}</title>
// //                 <meta name="description" content={contentItem.contentOne.substring(0, 160)} /> 
// //                 <link rel="canonical" href={`https://parmaarth.in/Paramaath/${id}`} />
// //                 <meta property="og:title" content={contentItem.titleOne} />
// //                 <meta property="og:description" content={contentItem.contentOne.substring(0, 160)} />
// //                 {/* <meta property="og:image" content={filteredItem.Image} /> */}
// //             </Head>
// //             <div className='container Home_back'>
// //                 <div className='row'>
// //                     <div className='col-md-12 color-white'>
// //                         {data.Contant.filter((item) => item.id === id).map((filteredItem, index) => (
// //                             <div className='col-md-9 first_block' key={index}>
// //                                 <h3>{filteredItem.titleOne.replace(/'/g, "&apos;")}</h3>
// //                                 <hr />
// //                                 <p className='text_align_link'>{filteredItem.contentOne.replace(/'/g, "&apos;")}</p>
// //                                 <p className='text_align_link'>{filteredItem.contentTwo.replace(/'/g, "&apos;")}</p>
// //                                 <div className='pdf_content'>
// //                                     <h5 className='head_name'>{filteredItem.PDFName.replace(/'/g, "&apos;")}</h5>
// //                                     <hr />
// //                                     <div className=''>
// //                                         <Image className='pdf_img' src={filteredItem.Image} width={300} height={300} alt={filteredItem.PDFName.replace(/'/g, "&apos;")} />
// //                                     </div>
// //                                     <audio className='pdf_img' controls>
// //                                         <source src={filteredItem.audio} type="audio/mpeg" />
// //                                     </audio>
// //                                     <hr />
// //                                     <div className=''>
// //                                         <a href={filteredItem.pdf}>
// //                                             <button className='btn btn-primary pdf_btn'>Download PDF</button>
// //                                         </a>
// //                                     </div>
// //                                 </div>
// //                                 <p className='text_align_link'>{filteredItem.contentThree.replace(/'/g, "&apos;")}</p>
// //                                 <p className='text_align_link'>{filteredItem.contentFour.replace(/'/g, "&apos;")}</p>
// //                                 <h3>{filteredItem.titleTwo.replace(/'/g, "&apos;")}</h3>
// //                                 <p className='text_align_link'>{filteredItem.contentFive.replace(/'/g, "&apos;")}</p>
// //                                 <h3>{filteredItem.titleThree.replace(/'/g, "&apos;")}</h3>
// //                                 <p className='text_align_link'>{filteredItem.contentSix[1].replace(/'/g, "&apos;")}</p>
// //                                 <p className='text_align_link'>{filteredItem.contentSix[2].replace(/'/g, "&apos;")}</p>
// //                                 <p className='text_align_link'>{filteredItem.contentSix[3].replace(/'/g, "&apos;")}</p>
// //                                 <h3>{filteredItem.titleFour.replace(/'/g, "&apos;")}</h3>
// //                                 <p className='text_align_link'>{filteredItem.contentSeven.replace(/'/g, "&apos;")}</p>
// //                             </div>
// //                         ))}
// //                         <div className='col-md-3'>
// //                             <PdfLink />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default ContentDetail;






// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import data from '../../Json/content.json';
// import PdfLink from '.';
// import Image from 'next/image';

// // Define types based on your JSON structure
// interface ContentItem {
//     id: string;
//     titleOne: string;
//     contentOne: string;
//     contentTwo: string;
//     contentThree: string;
//     contentFour: string;
//     titleTwo: string;
//     contentFive: string;
//     titleThree: string;
//     contentSix: { [key: string]: string | undefined }; // Assuming contentSix is an object
//     titleFour: string;
//     contentSeven: string;
//     Image: string;
//     PDFName: string;
//     pdf: string;
//     audio: string;
// }

// interface ContentData {
//     Contant: ContentItem[];
// }

// const ContentDetail = () => {
//     const router = useRouter();
//     const { id } = router.query;

//     if (!router.isReady) {
//         return null; // Don't render anything until the router is ready
//     }

//     const contentData = data as ContentData;
//     const contentItem = contentData.Contant.find((item: ContentItem) => item.id === id);

//     if (!contentItem) {
//         return <div>Content not found</div>;
//     }

//     const { 
//         titleOne, contentOne, contentTwo, contentThree, 
//         contentFour, titleTwo, contentFive, titleThree, 
//         contentSix, titleFour, contentSeven, Image: imageUrl, 
//         PDFName, pdf, audio 
//     } = contentItem;

//     return (
//         <div>
//             <Head>
//                 <title>{titleOne}</title>
//                 <meta name="description" content={contentOne.substring(0, 160)} />
//                 <link rel="canonical" href={`https://parmaarth.in/Paramaath/${id}`} />
//                 <meta property="og:title" content={titleOne} />
//                 <meta property="og:description" content={contentOne.substring(0, 160)} />
//                 {/* Uncomment if you have an image */ }
//                 {/* <meta property="og:image" content={imageUrl} /> */}
//             </Head>
//             <div className='container Home_back'>
//                 <div className='row'>
//                     <div className='col-md-12 color-white'>
//                         <div className='col-md-9 first_block'>
//                             <h3>{titleOne.replace(/'/g, "&apos;")}</h3>
//                             <hr />
//                             <p className='text_align_link'>{contentOne.replace(/'/g, "&apos;")}</p>
//                             <p className='text_align_link'>{contentTwo.replace(/'/g, "&apos;")}</p>

//                             <div className='pdf_content'>
//                                 <h5 className='head_name'>{PDFName.replace(/'/g, "&apos;")}</h5>
//                                 <hr />
//                                 <div>
//                                     <Image className='pdf_img' src={imageUrl} width={300} height={300} alt={PDFName.replace(/'/g, "&apos;")} />
//                                 </div>
//                                 <audio className='pdf_img' controls>
//                                     <source src={audio} type="audio/mpeg" />
//                                 </audio>
//                                 <hr />
//                                 <div>
//                                     <a href={pdf}>
//                                         <button className='btn btn-primary pdf_btn'>Download PDF</button>
//                                     </a>
//                                 </div>
//                             </div>

//                             <p className='text_align_link'>{contentThree.replace(/'/g, "&apos;")}</p>
//                             <p className='text_align_link'>{contentFour.replace(/'/g, "&apos;")}</p>

//                             <h3>{titleTwo.replace(/'/g, "&apos;")}</h3>
//                             <p className='text_align_link'>{contentFive.replace(/'/g, "&apos;")}</p>

//                             <h3>{titleThree.replace(/'/g, "&apos;")}</h3>
//                             {Object.values(contentSix).map((content: string | undefined, index: number) => (
//                                 content && (
//                                     <p className='text_align_link' key={index}>{content.replace(/'/g, "&apos;")}</p>
//                                 )
//                             ))}

//                             <h3>{titleFour.replace(/'/g, "&apos;")}</h3>
//                             <p className='text_align_link'>{contentSeven.replace(/'/g, "&apos;")}</p>
//                         </div>
//                         <div className='col-md-3'>
//                             <PdfLink />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContentDetail;


import { useRouter } from 'next/router';
import Head from 'next/head';
import data from '../../Json/content.json';
import PdfLink from '.';
import Image from 'next/image';

// Define types based on your JSON structure
interface ContentItem {
    id: string;
    titleOne: string;
    contentOne: string;
    contentTwo: string;
    contentThree: string;
    contentFour: string;
    titleTwo: string;
    contentFive: string;
    titleThree: string;
    contentSix: { [key: string]: string | undefined }; // Assuming contentSix is an object
    titleFour: string;
    contentSeven: string;
    Image: string;
    PDFName: string;
    pdf: string;
    audio: string;
}

interface ContentData {
    Contant: ContentItem[];
}

const ContentDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!router.isReady) {
        return null; // Don't render anything until the router is ready
    }

    const contentData = data as ContentData;
    const contentItem = contentData.Contant.find((item: ContentItem) => item.id === id);

    if (!contentItem) {
        return <div>Content not found</div>;
    }

    const {
        titleOne, contentOne, contentTwo, contentThree,
        contentFour, titleTwo, contentFive, titleThree,
        contentSix, titleFour, contentSeven, Image: imageUrl,
        PDFName, pdf, audio
    } = contentItem;

    // List of keywords to add
    const keywords = `hanuman chalisa, hanuman chalisa pdf, hanuman chalisa pdf hindi, 
        सुंदरकांड, सुंदरकांड पाठ हिंदी में PDF, रामायण, ram charit manas pdf, 
        ramayan pdf, Ramcharitmanas, ramcharitmanas pdf, रामचरित_मानस, ram charit manas pdf, 
        श्रीमद्भगवद्गीता, Bhagavad Gita, shrimad bhagwat geeta, bhagwat geeta in hindi, 
        महाभारत, mahabharat, महाभारत कथा, Shiva Tandava, shiva tandava stotram, 
        shiv tandav, lyrics of shiv tandav stotram, tulsidas, हनुमान बाहुक, दुर्गा सप्तशती, 
        शिव चालीसा, mahadev chalisa, shiv chalisa, shiv chalisa lyrics, rigveda in hindi pdf, 
        rig veda in hindi pdf, ऋग्वेद, सामवेद, अथर्ववेद, गरुड़ पुराण, Garuda Purana, 
        garuda purana pdf, भविष्य मालिका, bhavishya malika pdf, यजुर्वेद, यजुर्वेद in hindi`;

    return (
        <div>
            <Head>
                <title>{titleOne}</title>
                <meta name="description" content={contentOne.substring(0, 160)} />
                <link rel="canonical" href={`https://parmaarth.in/Paramaath/${id}`} />
                <meta property="og:title" content={titleOne} />
                <meta property="og:description" content={contentOne.substring(0, 160)} />
                <meta name="keywords" content={keywords} />
                <meta property="og:image" content={imageUrl} />
            </Head>
            <div className='container Home_back'>
                <div className='row'>
                    <div className='col-md-12 color-white'>
                        <div className='col-md-9 first_block'>
                            <h3>{titleOne.replace(/'/g, "&apos;")}</h3>
                            <hr />
                            <p className='text_align_link'>{contentOne.replace(/'/g, "&apos;")}</p>
                            <p className='text_align_link'>{contentTwo.replace(/'/g, "&apos;")}</p>

                            <div className='pdf_content'>
                                <h5 className='head_name'>{PDFName.replace(/'/g, "&apos;")}</h5>
                                <hr />
                                <div>
                                    <Image className='pdf_img' src={imageUrl} width={300} height={300} alt={PDFName.replace(/'/g, "&apos;")} />
                                </div>
                                <audio className='pdf_img' controls>
                                    <source src={audio} type="audio/mpeg" />
                                </audio>
                                <hr />
                                <div>
                                    <a href={pdf}>
                                        <button className='btn btn-primary pdf_btn'>Download PDF</button>
                                    </a>
                                </div>
                            </div>

                            <p className='text_align_link'>{contentThree.replace(/'/g, "&apos;")}</p>
                            <p className='text_align_link'>{contentFour.replace(/'/g, "&apos;")}</p>

                            <h3>{titleTwo.replace(/'/g, "&apos;")}</h3>
                            <p className='text_align_link'>{contentFive.replace(/'/g, "&apos;")}</p>

                            <h3>{titleThree.replace(/'/g, "&apos;")}</h3>
                            {Object.values(contentSix).map((content: string | undefined, index: number) => (
                                content && (
                                    <p className='text_align_link' key={index}>{content.replace(/'/g, "&apos;")}</p>
                                )
                            ))}

                            <h3>{titleFour.replace(/'/g, "&apos;")}</h3>
                            <p className='text_align_link'>{contentSeven.replace(/'/g, "&apos;")}</p>
                        </div>
                        <div className='col-md-3'>
                            <PdfLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentDetail;
