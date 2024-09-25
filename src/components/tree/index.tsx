import { FC } from 'react'
import Anchor from './Anchor'

export type TreeNode = {
  title: string
  key: string
  children?: TreeNode[]
}

interface TreeProps {
  data: TreeNode[]
  onNodeSelect?: (key: string) => void
  onNodeExpand?: (key: string) => void
  onNodeCollapse?: (key: string) => void
  expandedKeys?: string[]
}

const Tree: FC<TreeProps> = ({ expandedKeys, data, onNodeSelect }) => {
  return (
    <ul className='pl-3'>
      {data.map((node) => (
        <li key={node.key}>
          <div className='flex items-center gap-x-2'>
            <Anchor
              onClick={() => onNodeSelect?.(node.key)}
              exapnded={expandedKeys?.some((exKey) => exKey === node.key)}
            />
            {node.title}
          </div>
          {expandedKeys?.some((exKey) => exKey === node.key) && node.children && (
            <Tree data={node.children} expandedKeys={expandedKeys} onNodeSelect={onNodeSelect} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Tree
