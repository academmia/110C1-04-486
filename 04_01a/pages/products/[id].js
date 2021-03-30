
import { useRouter } from 'next/router';

function Product() {

    // pentru a verifica obiectul router
    // const router = useRouter();
    // console.log(router);

    const { query: { id } } = useRouter();

    return (
        <>
            <div className="promo-box-s bg-light-grey">
                <div className="container">
                    <h1>Product { id }</h1>
                </div>
            </div>

            <div className="row container m-v-2 justify-content-center">

                    <div className="col-md-6" style={{minWidth: '4rem'}}>
                        
                        <p className="font-weight-400 left h4 m1">35.2 E</p>
                        <hr className="hr m-v-1" />
                        <p className="p-v-1 m1">Product Desc</p>
                        <hr className="hr m-v-1" />
                        <button className="m1">Add to Cart</button>
                           
                    </div>
            
            </div>
        </>
    )
}

export default Product;

