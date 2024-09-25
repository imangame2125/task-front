import { useState } from 'react'
import Filter from './components/filter'
import Tree, { TreeNode } from '@/components/tree'

const treeDataMock: TreeNode[] = [
  {
    title: 'Group title',
    key: '1',
    children: [
      {
        title: 'Option',
        key: '1-1',
      },
      {
        title: 'Option',
        key: '1-2',
        children: [
          {
            title: 'Item',
            key: '1-2-1',
          },
          {
            title: 'Item',
            key: '1-2-2',
          },
          {
            title: 'Item',
            key: '1-2-3',
          },
          {
            title: 'Item',
            key: '1-2-4',
          },
          {
            title: 'Item',
            key: '1-2-5',
          },
        ],
      },
    ],
  },
]

const Home = () => {
  const [expandedKeys, setExpandedKeys] = useState<string[]>([])

  const handleNodeSelect = (key: string) => {
    setExpandedKeys((prevKeys) => {
      if (prevKeys.includes(key)) {
        return prevKeys.filter((k) => k !== key)
      }
      return [...prevKeys, key]
    })
  }

  return (
    <>
      <Filter />
      <div className='w-full '>
        <Tree data={treeDataMock} expandedKeys={expandedKeys} onNodeSelect={handleNodeSelect} />
      </div>
    </>
  )
}

export default Home
