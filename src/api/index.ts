import { projectsMocks } from "./moks/projects.mock.ts";
import {Project, IProjectsRequest, Sprint, Tasks} from './types/interfaceApi.ts'
import {sprintsMoks} from './moks/sprints.mock.ts'
import {backlogMocks} from './moks/backlog.mock.ts'
import {tasksMocks} from './moks/tasks.mock.ts'


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
  getSprints: async (_filters: IProjectsRequest): Promise<Sprint[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve(sprintsMoks);
      }, 1000);
    });
  },

};

export const backlogMoksApi = {
  getBacklog:  ():Promise<Tasks[]> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        resolve([...backlogMocks.tasks]); 
      }, 1000);
    });
  },

  removeTaskFromBacklog: async (tasksID: number): Promise<void> => {
    return new Promise((resolve): void => {
      setTimeout((): void => {
        backlogMocks.tasks = backlogMocks.tasks.filter((task) => task.tasksID !== tasksID);
        resolve();
      }, 500);
    });
  },
};



export const tasksMocksApi = {
  getTasks: async(_filters:IProjectsRequest ): Promise<Tasks[]> => {
    return new Promise((resolve):void => {
      setTimeout((): void => {
        resolve(tasksMocks)
      },1000)
    })
  }
}
