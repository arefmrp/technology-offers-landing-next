import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from "react";
import {productsFetch} from "../lib/productsFetch";
import {detailsFetch} from "../lib/detailsFetch";
import ProductItem from "../components/productItem";
import AccordionItem from "../components/AccordionItem";
import BrandItem from "../components/BrandItem";


// Import Swiper React components
import { Swiper, SwiperSlide  } from 'swiper/react';
import {Autoplay} from "swiper";

// Import Swiper styles
import 'swiper/css';






export default function Home(props) {
  let products = props.productItems.products;
  let questions = props.detailsItems.questions;
  let agencies = props.detailsItems.agencies;
  let brands = props.detailsItems.brands;


  return (
    <div>


      <nav className="navbar-cs-section " >
        <div className="container">
          <div className="navbar-cs">
            <div className="navbar-cs-links">


                <span><a href="#" className="navbar-cs-item-link">خانه</a></span>
                <span><a href="#" className="navbar-cs-item-link">درباره ما </a></span>
                <span><a href="#" className="navbar-cs-item-link">وبلاگ</a></span>


            </div>
            <div className="navbar-cs-logo">
              <a href="#" className="navbar-logo"><img src="/images/logo1.png"></img></a>
            </div>
           <div className={'navbar-cs-aside'}>
             <span className="navbar-cs-item"><a href="#" className="navbar-cs-item-link">09114843775<i
                 className="fa fa-phone"></i></a></span>
             <span className="navbar-cs-item"><a href="#" className="navbar-cs-item-link">درباره ما</a></span>
           </div>


          </div>
        </div>
      </nav>

      <div className="home-section">

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-sm-6 col-xs-12">
              <div className="home-section-image"><img src="/images/header.jpg"></img></div>

            </div>
            <div className="col-md-5 col-sm-6 col-xs-12">
              <div className="home-section-desc">
                <div className="home-section-desc-texts">
                  <h3>جشنواره پاییزی تمام محصولات </h3>
                  <p>به صفحه لندینگ ما خوش آمدید در این جشنواره ما بیشتر محصولاتمان را با 10 تا 20 درصد تخفیف عرضه
                    میکنیم و در پایان جشنواره بین خریداران قرعه کشی میکنیم </p>
                  <a href="#">مشاهده محصولات </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>




      <div className="countdown-section">
        <div className="container">
          <div className="countdown-section-div">
            <div className="countdown-section-div-item">
              <div className="countdown-section-div-item-texts">
                <h3>34</h3>
                <h4>ثانیه</h4>
              </div>
            </div>
            <div className="countdown-section-div-item">
              <div className="countdown-section-div-item-texts">
                <h3>12</h3>
                <h4>دقیقه</h4>
              </div>
            </div>
            <div className="countdown-section-div-item">
              <div className="countdown-section-div-item-texts">
                <h3>15</h3>
                <h4>ساعت</h4>
              </div>
            </div>
            <div className="countdown-section-div-item">
              <div className="countdown-section-div-item-texts">
                <h3>3</h3>
                <h4>روز</h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="steps-section">

        <div className="container">
          <div className="section-titles">
            <h3>مراحل انتخاب محصول</h3>
            <h4>مراحل انتخاب محصول را با دقت انجام دهید تا بهترین محصول را انتخاب کنید</h4>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="steps-section-item">
                <span className="steps-section-item-title"><span>1_</span>جستو جوی نیاز</span>
                <span className="steps-section-item-desc">
                        <p>
                            در مرحله اول لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                    </span>
                <span className="steps-section-item-line"></span>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="steps-section-item">
                <span className="steps-section-item-title"><span>2_</span>انتخاب نوع دستگاه</span>
                <span className="steps-section-item-desc">
                        <p>
                            در مرحله دوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                    </span>
                <span className="steps-section-item-line"></span>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="steps-section-item">
                <span className="steps-section-item-title"><span>3_</span>انتخاب برند دستگاه</span>
                <span className="steps-section-item-desc">
                        <p>
                            در مرحله سوم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                    </span>
                <span className="steps-section-item-line"></span>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 ">
              <div className="steps-section-item">
                <span className="steps-section-item-title"><span>4_</span>انتخاب مدل دستگاه</span>
                <span className="steps-section-item-desc">
                        <p>
                            در مرحله چهارم لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </p>
                    </span>
                <span className="steps-section-item-line"></span>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="tabs-section">
        <div className="container">
          <div className="section-titles">
            <h3>برند ها</h3>
            <h4>برند هایی که در این جشنواره حضور دارند و درصد تخفیف آنها</h4>
          </div>

          <div className="nav-pills-links-section">
            <ul className="nav nav-pills">


              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#home">ایسوس</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu1">سامسونگ</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu2">اپل</a>
              </li>


              <li className="nav-item">
                <a className="nav-link " data-toggle="pill" href="#menu3">شیاومی</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu4">ایسر</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" data-toggle="pill" href="#menu5">دل</a>
              </li>



            </ul>
          </div>



          <div className="nav-pills-content-section">
            <div className="tab-content">
              <div className="tab-pane container active" id="home">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'asus' ? <div className="col-md-4 col-sm-6 col-xs-12">
                          <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                        </div>:null)

                    }


                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu1">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'samsung' ? <div className="col-md-4 col-sm-6 col-xs-12">
                        <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                      </div>:null)

                    }

                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu2">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'apple' ? <div className="col-md-4 col-sm-6 col-xs-12">
                        <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                      </div>:null)

                    }

                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu3">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'xiaomi' ? <div className="col-md-4 col-sm-6 col-xs-12">
                        <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                      </div>:null)

                    }

                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="menu4">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'acer' ? <div className="col-md-4 col-sm-6 col-xs-12">
                        <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                      </div>:null)

                    }

                  </div>
                </div>

              </div>
              <div className="tab-pane container fade" id="menu5">
                <div className="container-fluid">
                  <div className="row">
                    {
                      products.map((item)=>item.category === 'dell' ? <div className="col-md-4 col-sm-6 col-xs-12">
                        <ProductItem id={item.id} image={item.image} name={item.name} discount={item.discount}></ProductItem>
                      </div>:null)

                    }

                  </div>
                </div>
              </div>

            </div>
          </div>


        </div>

      </div>


      <div className="support-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <img src="/images/1558510011good-customer-service.jpg" className="support-section-image"></img>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="support-section-texts">
                <h3>پشتیبانی</h3>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                  متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seller-section">

        <div className="container-main">

            <Swiper
                spaceBetween={30}
                slidesPerView={6}
                modules={[Autoplay]}
                autoPlay={{
                  delay:2500,
                  disableOnInteraction:true,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

              {
                brands.map((item)=>{
                  return  <SwiperSlide><BrandItem img={item.img}></BrandItem></SwiperSlide>
                })
              }
            </Swiper>




        </div>


      </div>


      <div className="questions-section">
        <div className="container-main">
          <div className="row">
            <div className="col-sm-6 col-12">
              <div className="accordion-titles">
                <p>سوالات متداول</p>
              </div>
              {
                questions.map((item)=>{
                  return (<AccordionItem id={item.id} title={item.title} desc={item.desc}></AccordionItem>)
                })
              }


            </div>
            <div className="col-sm-6 col-12">
              <div className="accordion-titles">
                <p>نمایندگی ها</p>
              </div>
              {
                agencies.map((item)=>{
                  return (<AccordionItem id={item.id} title={item.city} desc={item.desc}></AccordionItem>)
                })
              }



            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="container">
          <div className="footer-cs1">
            <div className="footer-cs-item"><a href="#" className="footer-cs-item-link">خانه</a></div>
            <div className="footer-cs-item"><a href="#" className="footer-cs-item-link">تماس با ما</a></div>
            <div className="footer-cs-item">
              <a href="#" className="footer-cs-item-link"><img src="/images/logo1.png"></img></a>
            </div>
            <div className="footer-cs-item"><a href="#" className="footer-cs-item-link">وبلاگ</a></div>
            <div className="footer-cs-item"><a href="#" className="footer-cs-item-link">قوانین</a></div>
          </div>
        </div>
      </div>

      <div className="info">
        <span className={'info-icons'}>
          <a href={'#'}><i className={'fa fa-instagram'}></i></a>
          <a href={'#'}><i className={'fa fa-whatsapp'}></i></a>
          <a href={'#'}><i className={'fa fa-telegram'}></i></a>
          <a href={'#'}><i className={'fa fa-phone'}></i></a>
        </span>
        <span className={'info-details'}><a href="#">عارف محمد رضا پور</a></span>

      </div>



    </div>
  )
}
export async function getStaticProps(props){
  let productItems = await productsFetch() ;
  let detailsItems = await detailsFetch() ;
  return {
    props:{
      productItems,
      detailsItems
    }
  }
}
