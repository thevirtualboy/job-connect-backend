

function JobList ({jobs, user, setUpdate, login}) {
    const takeFilter = jobs.filter(job => job.taker_id !== user.id).sort((a, b) => a.id - b.id);
    
    const jobList = takeFilter.map(job => {
        return (
            <>
                <h3>{job.title}</h3>
                <p>Location: {job.location}</p>
                <p>{job.description}</p>
                <p>Pay: {job.payout}</p>
                {login ? 
                <button onClick={() => handleAccept(job, user)} >Accept</button>
                :
                null
                }
            </>
        )
    })

    function handleAccept (job, user) {
        job.taker_id = user.id
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
            {jobList}
        </>
    )
}
export default JobList