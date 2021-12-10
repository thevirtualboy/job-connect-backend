import { useState } from "react"

const form2Styles = {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    maxWidth: "500px",
    justifyContent: "space-around"
  }
  
  const pageStyle = {
    fontFamily: "sans-serif",
    marginTop: "20px"
  }
  
  const btnStyle = {
    marginTop: "10px",
    marginBottom: "10px", 
    marginRight: "5px",
    width: "75px", 
    backgroundColor: "#0A8FF1",
    color: "white",
    fontSize: "20px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px"
  }

  const createBtnStyle = {
    marginTop: "10px",
    marginBottom: "10px", 
    marginRight: "5px",
    width: "130px", 
    backgroundColor: "#0A8FF1",
    color: "white",
    fontSize: "20px",
    borderRadius: "3px",
    borderWidth: "1px",
    borderColor: "black",
    padding: "2px",
    float: "right"
  }

  const jobStyle = {
    fontFamily: "sans-serif", 
    fontSize: "20px", 
    textAlign: "left",
    width: "90%", 
    margin: "auto", 
    lineHeight: "30px", 
    borderBottomStyle: "solid", 
    borderWidth: "2px", 
    borderColor: "lightgray" 
  }
  

function MyJobs ({login, jobs, user, setUpdate}) {
    const [newJob, setNewJob] = useState({
        title: "",
        description: "",
        payout: "",
        location: "",
        poster_id: "",
        taker_id: "",
    })
    const [editing, setEditing] = useState(false)
    const [editingJob, setEditingJob] = useState({})
    const [creating, setCreating] = useState(false)

    const postFilter = jobs.filter(job => job.poster_id === user.id).sort((a, b) => a.id - b.id);
    const takeFilter = jobs.filter(job => job.taker_id === user.id).sort((a, b) => a.id - b.id);
    
    const postedJobs = postFilter.map(job => {
        return (
            <div key={job.id} style={jobStyle}>
                    <h3>{job.title}</h3>
                    <p>Location: <br/>{job.location}</p>
                    <p>Description: <br/>{job.description}</p>
                    <p>Pay: <br/>{job.payout}</p>
                    <p>Taker: {job.taker_id === null ? "None" : `${job.taker.name} (${job.taker.phone})`}</p>
                    <button className='btn' onClick={() => handleEditButton(job)} style={btnStyle}>Edit</button>
                    <button className='btn' onClick={() => handleDelete(job)} style={btnStyle}>Delete</button>
            </div>
        )
    })

    const takenJobs = takeFilter.map(job => {
        return (
            <div key={job.id} style={jobStyle}>
                <h3>{job.title}</h3>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
                <p>Pay: {job.payout}</p>
                <p>Poster: {job.poster.name} ({job.poster.phone})</p>
                <button className='btn' onClick={() => handleCancel(job)} style={btnStyle} >Cancel</button>
            </div>
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
            setCreating(false)
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
        <div style={pageStyle}>
            {login ?
                <> 
                    {editing ? 
                    null
                        :
                    <>
                        {creating ?
                        <form onSubmit={handleSubmit} style={form2Styles}>
                        <h1>Create a Job:</h1>
                            <label>Job Title: <br/>
                                <input type="text" placeholder="Handyman" name="title" onChange={handleJobForm}/> 
                            </label> <br />
                            <label>Location: <br/>
                                <input type="text" placeholder="Anytown, USA" name="location" onChange={handleJobForm}/> 
                            </label> <br />
                            <label>Description: <br/>
                                <textarea type="text" placeholder="Description for the job..." name="description" onChange={handleJobForm} style={{width: "1000px", height: "100px"}}/> 
                            </label> <br />
                            <label>Pay: <br/>
                                <input type="number" placeholder="$$$" name="payout" onChange={handleJobForm}/> 
                            </label>
                            <button className='btn' style={btnStyle}>Submit</button>
                        </form>
                        :
                        <button className='btn' style={createBtnStyle} onClick={() => setCreating(true)}>Create a Job</button>
                        }
                    </>
                    }
                    {editing ?
                    <>
                        <h1>Edit Job:</h1>
                        <form onSubmit={() => {handleEdit(editingJob); setEditing(false)}} style={form2Styles}>
                            <label>Job Title <br/>
                                <input type="text" value={editingJob.title} placeholder="Handyman" name="title" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Location <br/>
                                <input type="text" value={editingJob.location} placeholder="Anytown, USA" name="location" onChange={handleEditForm}/> 
                            </label> <br />
                            <label>Description <br/>
                                <textarea type="text" value={editingJob.description} placeholder="Description for the job..." name="description" onChange={handleEditForm} style={{width: "1000px", height: "100px"}}/> 
                            </label> <br />
                            <label>Pay <br/>
                                <input type="number" value={editingJob.payout} placeholder="$$$" name="payout" onChange={handleEditForm}/> 
                            </label>
                            <button className='btn' style={btnStyle} >Submit</button>
                        </form>
                    </>
                        :
                    <>
                        {creating ?
                            null
                        :
                            <>
                                <h1>Posted Jobs</h1>
                                {postedJobs.length === 0 ? <p>No jobs posted!</p> : postedJobs}
                                <h1>Taken Jobs</h1>
                                {takenJobs.length === 0 ? <p>No jobs taken!</p> : takenJobs}
                            </>
                        }
                    </>
                    }
                </>
                    :
                <p style={{textAlign: "center", fontFamily: "Genos, sans-serif", fontSize: "50px", paddingTop: "20px"}}>Please log in to see and create your jobs!</p>
            }
        </div>
    )
}
export default MyJobs