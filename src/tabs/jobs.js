import React ,{useState,useEffect} from "react";
import { useFetch } from "./useFetch";
import {FaAngleDoubleRight} from 'react-icons/fa';
const url="https://course-api.com/react-tabs-project";


const Jobs=()=>{
    const {loading,data}=useFetch(url);
     
    return(
        <main>
             {loading ? <Loading/> : <JobInfo jobs={data} />}
        </main>
    )
}

const Loading=()=>{
    return (
        <div className="loadingContainer">
            <h3>Loading...</h3>
        </div>
    )
}

const JobInfo=(jobs)=>{
     jobs=jobs.jobs;
     const [job,setJob]=useState(jobs[0]);
     
     const filterJobs=(id)=>{
       const newJob=jobs.filter((job)=>{
            return job.id===id;
        })
        setJob(newJob[0]);
     }
      
     return (
        <div className="jobsContainer">
            <div className="companyContainer">
                {jobs.map((job)=>{
                    return <button onClick={()=>{filterJobs(job.id)}} className="company" key={job.id}>{job.company}</button>
                })}
            </div>
       
            <div className="jobText">
                <h2 className="jobTitle">{job.title}</h2>
                <div className="companyName">{job.company}</div>
                <p className="dates">{job.dates}</p>
                <div className="jobDuties">
                    {job.duties.map((duty,index)=>{
                        return  <div className="duty">
                                <div className="arrow"><FaAngleDoubleRight/></div>
                                <p key={index} className="duty-pragraph"> {duty}</p>
                        </div> 
                    })}
                </div>

            </div>
        </div> 
     )
}

export default Jobs;