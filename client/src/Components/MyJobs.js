import { useState } from "react"

function MyJobs ({login, jobs, user, setUpdate}) {
    const [newJob, setNewJob] = useState({
        title: "",
        description: "",
        payout: "",
        location: "",
        poster_id: ""
    })
    const [editing, setEditing] = useState(false)
    const [editingJob, setEditingJob] = useState({})

    const postFilter = jobs.filter(job => job.poster_id === user.id).sort((a, b) => a.id - b.id);
    const takeFilter = jobs.filter(job => job.taker_id === user.id).sort((a, b) => a.id - b.id);
    
    const postedJobs = postFilter.map(job => {
        return (
            <>
                    <h3>{job.title}</h3>
                    <p>Location: {job.location}</p>
                    <p>{job.description}</p>
                    <p>Pay: {job.payout}</p>
                    <button onClick={() => {handleEditButton(job)}}>Edit</button>
                    <button onClick={() => handleDelete(job)} >Delete</button>
            </>
        )
    })

    const takenJobs = takeFilter.map(job => {
        return (
            <>
                <h3>{job.title}</h3>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
                <p>Pay: {job.payout}</p>
                <button onClick={() => handleCancel(job)} >Cancel</button>
            </>
        )
    })

    function handleSubmit (e) {
        e.preventDefault()
        newJob.poster_id = user.id
        console.log(newJob)
        fetch('http://localhost:3000/jobs', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newJob),
            credentials: "include"
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setNewJob({
                title: "",
                description: "",
                payout: "",
                location: "",
                poster_id: ""
            })
            setUpdate(true)
        })
    }
    
    function handleDelete (job) {
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include"
        })
        .then(setUpdate(true))
    }

    function handleJobForm (e) {
        setNewJob({...newJob, [e.target.name] : e.target.value})
    }

    function handleEditForm (e) {
        setEditingJob({...editingJob, [e.target.name] : e.target.value})
    }

    function handleCancel (job) {
        job.taker_id = null
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(job),
            credentials: "include"
        })
        .then(setUpdate(true))
    }

    function handleEditButton (job) {
        setEditing(true)
        setEditingJob(job)
        setNewJob({
            title: job.title,
            description: job.description,
            payout: job.payout,
            location: job.location
        })
    }

    function handleEdit (job) {
        fetch(`http://localhost:3000/jobs/${job.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(job),
            credentials: "include"
        })
        .then(setUpdate(true))
    }
    
    return (
        <>
            {login ?
                <> 
                    <h1>Create a Job:</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Job Title <br/>
                            <input type="text" placeholder="Handyman" name="title" onChange={handleJobForm}/> 
                        </label> <br />
                        <label>Location <br/>
                            <input type="text" placeholder="Anytown, USA" name="location" onChange={handleJobForm}/> 
                        </label> <br />
                        <label>Description <br/>
                            <textarea type="text" placeholder="Description for the job..." name="description" onChange={handleJobForm}/> 
                        </label> <br />
                        <label>Pay <br/>
                            <input type="number" placeholder="$$$" name="payout" onChange={handleJobForm}/> 
                        </label>
                        <button>Submit</button>
                    </form>
                    <h1>Posted Jobs</h1>
                    {editing ?
                    <>
                        <form onSubmit={() => {handleEdit(editingJob); setEditing(false)}}>
                            <label>Job Title <br/>
                                <input type="text" value={editingJob.title} placeholder="Handyman" name="title" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Location <br/>
                                <input type="text" value={editingJob.location} placeholder="Anytown, USA" name="location" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Description <br/>
                                <textarea type="text" value={editingJob.description} placeholder="Description for the job..." name="description" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Pay <br/>
                                <input type="number" value={editingJob.payout} placeholder="$$$" name="payout" onChange={handleEditForm}/> 
                            </label>
                            <button>Submit</button>
                        </form>
                    </>
                        :
                    <>
                        {postedJobs.length === 0 ? <p>No jobs posted!</p> : postedJobs}
                        <h1>Taken Jobs</h1>
                        {takenJobs.length === 0 ? <p>No jobs taken!</p> : takenJobs}
                    </>
                    }
                </>
                    :
                <p>Please log in to see and create your jobs!</p>
            }
        </>
    )
}
export default MyJobs