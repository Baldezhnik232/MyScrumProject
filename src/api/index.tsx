import { projectsMocks } from "./projects.mock";
import {Project, IProjectsRequest, Sprint, Backlog, Tasks} from './interfaceApi'
import {sprintsMoks} from './sprints.mock'
import {backlogMocks} from './backlog.mock'
import {tasksMocks} from './tasks.mock'


export const projectsAPI = {
  getProjects: async(_filters:IProjectsRequest ): Promise< Project[]> => {
    return new Promise ((resolve)=> {
      setTimeout(()=> {
        resolve(projectsMocks)
      }, 1000)
    })
  }
}

export const sprintsMoksApi = {
  getSprints: async(_filters:IProjectsRequest ): Promise<Sprint[]> =>{
    return new Promise ((resolve)=> {
      setTimeout(()=> {
        resolve(sprintsMoks)
      },1000)
    })
  }
}

export const backlogMoksApi = {
  getBacklog: async(_filters:IProjectsRequest ): Promise<Backlog[]> => {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(backlogMocks)
      },1000 )
    })
  }
}

export const tasksMocksApi = {
  getTasks: async(_filters:IProjectsRequest ): Promise<Tasks[]> => {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(tasksMocks)
      },1000)
    })
  }
}
