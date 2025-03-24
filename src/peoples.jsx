import { use } from "react"
import People from "./people"

export default function Peoples({peoplePromise}){
    const peoples = use(peoplePromise)
    return(
        <div className="box">
            <h2>peoples: {peoples.length}</h2>
            {
                peoples.map((people)=><People key={people.id} people={people}></People>)
            }
        </div>
    )
}