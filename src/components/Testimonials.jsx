function Testimonials(){
    let testimonials = [
        {
            name: "prateek",
            feedback:"prateek is the a real pleasure to with and we look forward to working with him faAmericanSignLanguageInterpreting. He's definately the kind of developer you can trust with a project from start to finish.",
            job_profile:"sr-dev",
            company: "tcs",
            img_url: "../assets/img.png",
        },
        {
            name: "prateek",
            feedback:"prateek is the a real pleasure to with and we look forward to working with him faAmericanSignLanguageInterpreting. He's definately the kind of developer you can trust with a project from start to finish.",
            job_profile:"sr-dev",
            company: "tcs",
            img_url: "../assets/img.png",
        }

    ]
    return(
        <>
        <div className="tesimonials-head">
        <h2 className="pt-regular">Testimonials</h2>
        <p className="pt-italic">People I've worked with have said some nice things...</p>
        </div>
        <div className="testimonials-slider">
        <img src={testimonials.img_url} alt="" />
        <p>{testimonials.feedback}</p>
        <h3>{testimonials.name}</h3>
        <p>{testimonials.job_profile} , {testimonials.company}</p>
        </div>
        </>
    )
}
export default Testimonials;