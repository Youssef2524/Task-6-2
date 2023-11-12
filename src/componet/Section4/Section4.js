import "./Section4.jsx"
import "./Section4.css"
import axios from "axios"
import { useEffect, useState } from "react"
function Section4() {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const api = async () => {
            const p = await axios.get("https://dummyjson.com/products")
          
            setProducts(p.data.products)

        }
        api()
    }, [])
    return (
        <>
            <section className="sec-arrives mt-5">
                <h2>Our product</h2>
                <div className="container">

                    <div className="slide-container swiper">
                        <div className="slide-cont">
                            <div className="card-wrapper swiper-wrapper" id="sliders">
                            </div>
                           
                        </div>
                    </div>
                    {products.map((product) => {
                        if (product.id < 7) {
                            return (
                                <div className="cards swiper-slide">
                                    <div className="imgs-sliser">
                                        <img src={product.images[0]} alt="" className="imgsss" />
                                    </div>
                                    <div className="card-contents">
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <p className="pricss">{product.price + "$"}</p>
                                    </div>
                                </div>
                            )
                        }



                    }
                    )
                    }

                </div>
            </section>

        </>
    )
}

export default Section4

