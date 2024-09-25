import { useState } from 'react'
import Filter from './components/filter'
import Tree, { TreeNode } from '@/components/tree'
import Card from '@/components/card'
import CardOne from '@/assests/images/card-img.svg'
import CardTwo from '@/assests/images/bar-chart.png'
import CardThree from '@/assests/images/Chart 3.svg'
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
      <div className='w-full h flex gap-x-2 h-screen '>
        <div className='w-48 border border-[#E0E0E0]'>
          <Tree data={treeDataMock} expandedKeys={expandedKeys} onNodeSelect={handleNodeSelect} />
        </div>
        <div className='w-full'>
          <div className='w-full py-2 flex mt-5'>
            <div className='flex'>
              <Card
                label2='Label 2'
                timePeriods={{
                  period1: '7 days',
                  period2: '30  days',
                  period3: '60 days',
                }}
                description='Description'
                title='Card title'
                imageUrl={CardOne}
                label1='Label 1'
              />
            </div>
            <div className=''>
              <Card
                label2='Label 2'
                description='Description'
                title='Card title'
                imageUrl={CardTwo}
                label1='Label 1'
              />
            </div>
            <div className='w-3/4'>
              <Card
                description='Description'
                title='Card title'
                imageUrl={CardThree}
                timePeriods={{
                  period1: '7 days',
                  period2: '30  days',
                  period3: '60 days',
                }}
              />
            </div>
          </div>
          <div className='w-1/3'>
            <Card
              description='Description'
              title='Card title'
              imageUrl={CardThree}
              timePeriods={{
                period1: '7 days',
                period2: '30  days',
                period3: '60 days',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
