// /pages/content/index.js
import Link from 'next/link';
import data from '../../Json/content.json';

const PdfLink = () => {
  return (
    <div>
      <div className="pdflink">
        <h1 className='head_link'>eBooks/PDF</h1>
        <br />
        <div className="ebook_link">
          <ul>
            {data.Contant.map((item) => (
              <li key={item.id}>
                <i className="fa-solid fa-file-pdf" style={{color: "red"}}></i>
                <a href={`/content/${item.id}`}>
                  {item.id}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PdfLink;
