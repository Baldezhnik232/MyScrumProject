
import { useState, useEffect } from "react";
import {projectsAPI} from '../../../api/index'
import { Project } from "../../../api/interfaceApi";

export const useHomeProjectsItems = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setloading] = useState<boolean>(true)

  useEffect(()=> {
    projectsAPI.getProjects({})
      .then((data)=> setProjects(data))
      .finally(()=> setloading(false))
  }, [])

  return {projects, loading}
}

