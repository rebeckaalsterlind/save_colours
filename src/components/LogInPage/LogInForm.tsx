import PrimaryBtn from "../reuse/PrimaryBtn"

export default function LogInForm () {
    return (
        <form>
            <input type="text" placeholder="Användarnamn" />
            <input type="text" placeholder="Lösenord" />
            <PrimaryBtn /> // prop: log in, behaviour
        </form>
    )
}