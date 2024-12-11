import React, { useEffect } from 'react'
import { useTreeStructureStore } from '../../../store/treeStructureStore'
import { useParams } from 'react-router-dom'
import Tree from '../../molecules/Tree/Tree.jsx'

function TreeStructure() {
    const { treeStructure , setTreeStructure } = useTreeStructureStore()
    useEffect(()=>{
        if(treeStructure) {
            return
        } else {
            setTreeStructure(treeStructure)
        }
    },[setTreeStructure,treeStructure])
  return (
    <div>
        <Tree fileFolderData={treeStructure}/>
    </div>
  )
}

export default TreeStructure