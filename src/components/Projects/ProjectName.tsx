import EditBtns from "../reuse/EditBtns"
import data from "../../mockdata.json";

console.log(data.projects);

export default function ProjectName () {

    return (
        <div>
            <p>Propname</p>
            {data.projects.map((project: any, index: number) => (
                <h1 key={project.id}> {project.name}</h1>
                ))}
            <EditBtns />
        </div>
    )
}