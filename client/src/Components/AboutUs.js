import image from '../aboutusimg.jpg'

const bodyStyle = {
    textAlign: "center"
}

function AboutUs () {
    return (
        <div style={bodyStyle}>
            <img style={{paddingTop: "30px", maxWidth: "1000px", width: "90%"}} src={image} />
            <h1 style={{fontFamily: "sans-serif"}}>What is Job Connect?</h1>
            <p style={{maxWidth: "1000px", textAlign: "left", margin: "auto", width: "75%", fontFamily: "sans-serif", fontSize: "20px"}}>JobConnect is a platform which allows clients to hire and work with freelancers/Consultants and for freelancers/Consultants to apply to jobs. The client posts a description of their job and a price range they are willing to pay for a freelancer to complete it. The client may invite specific freelancers to apply for their jobs, or else post the job for any freelancer who is interested to apply. Once the client has chosen who they want to complete the job, they hire that freelancer by sending a contract with set hours, pay rate, and a deadline for the work to be completed. Freelancers/Consultants can apply to any jobs posted on the platform.</p>
        </div>
    )
}
export default AboutUs