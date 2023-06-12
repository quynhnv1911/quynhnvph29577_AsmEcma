import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "description": document.querySelector("#description").value,
                "image": document.querySelector("#image").value,
                "url": document.querySelector("#url").value,
                "repository": document.querySelector("#repository").value
            }
            // fetch(`http://localhost:3000/projectList`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(newProject)
            // }).then(() => {
            //     router.navigate('/admin/project')
            // })

            add(newProject).then(() => { router.navigate('/admin/project') })
        })

    })
    return /*html*/`
        <form action="" id="add-form">
            <input type="text" placeholder="Project title" id="title"/>
            <input type="text" placeholder="description" id="description"/>
            <input type="img" placeholder="image" id="image"/>
            <input type="text" placeholder="url" id="url"/>
            <input type="text" placeholder="repository" id="repository"/>
            <button>Add New Project</button>
        </form>
    `
}

export default AddProjectPage;