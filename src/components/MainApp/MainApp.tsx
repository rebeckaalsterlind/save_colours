import { store } from '../../store';
import AddProject from '../Forms/AddProject';
import AddColor from '../Forms/AddColor';
import Header from "../Header/Header";
import ProjectsWrapper from "../Projects/ProjectsWrapper"
import NewObjectBtn from "./NewObjectBtn"
import Banner from "./Banner"

export default function LogInPage() {
    return (
        <div>
            <Header />
            {store.getState().addProject
                && <AddProject />}
            {store.getState().addColor
                && <AddColor roomId={''} projectId={''}/>}
            {!store.getState().addProject && !store.getState().addColor &&
                <>
                    <ProjectsWrapper />
                    <footer>
                        <NewObjectBtn />
                        <Banner />
                    </footer>
                </>
            }
        </div>
    )
}