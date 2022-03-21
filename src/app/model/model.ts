export interface IFreelancer {
    id: number,
    name: string,
    email: string,
    cntctNum: string,
    city: string,
    jobTitle: string,
    jobBio: string,
    org: string,
    desgntn: string,
    wrkExpInYrs: string, 
    skills: string,
    edu: string,
    gitUname: string,
    salary: number
}

export interface IEmployer {
    id: number,
    name: string,
    email: string,
    cntctNum: string,
    city: string,
    jobTitle: string,
    jobBio: string,
    org: string,
    desgntn: string,
    wrkExpInYrs: string,
    edu: string,
}

export interface IJobs {
    id: number,
    jobTitle: string,
    reqExp: string,
    skills: string,
    jobDesc: string,
    salary: number,
    emplyrId: number,
    email: string,
    org: string,
    createdOn: string
}

export interface IAppliedJobs {
    id: number,
    jobTitle: string,
    reqExp: string,
    skills: string,
    jobDesc: string,
    salary: number,
    emplyrId: number,
    email: string,
    org: string,
    createdOn: string,
    appliedOn: string
}