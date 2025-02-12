import { projectsMocks } from "./projects.mock";
import {Project, IProjectsRequest} from './interfaceApi'


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