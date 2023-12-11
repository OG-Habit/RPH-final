import CommonFramerMotion from '@/common/CommonFramerMotion'
import DoubleTextBlock from '@/common/DoubleTextBlock'
import SectionHeader from '@/common/SectionHeader'

export default function First() {
    return (
      <CommonFramerMotion>
        <SectionHeader 
            headerInfo={{
                title: "Founding of KKK by Andres Bonifacio", 
                subtitle:"July 7, 1892", 
                description: ""
            }}/>

        <DoubleTextBlock
        first={
          <></>
        }
        second={
          <></>
        }
        leftRatio={8}
        rightRatio={4}/>    
    </CommonFramerMotion>
    )
  }  