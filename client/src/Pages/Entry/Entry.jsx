import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import entryStyle from './Entry.module.scss'
import { Link } from 'react-router-dom'


const Entry = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Walmart.com | Save Money</title>
        </Helmet>
      </HelmetProvider>
      <div className={entryStyle.entry}>
        <div className={entryStyle.container}>
          <div className={entryStyle.entry__reserve}>
            <div className={entryStyle.entry__reserve__left}>
              <div className={entryStyle.entry__reserve__left__top}>
                <h4>Reserve pickup or delivery</h4>
                <button>See times</button>
              </div>
              <div className={entryStyle.entry__reserve__left__bottom}>
                <div>
                  <h4>Top departments</h4>
                  <span>View All</span>
                </div>
                <div>
                  <Link to="/tech">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-604b/k2-_333bfe34-ceed-44bf-8771-d9eb485f1b74.v1.jpg?odnHeight=90&odnWidth=90&odnBg=FFFFFF" alt="" />
                    <p>Electronics</p>
                  </Link>
                  <Link to="/home">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-362d/k2-_fb442a82-c9c1-410d-b9d9-e9d5fc84ef2d.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" />
                    <p>Home</p>
                  </Link>
                  <Link to="/grocery">
                    <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-52ed/k2-_5cfe89bc-e57c-4519-b6ee-d8ce7f4b83c5.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF" alt="" />
                    <p>Grocery</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={entryStyle.entry__reserve__middle}>
              <h3>Valentine's Day gifts</h3>
              <div>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ee9f/k2-_caaaf959-9efe-4ae4-b62f-366c01fb1d6b.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>Candy</p>
                </span>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-4a98/k2-_ad25d870-a1cb-4c03-ba71-d4d0c6f6a862.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>Jewelry & watches</p>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-188d/k2-_708b92c3-2999-497d-a287-03a4b2e09747.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>Beauty & fragrances</p>
                </span>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9e1d/k2-_720b3aa2-d89c-46e7-a394-73932dd17439.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>Home decor</p>
                </span>
              </div>
            </div>
            <div className={entryStyle.entry__reserve__right}>
              <h3>Valentine's Day gifts</h3>
              <div>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d211/k2-_a7e40192-5b24-4d3a-920a-37932e9941ee.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>20% off select tech</p>
                </span>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8128/k2-_51f905ac-f7cf-4843-9fd2-c18ec3444b07.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>45% off select auto</p>
                </span>
              </div>
              <div>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-36dd/k2-_e964cb98-e625-4d76-a64d-193059753cab.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>20% off select home</p>
                </span>
                <span>
                  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-9337/k2-_bfea8893-3b33-456d-8ac5-e28a5f7d297e.v1.jpg?odnHeight=128&odnWidth=128&odnBg=FFFFFF" alt="" />
                  <p>20% off select baby gear</p>
                </span>
              </div>
            </div>
          </div>
          <div className={entryStyle.entry__walmartplus}>
            {/* <img src="" alt="" /> */}

            <p><img src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-white.svg" alt="" />Members get free shipping with no order minimum! Terms apply <span>Join Walmart+</span></p>
          </div>

          <div className={entryStyle.entry__health}>
            <div className={entryStyle.entry__health__line}></div>
            <h3>Health & wellness</h3>
            <div className={entryStyle.entry__health__container}>
              <div className={entryStyle.entry__health__item}>
                <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-3432/k2-_12c7e138-42f9-4151-a531-10e8d1a3f5e2.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                <h4>At-home COVID-19 tests</h4>
                <p>Now available at Walmart.</p>
                <button>Shop now</button>
              </div>
              <div className={entryStyle.entry__health__item}>
              <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-f8d6/k2-_7f9ced9d-3ccf-4602-8a79-56f726caea64.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                <h4>At-home COVID-19 tests</h4>
                <p>Now available at Walmart.</p>
                <button>Schedule now</button>
              </div>
              <div className={entryStyle.entry__health__item}>
              <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-d7eb/k2-_feec3339-3120-45bf-9ce7-e1fad1c9eccd.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" alt="" />
                <h4>At-home COVID-19 tests</h4>
                <p>Now available at Walmart.</p>
                <button>Shop now</button></div>  
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Entry