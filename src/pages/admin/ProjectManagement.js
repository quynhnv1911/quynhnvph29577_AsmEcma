import { getAll, remove } from "../../api/project"
import { useEffect, useState } from "../../lib"
import axios from 'axios'

const ProjectManagementPage = () => {
    const [projects, setProject] = useState([])
    useEffect(() => {
        // fetch(`http://localhost:3000/projectList`)
        //     .then(res => res.json())
        //     .then(data => setProject(data))

        // axios.get(`http://localhost:3000/projectList`)
        //     .then(({ data }) => setProject(data))

        // axios.get(`http://localhost:3000/users`)
        //     .then(({ data }) => setProject(data))
        getAll().then(({ data }) => setProject(data))

    }, [])

    useEffect(() => {
        const btnList = document.querySelectorAll(".btn-remove")
        for (let btn of btnList) {
            const id = btn.dataset.id
            btn.addEventListener('click', () => {
                // fetch(`http://localhost:3000/projectList/${id}`, {
                //     method: 'DELETE'
                // }).then(() => {
                //     const newProjectList = projects.filter((project) => {
                //         return project.id != id
                //     })
                //     setProject(newProjectList);
                // })

                remove(id).then(() => {
                    const newProjectList = projects.filter((project) => {
                        return project.id != id
                    })
                    setProject(newProjectList);
                })
            })
        }
    })
    return /*html */`
        <h1 class="text-center text-lg" style="font-size: 30px;
        font-weight: 500;"> Management Page</h1>
        <a class="btn-remove text-red-700 " style="font-size:20px;
        font-weight: 500; 
        padding:70px 0 30px 0;" href="/admin/project/add"><button>Add New Project</button></a>
        <table>
        <thead>
            <tr>
            <th>Stt</th>
            <th>Project Title</th>
            <th>Project Content</th>
            <th>Project Image</th>
            <th class="pl-10">Project Url</th>
            <th class="pl-10">Project Repository</th>
            <th class="pl-12">Action</th>
            </tr>
        </thead>
        <tbody>
            ${projects.map((project, index) => {
        return /*html */`
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.title}</td>
                        <td>${project.description}</td>
                        <td><img src="${project.image}"></td>
                        <td class="pl-10">${project.url}</td>
                        <td class="pl-10">${project.repository}</td>
                        <td class="pl-12" >
                            <button class="btn-remove text-red-700 mx-4 " data-id="${project.id}">Delete</button>
                            <a class="btn-remove text-red-700" href="/admin/project/update/${project.id}"><button>Update</button></a>
                        </td>
                    </tr>
                `
    }).join("")}
        </tbody>
        </table>
    `
}
export default ProjectManagementPage