
import { useRouter } from 'next/router';

const CategoryDetails = ({ category }) => {
    console.log('Category Details');
    
    // const router = useRouter();
    // console.log(router);
    const { query: { categoryid } } = useRouter();

    return (
        <div className="container center m-t-3">
            <code> From route: {categoryid} </code>
            <h2> {category.id}: <em>{category.name}</em> </h2>
        </div>
    )
}


// called at build time
export async function getStaticPaths() {
    console.log('getStaticPaths');

    const res = await fetch('http://localhost:4000/categories')
    const categories = await res.json()
  
    // Get the paths we want to pre-render based on categories
    const paths = categories.map( category => ({
      params: { categoryid: category.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  

export async function getStaticProps({ params }) {
    console.log('getStaticProps', params);
    
    const res = await fetch(`http://localhost:4000/categories/${params.categoryid}`)
    const category = await res.json()

    // Pass post data to the page via props
    return { props: { category } }
}


export default CategoryDetails;

