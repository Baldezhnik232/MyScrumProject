import { projectsMocks } from "./moks/projects.mock.tsx";
import {Project, IProjectsRequest, Sprint, Backlog, Tasks} from './types/interfaceApi.tsx'
import {sprintsMoks} from './moks/sprints.mock.tsx'
import {backlogMocks} from './moks/backlog.mock.tsx'
import {tasksMocks} from './moks/tasks.mock.tsx'


export const projectsAPI = {
  getProjects: async(_filters:IProjectsRequest ): Promise< Project[]> => {
    return new Promise ((resolve): void=> {
      setTimeout((): void => {
        resolve(projectsMocks)
      }, 1000)
    })
  }
}

export const sprintsMoksApi = {
  getSprints: async(_filters:IProjectsRequest ): Promise<Sprint[]> =>{
    return new Promise ((resolve): void => {
      setTimeout((): void => {
        resolve(sprintsMoks)
      },1000)
    })
  }
}

export const backlogMoksApi = {
  getBacklog: async(_filters:IProjectsRequest ): Promise<Backlog[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void=> {
        resolve(backlogMocks)
      },1000 )
    })
  }
}

export const tasksMocksApi = {
  getTasks: async(_filters:IProjectsRequest ): Promise<Tasks[]> => {
    return new Promise((resolve):void => {
      setTimeout((): void => {
        resolve(tasksMocks)
      },1000)
    })
  }
}
