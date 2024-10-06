import {Link} from 'react-router-dom'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
    id,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li>
        <div>
          <div className="row">
            <img src={companyLogoUrl} alt="company logo" />
            <div>
              <h1>{title}</h1>
              <div className="row">
                <BsStarFill className="rating-icon" />
                <p className="rating-heading">{rating}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div>
              <div className="row">
                <MdLocationOn />
                <p>{location}</p>
              </div>
              <div className="row">
                <BsFillBriefcaseFill />
                <p>{employmentType}</p>
              </div>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr />
        <h1>Description</h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
