import { projectsMocks } from "./projects.mock";
import {Project, IProjectsRequest, Sprint} from './interfaceApi'
import {sprintsMoks} from './sprints.mock'


export const projectsAPI = {
  getProjects: async(_filters:IProjectsRequest ): Promise<Project[]> => {
    return new Promise ((resolve)=> {
      setTimeout(()=> {
        console.log('Запрос данных')
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