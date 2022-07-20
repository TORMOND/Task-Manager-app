import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const Project = () => {
    const { id } = useParams()
    const {data:project, isPending,error} = useFetch('http://localhost:8000/todos/' + id)

    return ( 
        <template>
            <div className="Project-page">
            {isPending && <div>Loading ...</div>}
                    {error && <div>{error}</div>}
                   { project && (
                    <div>
                        <h2>{project.activity}</h2>
                    </div>
                   )
                   }

            </div>
        </template>
     );
}
 
export default Project;