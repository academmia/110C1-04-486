// categories/100/edit/admin
// query: {categoryid: "100", role: "admin"}

import { useRouter } from 'next/router';

function EditByRole() {
    
    console.log('Category Edit by Role');
    const router = useRouter();
    console.log(router);

    return (
        <h2> Category Edit by Role</h2>
    )
}

export default EditByRole;

