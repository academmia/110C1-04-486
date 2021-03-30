
import { useRouter } from 'next/router';

function CategoryDetails() {
    
    console.log('Category Details');
    const router = useRouter();
    console.log(router);

    return (
        <h2> Category </h2>
    )
}

export default CategoryDetails;

