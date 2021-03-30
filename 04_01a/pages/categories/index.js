
import { useRouter } from 'next/router';

function Category() {

    console.log('Categories');
    const router = useRouter();
    console.log(router);

    return (
        <h2> Categories </h2>
    )
}

export default Category;
