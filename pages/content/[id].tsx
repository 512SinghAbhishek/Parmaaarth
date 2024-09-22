
import { useRouter } from 'next/router';
import data from '../../Json/content.json';
import PdfLink from '.';
import Image from 'next/image';

const ContentDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!router.isReady) {
        return null;  // Don't render anything until the router is ready
      }
    

  const contentItem = data.Contant.find((item) => item.id === id);

  if (!contentItem) {
    return <div>Content not found</div>;
  }

  return (
    <div>
     <div className='container Home_back'>
                <div className='row'>
                    <div className='col-md-12 color-white'>
                    {data.Contant.filter((item) => item.id === id).map((filteredItem,index) => (
                            <div className='col-md-9 first_block' key={index}>
                                <h3>{filteredItem.titleOne.replace(/'/g, "&apos;")}</h3> {/* Escape unescaped `'` characters */}
                                <hr />
                                <p className='text_align_link'>{filteredItem.contentOne.replace(/'/g, "&apos;")}</p>
                                <p className='text_align_link'>{filteredItem.contentTwo.replace(/'/g, "&apos;")}</p>
                                <div className='pdf_content'>
                                    <h5 className='head_name'>{filteredItem.PDFName.replace(/'/g, "&apos;")}</h5>
                                    <hr />
                                    <div className=''>
                                    <Image className='pdf_img' src={filteredItem.Image} width={300} height={300} alt='' />
                                    </div>
                                    <audio className='pdf_img' controls>
                                        <source src={filteredItem.audio} type="audio/mpeg" />
                                    </audio>
                                    <hr />
                                    <div className=''>
                                        <a href={filteredItem.pdf}> <button className='btn btn-primary pdf_btn'>Download PDF</button> </a>
                                    </div>
                                </div>
                                <p className='text_align_link'>{filteredItem.contentThree.replace(/'/g, "&apos;")}</p>
                                <p className='text_align_link'>{filteredItem.contentFour.replace(/'/g, "&apos;")}</p>
                                <h3>{filteredItem.titleTwo.replace(/'/g, "&apos;")}</h3>
                                <p className='text_align_link'>{filteredItem.contentFive.replace(/'/g, "&apos;")}</p>
                                <h3>{filteredItem.titleThree.replace(/'/g, "&apos;")}</h3>
                                <p className='text_align_link'>{filteredItem.contentSix[1].replace(/'/g, "&apos;")}</p>
                                <p className='text_align_link'>{filteredItem.contentSix[2].replace(/'/g, "&apos;")}</p>
                                <p className='text_align_link'>{filteredItem.contentSix[3].replace(/'/g, "&apos;")}</p>
                                <h3>{filteredItem.titleFour.replace(/'/g, "&apos;")}</h3>
                                <p className='text_align_link'>{filteredItem.contentSeven.replace(/'/g, "&apos;")}</p>
                            </div>
                        ))}
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
