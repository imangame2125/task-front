import { useState } from 'react'
import Filter from './components/filter'
import Tree, { TreeNode } from '@/components/tree'
import Card from '@/components/card'
import CardOne from '@/assests/images/card-img.svg'
import CardTwo from '@/assests/images/bar-chart.png'
import CardThree from '@/assests/images/Chart 3.svg'
import useDevice from '@/hooks/useDevice'
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

  const { isTabletOrMobile } = useDevice()

  return (
    <>
      <Filter />
      <div className='w-full flex gap-x-5'>
        <div
          className={`w-full border border-[#E0E0E0] basis-1/6 ${isTabletOrMobile ? 'hidden' : ''} `}
        >
          <Tree data={treeDataMock} expandedKeys={expandedKeys} onNodeSelect={handleNodeSelect} />
        </div>
        <div className='w-full'>
          <div
            className={`w-full py-2 flex gap-2 mt-5 ${isTabletOrMobile ? 'flex-col' : 'flow-row'}`}
          >
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
            <Card
              label2='Label 2'
              description='Description'
              title='Card title'
              imageUrl={CardTwo}
              label1='Label 1'
            />
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
    </>
  )
}

export default Home
