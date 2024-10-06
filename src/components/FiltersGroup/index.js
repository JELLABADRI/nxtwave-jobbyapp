import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event)
  }
  const onEnterSearchInput = event => {
    const {getJobs} = props
    if (event.key === 'Enter') {
      getJobs()
    }
  }
  const renderSearchInput = () => {
    const {getJobs, searchInput} = props
    return (
      <div className='row'>
        <label htmlFor='searchInput'>Search</label>
        <input
          type='search'
          placeholder='Search'
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          value={searchInput}
        />
        <button
          aria-label='Save'
          type='button'
          data-testid='searchButton'
          id='searchButton'
          onClick={getJobs}
        >
          <BsSearch />
        </button>
      </div>
    )
  }
  const onSelectEmployeeType = event => {
    const {changeEmployeeList} = props
    changeEmployeeList(event.target.value)
  }
  const renderTypeOfEmployment = () => {
    const {employmentTypesList} = props
    return (
      <div>
        <h1>Type of Employment</h1>
        <ul>
          {employmentTypesList.map(eachEmployeeType => (
            <li key={eachEmployeeType.employmentTypeId}>
              <input
                type='checkbox'
                id={eachEmployeeType.employmentTypeId}
                value={eachEmployeeType.employmentTypeId}
                onChange={onSelectEmployeeType}
              />
              <label
                htmlFor={eachEmployeeType.employmentTypeId}
                className='check-label'
              >
                {eachEmployeeType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  const renderSalaryRange = () => {
    const {salaryRangesList} = props
    return (
      <div>
        <h1>Salary Range</h1>
        <ul>
          {salaryRangesList.map(eachSalary => {
            const {changeSalary} = props
            const onClickSalary = () => {
              changeSalary(eachSalary.salaryRangeId)
            }
            return (
              <li key={eachSalary.salaryRangeId} onClick={onClickSalary}>
                <input
                  type='radio'
                  id={eachSalary.salaryRangeId}
                  name='salary'
                />
                <p>fff</p>
                <label htmlFor={eachSalary.salaryRangeId}>
                  {eachSalary.label}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
  return (
    <div>
      {renderSearchInput()}
      <ProfileDetails />
      <hr />
      {renderTypeOfEmployment()}
      <hr />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
