import image from '../joblistimg.png'

const bodyStyle = {
    textAlign: "center"
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

function JobList ({jobs, user, setUpdate, login}) {
    const takeFilter = jobs.filter(job => job.taker_id !== user.id).sort((a, b) => a.id - b.id);
    
    const jobList = takeFilter.map(job => {
        return (
            <div style={jobStyle}>
                <h3>{job.title}</h3>
                <p>Location: <br/>{job.location}</p>
                <p>Description: <br />{job.description}</p>
                <p>Pay: {job.payout}</p>
                {login ? 
                <button className='btn' onClick={() => handleAccept(job, user)} style={btnStyle}>Accept</button>
                :
                null
                }
            </div>
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
        <div style={bodyStyle}>
            <img style={{paddingTop: "30px", maxWidth: "1000px", width: "90%"}} src={image} />
            {login ?
                null
            :
                <p style={{textAlign: "center", fontFamily: "Genos, sans-serif", fontSize: "50px"}}>Please log in to accept jobs!</p>
            }
            {jobList}
        </div>
    )
}
export default JobList